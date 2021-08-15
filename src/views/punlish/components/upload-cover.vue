<template>
  <div class="upload-cover" @click="showCoverVisible">
    <div class="upload-img">
      <img
        class="cover-image"
        ref="cover-image"
        :src="value"
      >
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      append-to-body
      >
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="素材库" name="first">
          <image-list :is-show-add="false" :is-show-action="false" ref="img-list"/>
        </el-tab-pane>
        <el-tab-pane label="上传图片" name="second">
          <input type="file" ref="file" @change="onFileChange">
          <img ref="preview-image" alt="">
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onCoverConfirm">确 定</el-button>
      </span>
</el-dialog>
  </div>
</template>

<script>
import { uploadImage } from '@/api/images'
import ImageList from '@/views/image/components/img-list'

export default {
  name: 'UploadCover',
  components: { ImageList },
  props: ['value'],
  data () {
    return {
      dialogVisible: false,
      activeName: 'second'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mouted () {},
  methods: {
    showCoverVisible () {
      this.dialogVisible = true
    },
    onFileChange () {
      const file = this.$refs.file.files[0]
      const blob = window.URL.createObjectURL(file)
      this.$refs['preview-image'].src = blob
    },
    onCoverConfirm () {
      if (this.activeName === 'second') {
        const file = this.$refs.file.files[0]
        if (!file) {
          this.$message('请选择图片')
          return
        }
        const fd = new FormData()
        fd.append('image', file)
        uploadImage(fd).then(res => {
          this.dialogVisible = false
          this.$refs['cover-image'].src = res.data.data.url
          this.$emit('input', res.data.data.url)
        })
      } else if (this.activeName === 'first') {
        const imageList = this.$refs['img-list']
        const selected = imageList.selected
        if (selected === null) {
          this.$message('请选择图片')
          return
        }
        // 关闭对话框
        this.dialogVisible = false
        // 修改父组件
        this.$emit('input', imageList.images[selected].url)
      }
    }
  }
}
</script>

<style scoped lang="less">
.upload-img {
  float: left;
  display: flex;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
</style>
