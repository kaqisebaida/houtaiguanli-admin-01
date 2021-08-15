<template>
  <div class="image-container">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">素材管理</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <image-list></image-list>
</el-card>
  </div>
</template>

<script>

import ImageList from './components/img-list.vue'

export default {
  name: 'ImageIndex',
  components: { ImageList },
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mouted () {},
  methods: {}
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
</style>
