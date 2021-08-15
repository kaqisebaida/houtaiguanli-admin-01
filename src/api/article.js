// 文章相关请求模块
import request from '@/utils/request'

export const getArticles = params => {
  return request({
    method: 'GET',
    url: 'mp/v1_0/articles',
    // Body参数用data传，quesy参数用 params传
    params
  })
}

// 文章删除

export const deleteArticle = articleId => {
  return request({
    method: 'DELETE',
    url: `/mp/v1_0/articles/${articleId}`
    // Body参数用data传，quesy参数用 params传
  })
}

// 获取文章频道
export const getChannels = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/channels'
  })
}

// 文章发布
export const addArticle = (data, draft = false) => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/articles',
    params: {
      draft
    },
    data
  })
}

// 文章修改
export const updateArticle = (articleId, data, draft = false) => {
  return request({
    method: 'PUT',
    url: `/mp/v1_0/articles/${articleId}`,
    params: {
      draft
    },
    data
  })
}

// 获取文章
export const getArticle = articleId => {
  return request({
    method: 'GET',
    url: `/mp/v1_0/articles/${articleId}`
  })
}

// 修改文章评论状态
export const updateCommentStatus = (articleId, allowComment) => {
  return request({
    method: 'PUT',
    url: '/mp/v1_0/comments/status',
    params: {
      article_id: articleId
    },
    data: {
      allow_comment: allowComment
    }
  })
}
