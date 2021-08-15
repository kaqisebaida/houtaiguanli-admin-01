<template>
  <div class="settings-container">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">个人设置</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <el-row>
    <el-col :span="15">
      <el-form ref="form" :model="user" label-width="80px" :rules="setRules">
  <el-form-item label="编号" v-model="user.id">
    {{ user.id }}
  </el-form-item>
  <el-form-item label="手机" v-model="user.mobile">
    {{ user.mobile }}
  </el-form-item>
  <el-form-item label="媒体名称" prop="name">
    <el-input v-model="user.name"></el-input>
  </el-form-item>
  <el-form-item label="媒体介绍" prop="intro">
    <el-input type="textarea" v-model="user.intro"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="user.email"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button
    type="primary"
    @click="onUpdateUser"
    :loading="updateProfileLoading"
    >立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    </el-col>
    <el-col :span="4" :offset="2">
      <label for="file">
        <el-image
          style="width: 200px; height: 200px"
          :src="user.photo"
          fit="cover"></el-image>
      <p>点击修改头像</p>
      </label>
      <input
      type="file"
      id="file"
      ref="file"
      hidden
      >
    </el-col>
  </el-row>
</el-card>
  <el-dialog
  title="修改头像"
  append-to-body
  :visible.sync="dialogVisible">
  <div class="preview-image-wrap">
    <img
      class="preview-image"
      :src="prevewImage"
      alt=""
      @opened="onDialogOpened"
    >
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import {
  getUserProfile,
  updateUserProfile
} from '@/api/user'
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'

export default {
  name: 'SettingsIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        email: '',
        id: '',
        intro: '',
        mobile: '',
        name: '',
        photo: ''
      },
      dialogVisible: false,
      prevewImage: '',
      cropper: null, // 裁切器示例
      updateProfileLoading: false,
      setRules: {
        name: [
          { required: true, message: '请输入媒体名称', trigger: 'blur' },
          { min: 1, max: 7, message: '长度在 1 到 7 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadUser()
  },
  mouted () {},
  methods: {
    loadUser () {
      getUserProfile().then(res => {
        this.user = res.data.data
      })
    },
    onUpdateUser () {
      this.updateProfileLoading = true
      const { name, intro, email } = this.user
      updateUserProfile({
        name,
        intro,
        email
      }).then(res => {
        this.$message({
          type: 'success',
          message: '保存成功'
        })
        this.updateProfileLoading = false
      })
    },
    onFileChange () {
      const blobDdta = window.URL.createObjectURL(this.$refs.file.files[0])
      this.prevewImage = blobDdta
      this.dialogVisible = true
      this.$refs.file.value = ''
    },
    onDialogOpened () {
      // 图片裁切器必须基于 img 进行初始化
      // 注意：img 必须是可见状态才能正常完成初始化
      //       因为我们这里要在对话框里面初始化裁切器
      //       所以务必要在对话框完全打开的状态去进行初始化。
      // 获取图片 DOM 节点
      const image = this.$refs['preview-image']

      // 第1次初始化好以后，如果预览裁切的图片发生了变化，裁切器默认不会更新
      // 如果需要预览图片发生变化更新裁切器：
      //    方式一：裁切器.replace 方法
      //    方式二：销毁裁切器，重新初始化
      // 初始化裁切器
      if (this.cropper) {
        this.cropper.replace(this.previewImage)
        return
      }
      this.cropper = new Cropper(image, {
        viewMode: 1,
        dragMode: 'none',
        aspectRatio: 1,
        cropBoxResizable: false

        // 当你移动裁切器的时候会触发调用 crop 方法
        // crop (event) {
        //   console.log(event.detail.x)
        //   console.log(event.detail.y)
        //   console.log(event.detail.width)
        //   console.log(event.detail.height)
        //   console.log(event.detail.rotate)
        //   console.log(event.detail.scaleX)
        //   console.log(event.detail.scaleY)
        // }
      })
    },

    onDialogClosed () {
      // 对话框关闭，销毁裁切器
      // this.cropper.destroy()
    }
  }
}
</script>

<style scoped lang="less">
// .el-image p {

// }
.preview-image-wrap {
  .preview-image {
    display: block;
    max-width: 100%;
  }
}
</style>
