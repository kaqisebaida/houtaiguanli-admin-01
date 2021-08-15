<template>
  <el-container class="layout-container">
  <el-aside width="auto">
    <AppAside
     class="el-aside"
     :is-collapse="isCollapse"
    />
  </el-aside>
  <el-container>
    <el-header class="header">
      <div>
        <i :class="{
          'el-icon-s-fold': !isCollapse,
          'el-icon-s-unfold': isCollapse
        }"
        @click ="isCollapse = !isCollapse">
        </i>
        <span>后台管理系统</span>
      </div>
      <el-dropdown>
  <span class="el-dropdown-link">
    <img src="http://toutiao-img.itheima.net/Fo2nw2ftgiPHnsinlgXxmWkS1BzQ" alt="">
    <span>{{user.name}}</span>
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item
    >设置</el-dropdown-item>
    <el-dropdown-item
    @click.native="onLogout"
    >退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import AppAside from './components/aside'
import { getUserProfile } from '@/api/user'

export default {
  name: 'LayoutIndex',
  components: {
    AppAside
  },
  props: {},
  data () {
    return {
      // 当然登录用户信息
      user: {},
      isCollapse: false
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadUserProfile()
  },
  mouted () {},
  methods: {
    loadUserProfile () {
      getUserProfile().then(res => {
        this.user = res.data.data
      })
    },
    onLogout () {
      this.$confirm('此操作将退出账号, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 用户状态删除
        window.localStorage.removeItem('user')

        // 跳转登录页
        this.$router.push('/login')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.layout-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.el-aside {
  height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items:center ;
}

.el-dropdown-link {
  display: flex;
    align-items:center;
}

.el-dropdown-link img {
  flex: 1;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
}

.el-dropdown-link span {
  align-items:center;
  line-height: 60px;
}
</style>
