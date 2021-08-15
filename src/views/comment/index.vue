<template>
  <div class="comment-container">
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">评论管理</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
   <el-table
      :data="articles"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="total_comment_count"
        label="总评论数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fans_comment_count"
        label="粉丝评论数">
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态">
        <template slot-scope="scope">
          {{ scope.row.comment_status ? '正常' : '关闭' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.comment_status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :disabled="scope.row.onStatusDisabled"
            @change="onStatusChange(scope.row)"
            >
         </el-switch>
        </template>
      </el-table-column>
    </el-table>
    <!-- 页码 -->
    <el-pagination
      class="comment-pag"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 50]"
      :page-size.sync="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
</el-card>
  </div>
</template>

<script>
import {
  getArticles,
  updateCommentStatus
} from '@/api/article'

export default {
  name: 'commentIndex',
  components: {},
  props: {},
  data () {
    return {
      articles: [
      ],
      totalCount: 0,
      pageSize: 10
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadArticles()
  },
  mouted () {},
  methods: {
    handleSizeChange () {
      this.loadArticles(1)
    },
    handleCurrentChange (page) {
      this.loadArticles(page)
    },
    loadArticles (page = 1) {
      getArticles({
        response_type: 'comment',
        page,
        per_page: this.pageSize
      }).then(res => {
        const { results } = res.data.data
        results.forEach(article => {
          article.onStatusDisabled = false
        })
        this.articles = results
        this.totalCount = res.data.data.total_count
      })
    },
    onStatusChange (article) {
      article.onStatusDisabled = true
      updateCommentStatus(article.id.toString(), article.comment_status).then(res => {
        article.onStatusDisabled = false
      })
    }
  }
}
</script>

<style scoped lang="less">
.comment-pag {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 15px;
}
</style>
