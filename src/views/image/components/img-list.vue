<template>
  <div class="img-list">
    <div>
       <div class="img-btn">
          <el-radio-group
            v-model="collect"
            size="mini"
            @change="onChange"
            >
      <el-radio-button :label="false">全部</el-radio-button>
      <el-radio-button :label="true">收藏</el-radio-button>
    </el-radio-group>
      <el-button type="success"
      @click="dialogVisible = true"
      v-if="isShowAdd"
      >上传素材</el-button>
        <el-dialog
          title="上传素材"
          :visible.sync="dialogVisible"
          width="21%"
          :before-close="handleClose"
          :append-to-body="true"
          >
            <el-upload
              class="upload-demo"
              drag
              action="http://api-toutiao-web.itheima.net/mp/v1_0/user/images"
              :headers="uploadHeaders"
              name="image"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-dialog>
       </div>
    <el-row :gutter="10">
  <el-col :xs="12" :sm="6" :md="6" :lg="4"
  v-for="(img, index) in images"
  :key="index.vue"
  class="image-item"
  @click.native="selected = index"
  >
    <el-image
      style="width: 100px; height: 100px"
      :src="img.url"
      fit="cover">
      </el-image>
      <div
      class="selected"
      v-if="selected === index"
      ></div>
      <div class="image-action" v-if="isShowAction">
        <i
        :class="{
          'el-icon-star-off': !img.is_collected,
          'el-icon-star-on': img.is_collected
        }"
        @click="onCollect(img)"
        >
        </i>
        <el-button type="danger"
        icon="el-icon-delete"
        circle size="mini"
        @click="deleteImg(img)"
        ></el-button>
      </div>
  </el-col>
    </el-row>
    <el-pagination
       background
       layout="prev, pager, next"
       :total="totalCount"
       :page-size="pageSize"
       @current-change="onPageChange"
       >
    </el-pagination>
  </div>
  </div>
</template>

<script>

import {
  getImage,
  collectImage,
  deleteImage
} from '@/api/images'

export default {
  name: 'ImaListIndex',
  components: {},
  props: {
    isShowAdd: {
      type: Boolean,
      default: true
    },
    isShowAction: {
      type: Boolean,
      default: true
    }
  },
  data () {
    const user = JSON.parse(window.localStorage.getItem('user'))
    return {
      collect: false,
      images: [],
      dialogVisible: false,
      uploadHeaders: {
        Authorization: `Bearer ${user.token}`
      },
      totalCount: 0,
      pageSize: 18,
      selected: null
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadImages()
  },
  mouted () {},
  methods: {
    loadImages (page = 1) {
      getImage({
        collect: this.collect,
        page,
        per_page: this.pageSize
      }).then(res => {
        this.images = res.data.data.results
        this.totalCount = res.data.data.total_count
      })
    },
    onChange () {
      this.loadImages(1)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    onPageChange (page) {
      this.loadImages(page)
    },
    onCollect (img) {
      collectImage(img.id, !img.is_collected).then(res => {
        img.is_collected = !img.is_collected
      })
    },
    deleteImg (img) {
      deleteImage(img.id).then(res => {
        this.loadImages(this.page)
      })
    }
  }
}
</script>

<style scoped lang="less">
.img-btn {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.image-item {
  position: relative;
}

.image-action {
  height: 30px;
  background-color: rgba(204, 204, 204, .5);
  position: absolute;
  bottom: 4px;
  left: 5px;
  right: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}

.selected {
  background: url(./selected.png) no-repeat;
  background-size: cover;
  position: absolute;
  color: #409EFF;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
