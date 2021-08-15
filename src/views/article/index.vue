<template>
  <div class="article-container">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">内容管理</a></el-breadcrumb-item>
  </el-breadcrumb>
  </div>
    <el-form ref="form" :model="form" label-width="40px" class="el-from">
    <el-form-item label="状态">
    <el-radio-group v-model="status">
      <el-radio :label="null">全部</el-radio>
      <el-radio :label="0">草稿</el-radio>
      <el-radio :label="1">待审核</el-radio>
      <el-radio :label="2">审核通过</el-radio>
      <el-radio :label="3">审核失败</el-radio>
      <el-radio :label="4">已删除</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="频道">
    <el-select v-model="form.region" placeholder="请选择频道">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="日期">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col :span="11">
      <el-time-picker placeholder="结束日期" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="loadArticles (1)">查询</el-button>
  </el-form-item>
</el-form>
</el-card>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>根据筛选的条件共查询到{{ totalCount }}条结果为：</span>
  </div>
   <!-- 数据列表 -->
    <el-table
      :data="articles"
      style="width: 100%"
      class="list-table"
      >
      <el-table-column
        prop="date"
        label="封面">
        <template slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.cover.images[0]"
            fit="cover"
            la>
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
          <!-- <img
          v-if="scope.row.cover.images[0]"
          class="article-cover"
          :src="scope.row.cover.images[0]" alt="">
          <img v-else class="article-cover" src="./no-cover.jpg" alt=""> -->
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
          <el-tag :type="articleStatus[scope.row.status].type">
            {{ articleStatus[scope.row.status].text }}
          </el-tag>
          <!-- <el-tag v-if="scope.row.status === 1">待审核</el-tag>
          <el-tag type="success" v-if="scope.row.status === 2">审核成功</el-tag>
          <el-tag type="danger" v-if="scope.row.status === 3">审核失败</el-tag>
          <el-tag type="info" v-if="scope.row.status === 4">已删除</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column
        prop="pubdate"
        label="发布时间">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary" icon="el-icon-edit" circle
          @click="$router.push('/punlish?id=' + scope.row.id)"
          ></el-button>
        <el-button
          size="mini"
          type="danger" icon="el-icon-delete" circle
          @click="onDeleteArticle(scope.row.id)"
          ></el-button>
      </template>
      </el-table-column>
    </el-table>
    <!-- 数据列表 -->

    <!-- 数据分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalCount"
      @current-change="onCurrentChange"
      :page-size="pageSize"
      >
    </el-pagination>
    <!-- 数据分页 -->
</el-card>
  </div>
</template>

<script>
import { getArticles, deleteArticle } from '@/api/article'

export default {
  name: 'Article',
  components: {},
  props: {},
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      articles: [],
      articleStatus: [
        { status: 0, text: '草稿', type: 'warning' },
        { status: 1, text: '待审核' },
        { status: 2, text: '审核成功', type: 'success' },
        { status: 3, text: '审核失败', type: 'danger' },
        { status: 4, text: '已删除', type: 'danger' }
      ],
      totalCount: 0,
      pageSize: 20,
      // 查询文章状态，不穿就是全部
      status: null
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadArticles(1)
  },
  mouted () {},
  methods: {
    loadArticles (page = 1) {
      getArticles({
        page,
        per_page: this.pageSize,
        status: this.status
        // begin_pubdate: '2021-7-30',
        // end_pubdate: '2020-7-31'
      }).then(res => {
        const { results, total_count: totalCount } = res.data.data
        this.articles = results
        this.totalCount = totalCount
      })
    },
    onSubmit () {
      console.log('submit!')
    },
    onCurrentChange (page) {
      this.loadArticles(page)
    },
    onDeleteArticle (articleId) {
      this.$confirm('此操作将删除文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteArticle(articleId.toString()).then(res => {
          this.loadArticles(this.page)
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}

</script>

<style scoped lang="less">
.box-card {
  margin: 20px;
}

.el-from {
  padding: 30px;
}

.list-table {
  margin: 20px;
}

.clearfix span {
  margin-left: 20px;
}

.article-cover {
  width: 100px;
  background-size: cover;
}
</style>
