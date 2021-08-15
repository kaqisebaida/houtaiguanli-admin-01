<template>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">发布文章</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
      <el-form ref="form" :model="article" :rules="rules" label-width="60px">
  <el-form-item label="标题" prop="title">
    <el-input v-model="article.title"></el-input>
  </el-form-item>
    <el-form-item label="内容" prop="content">
    <el-tiptap
       lang="zh"
       v-model="article.content"
       :extensions="extensions"
       height="350"
       placeholder="请输入文章内容"
     ></el-tiptap>
  </el-form-item>
  <el-form-item label="封面">
    <el-radio-group v-model="article.cover.type">
      <el-radio :label="1">单图</el-radio>
      <el-radio :label="3">三图</el-radio>
      <el-radio :label="0">无图</el-radio>
      <el-radio :label="-1">自动</el-radio>
    </el-radio-group>
    <template v-if="article.cover.type > 0">
      <upload-cover
      :key="cover"
      v-for="(cover, index) in article.cover.type"
      v-model="article.cover.images[index]"
    ></upload-cover>
    </template>
  </el-form-item>
    <el-form-item label="频道" prop="channel_id">
    <el-select v-model="article.channel_id" placeholder="请选择活动区域">
      <el-option
        :label="(item.name)"
        v-for="(item, index) in channels"
        :key="index"
        :value="(item.id)">
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onPunlish (false)">发表</el-button>
    <el-button>存入草稿</el-button>
  </el-form-item>
</el-form>
</el-card>
</template>

<script>
import UploadCover from './components/upload-cover.vue'

import {
  getChannels,
  addArticle,
  // updateArticle,
  getArticle
} from '@/api/article'

import {
  ElementTiptap,
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Image,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
  TodoItem,
  TodoList,
  HorizontalRule,
  Fullscreen,
  Preview,
  CodeBlock,
  TextColor
} from 'element-tiptap'

import 'element-tiptap/lib/index.css'

import { uploadImage } from '@/api/images'

export default {
  name: 'PublishIndex',
  components: {
    'el-tiptap': ElementTiptap,
    UploadCover
  },
  props: {},
  data () {
    return {
      channels: [],
      article: {
        title: '',
        content: '',
        cover: {
          type: 1,
          images: []
        },
        channel_id: null
      },
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 3 }),
        new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
        new Underline(), // 下划线
        new Italic(), // 斜体
        new Image({
          // 默认会把图片生成 base64 字符串和内容存储在一起，如果需要自定义图片上传
          uploadRequest (file) {
            // 如果接口要求 Content-Type 是 multipart/form-data，则请求体必须使用 FormData
            const fd = new FormData()
            fd.append('image', file)
            // 第1个 return 是返回 Promise 对象
            // 为什么？因为 axios 本身就是返回 Promise 对象
            return uploadImage(fd).then(res => {
              // 这个 return 是返回最后的结果
              return res.data.data.url
            })
          } // 图片的上传方法，返回一个 Promise<url>
        }),
        new Strike(), // 删除线
        new HorizontalRule(), // 华丽的分割线
        new ListItem(),
        new BulletList(), // 无序列表
        new OrderedList(), // 有序列表
        new TodoItem(),
        new TodoList(),
        new Fullscreen(),
        new Preview(),
        new CodeBlock(),
        new TextColor()
      ],
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
        ],
        content: [
          // { required: true, message: '请输入文章内容', trigger: 'change' }
          {
            validator (rule, value, callback) {
              console.log('content validator')
              if (value === '<p></p>') {
                // 验证失败
                callback(new Error('请输入文章内容'))
              } else {
                // 验证通过
                callback()
              }
            }
          },
          { required: true, message: '请输入文章内容', trigger: 'blur' }
        ],
        channel_id: [
          { required: true, message: '请选择文章频道' }
        ]
      }
    }
  },
  computed: {
  },
  watch: {},
  created () {
    this.loadChannels()
    // if (this.$route.query.id) {
    //   this.loadArticle
    // }
    this.loadArticle()
  },
  mouted () {},
  methods: {
    loadChannels () {
      getChannels().then(res => {
        this.channels = res.data.data.channels
      })
    },
    onPunlish () {
      addArticle(this.article).then(res => {
        this.$message({
          type: 'success',
          message: '发布成功!'
        })
      })
    },
    loadArticle () {
      getArticle(this.$route.query.id).then(res => {
        this.article = res.data.data
      })
    },
    onUpdateCover (index, url) {
      this.article.cover.images[index] = url
    }
  }
}
</script>

<style scoped lang="less">
</style>
