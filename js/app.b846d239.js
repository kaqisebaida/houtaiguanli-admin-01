(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ae3":function(e,t,a){},"1abc":function(e,t,a){"use strict";a("d5dd")},"1b25":function(e,t,a){},"23cb":function(e,t,a){},"27b6":function(e,t,a){},"358d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r={name:"App"},s=r,l=a("2877"),c=Object(l["a"])(s,o,i,!1,null,null,null),u=c.exports,d=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("el-form",{ref:"login-form",attrs:{model:e.user,rules:e.fromRules}},[a("el-form-item",{attrs:{prop:"mobile"}},[a("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}})],1),a("el-form-item",{attrs:{prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}})],1),a("el-form-item",{attrs:{prop:"agree"}},[a("el-checkbox",{model:{value:e.user.agree,callback:function(t){e.$set(e.user,"agree",t)},expression:"user.agree"}},[e._v("我已知晓内容")])],1),a("el-form-item",[a("el-button",{staticClass:"login-btn",attrs:{type:"primary"},on:{click:e.onLogin}},[e._v("登录")])],1)],1)],1)},p=[],f=(a("d3b7"),a("bc3a")),h=a.n(f),g=a("d604"),b=a.n(g),v=a("5c96"),_=a.n(v),w=h.a.create({baseURL:"http://api-toutiao-web.itheima.net/",transformResponse:[function(e){try{return b.a.parse(e)}catch(t){return console.log("转换失败",t),e}}]});w.interceptors.request.use((function(e){var t=JSON.parse(window.localStorage.getItem("user"));return t&&(e.headers.Authorization="Bearer ".concat(t.token)),e}),(function(e){return Promise.reject(e)})),w.interceptors.response.use((function(e){return e}),(function(e){var t=e.response.status;return 401===t?(window.localStorage.removeItem("user"),at.push("/login"),v["Message"].error("登录状态无效，请重新登录")):403===t?Object(v["Message"])({type:"warning",message:"没有操作权限"}):400===t?v["Message"].error("参数错误，请检查请求参数"):t>=500&&v["Message"].error("服务端内部异常，请稍后重试"),Promise.reject(e)}));var C=w,x=function(e){return C({method:"POST",url:"/mp/v1_0/authorizations",data:e})},y=function(){return C({method:"GET",url:"/mp/v1_0/user/profile"})},$=function(e){return C({method:"PATCH",url:"/mp/v1_0/user/profile",data:e})},S={data:function(){return{user:{mobile:"13911111111",code:"246810"},fromRules:{mobile:[{required:!0,message:"请输入手机号",trigger:"change"},{pattern:/^1[3|5|7|8|9]\d{9}$/,message:"请输入正确的号码格式",trigger:"change"}],code:[{required:!0,message:"请输入验证码",trigger:"change"},{pattern:/^\d{6}$/,message:"请输入正确的验证码格式",trigger:"change"}],agree:[{validator:function(e,t,a){t?a():a(new Error("错误消息"))},message:"请勾选用户协议",trigger:"change"}]}}},methods:{onLogin:function(){var e=this;this.$refs["login-form"].validate((function(t,a){t&&e.login()}))},login:function(){var e=this;x(this.user).then((function(t){e.$message({message:"登录成功",type:"success"}),window.localStorage.setItem("user",JSON.stringify(t.data.data)),e.$router.push({name:"home"})})).catch((function(t){console.log("登录失败",t),e.$message.error("登录失败")}))}}},k=S,O=(a("6eca"),Object(l["a"])(k,m,p,!1,null,null,null)),z=O.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-container"},[a("div",[a("img",{staticClass:"home-img",attrs:{src:"http://toutiao-img.itheima.net/Fqn4YqWwsgHMkVMF6-clzFHBdKoT",alt:""}})])])}],I={name:"HomeIndex",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mouted:function(){},methods:{}},A=I,P=(a("c020"),Object(l["a"])(A,j,E,!1,null,"1cece58a",null)),T=P.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"layout-container"},[a("el-aside",{attrs:{width:"auto"}},[a("AppAside",{staticClass:"el-aside",attrs:{"is-collapse":e.isCollapse}})],1),a("el-container",[a("el-header",{staticClass:"header"},[a("div",[a("i",{class:{"el-icon-s-fold":!e.isCollapse,"el-icon-s-unfold":e.isCollapse},on:{click:function(t){e.isCollapse=!e.isCollapse}}}),a("span",[e._v("后台管理系统")])]),a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[a("img",{attrs:{src:"http://toutiao-img.itheima.net/Fo2nw2ftgiPHnsinlgXxmWkS1BzQ",alt:""}}),a("span",[e._v(e._s(e.user.name))]),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[e._v("设置")]),a("el-dropdown-item",{nativeOn:{click:function(t){return e.onLogout.apply(null,arguments)}}},[e._v("退出")])],1)],1)],1),a("el-main",[a("router-view")],1)],1)],1)},L=[],U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{attrs:{"default-active":e.$route.path,"background-color":"#002033","text-color":"#fff","active-text-color":"#ffd04b",router:"",collapse:e.isCollapse}},[a("el-menu-item",{attrs:{index:"/"}},[a("i",{staticClass:"el-icon-s-home"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),a("el-menu-item",{attrs:{index:"/article"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("内容管理")])]),a("el-menu-item",{attrs:{index:"/image"}},[a("i",{staticClass:"el-icon-picture"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("素材管理")])]),a("el-menu-item",{attrs:{index:"/punlish"}},[a("i",{staticClass:"el-icon-s-promotion"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("发布文章")])]),a("el-menu-item",{attrs:{index:"comment"}},[a("i",{staticClass:"el-icon-s-comment"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("评论管理")])]),a("el-menu-item",{attrs:{index:"fans"}},[a("i",{staticClass:"el-icon-setting"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("粉丝管理")])]),a("el-menu-item",{attrs:{index:"settings"}},[a("i",{staticClass:"el-icon-s-custom"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("个人设置")])])],1)},D=[],R={name:"AppAside",components:{},props:["is-collapse"],data:function(){return{}},computed:{},watch:{},created:function(){},mouted:function(){},methods:{}},q=R,M=Object(l["a"])(q,U,D,!1,null,"999fe0c4",null),B=M.exports,F={name:"LayoutIndex",components:{AppAside:B},props:{},data:function(){return{user:{},isCollapse:!1}},computed:{},watch:{},created:function(){this.loadUserProfile()},mouted:function(){},methods:{loadUserProfile:function(){var e=this;y().then((function(t){e.user=t.data.data}))},onLogout:function(){var e=this;this.$confirm("此操作将退出账号, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){window.localStorage.removeItem("user"),e.$router.push("/login"),e.$message({type:"success",message:"退出成功!"})})).catch((function(){e.$message({type:"info",message:"已取消退出"})}))}}},N=F,H=(a("f399"),Object(l["a"])(N,V,L,!1,null,"37d965e9",null)),J=H.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[e._v("内容管理")])])],1)],1),a("el-form",{ref:"form",staticClass:"el-from",attrs:{model:e.form,"label-width":"40px"}},[a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[a("el-radio",{attrs:{label:null}},[e._v("全部")]),a("el-radio",{attrs:{label:0}},[e._v("草稿")]),a("el-radio",{attrs:{label:1}},[e._v("待审核")]),a("el-radio",{attrs:{label:2}},[e._v("审核通过")]),a("el-radio",{attrs:{label:3}},[e._v("审核失败")]),a("el-radio",{attrs:{label:4}},[e._v("已删除")])],1)],1),a("el-form-item",{attrs:{label:"频道"}},[a("el-select",{attrs:{placeholder:"请选择频道"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"日期"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"开始日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"结束日期"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.loadArticles(1)}}},[e._v("查询")])],1)],1)],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("根据筛选的条件共查询到"+e._s(e.totalCount)+"条结果为：")])]),a("el-table",{staticClass:"list-table",staticStyle:{width:"100%"},attrs:{data:e.articles}},[a("el-table-column",{attrs:{prop:"date",label:"封面"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.cover.images[0],fit:"cover",la:""}},[a("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(" 加载中"),a("span",{staticClass:"dot"},[e._v("...")])])])]}}])}),a("el-table-column",{attrs:{prop:"title",label:"标题"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.articleStatus[t.row.status].type}},[e._v(" "+e._s(e.articleStatus[t.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"pubdate",label:"发布时间"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.$router.push("/punlish?id="+t.row.id)}}}),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.onDeleteArticle(t.row.id)}}})]}}])})],1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.totalCount,"page-size":e.pageSize},on:{"current-change":e.onCurrentChange}})],1)],1)},W=[],K=(a("25f0"),function(e){return C({method:"GET",url:"mp/v1_0/articles",params:e})}),Q=function(e){return C({method:"DELETE",url:"/mp/v1_0/articles/".concat(e)})},X=function(){return C({method:"GET",url:"/mp/v1_0/channels"})},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return C({method:"POST",url:"/mp/v1_0/articles",params:{draft:t},data:e})},Z=function(e){return C({method:"GET",url:"/mp/v1_0/articles/".concat(e)})},ee=function(e,t){return C({method:"PUT",url:"/mp/v1_0/comments/status",params:{article_id:e},data:{allow_comment:t}})},te={name:"Article",components:{},props:{},data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},articles:[],articleStatus:[{status:0,text:"草稿",type:"warning"},{status:1,text:"待审核"},{status:2,text:"审核成功",type:"success"},{status:3,text:"审核失败",type:"danger"},{status:4,text:"已删除",type:"danger"}],totalCount:0,pageSize:20,status:null}},computed:{},watch:{},created:function(){this.loadArticles(1)},mouted:function(){},methods:{loadArticles:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;K({page:t,per_page:this.pageSize,status:this.status}).then((function(t){var a=t.data.data,n=a.results,o=a.total_count;e.articles=n,e.totalCount=o}))},onSubmit:function(){console.log("submit!")},onCurrentChange:function(e){this.loadArticles(e)},onDeleteArticle:function(e){var t=this;this.$confirm("此操作将删除文章, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Q(e.toString()).then((function(e){t.loadArticles(t.page)})),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},ae=te,ne=(a("b2fb"),Object(l["a"])(ae,G,W,!1,null,"27f2edc4",null)),oe=ne.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[e._v("发布文章")])])],1)],1),a("el-form",{ref:"form",attrs:{model:e.article,rules:e.rules,"label-width":"60px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:e.article.title,callback:function(t){e.$set(e.article,"title",t)},expression:"article.title"}})],1),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("el-tiptap",{attrs:{lang:"zh",extensions:e.extensions,height:"350",placeholder:"请输入文章内容"},model:{value:e.article.content,callback:function(t){e.$set(e.article,"content",t)},expression:"article.content"}})],1),a("el-form-item",{attrs:{label:"封面"}},[a("el-radio-group",{model:{value:e.article.cover.type,callback:function(t){e.$set(e.article.cover,"type",t)},expression:"article.cover.type"}},[a("el-radio",{attrs:{label:1}},[e._v("单图")]),a("el-radio",{attrs:{label:3}},[e._v("三图")]),a("el-radio",{attrs:{label:0}},[e._v("无图")]),a("el-radio",{attrs:{label:-1}},[e._v("自动")])],1),e.article.cover.type>0?e._l(e.article.cover.type,(function(t,n){return a("upload-cover",{key:t,model:{value:e.article.cover.images[n],callback:function(t){e.$set(e.article.cover.images,n,t)},expression:"article.cover.images[index]"}})})):e._e()],2),a("el-form-item",{attrs:{label:"频道",prop:"channel_id"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.article.channel_id,callback:function(t){e.$set(e.article,"channel_id",t)},expression:"article.channel_id"}},e._l(e.channels,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onPunlish(!1)}}},[e._v("发表")]),a("el-button",[e._v("存入草稿")])],1)],1)],1)},re=[],se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-cover",on:{click:e.showCoverVisible}},[a("div",{staticClass:"upload-img"},[a("img",{ref:"cover-image",staticClass:"cover-image",attrs:{src:e.value}})]),a("el-dialog",{attrs:{visible:e.dialogVisible,width:"30%","append-to-body":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"素材库",name:"first"}},[a("image-list",{ref:"img-list",attrs:{"is-show-add":!1,"is-show-action":!1}})],1),a("el-tab-pane",{attrs:{label:"上传图片",name:"second"}},[a("input",{ref:"file",attrs:{type:"file"},on:{change:e.onFileChange}}),a("img",{ref:"preview-image",attrs:{alt:""}})])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.onCoverConfirm}},[e._v("确 定")])],1)],1)],1)},le=[],ce=(a("3ca3"),a("ddb0"),a("2b3d"),function(e){return C({method:"POST",url:"/mp/v1_0/user/images",data:e})}),ue=function(e){return C({method:"GET",url:"/mp/v1_0/user/images",params:e})},de=function(e,t){return C({method:"PUT",url:"/mp/v1_0/user/images/".concat(e),data:{collect:t}})},me=function(e){return C({method:"DELETE",url:"/mp/v1_0/user/images/".concat(e)})},pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"img-list"},[a("div",[a("div",{staticClass:"img-btn"},[a("el-radio-group",{attrs:{size:"mini"},on:{change:e.onChange},model:{value:e.collect,callback:function(t){e.collect=t},expression:"collect"}},[a("el-radio-button",{attrs:{label:!1}},[e._v("全部")]),a("el-radio-button",{attrs:{label:!0}},[e._v("收藏")])],1),e.isShowAdd?a("el-button",{attrs:{type:"success"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("上传素材")]):e._e(),a("el-dialog",{attrs:{title:"上传素材",visible:e.dialogVisible,width:"21%","before-close":e.handleClose,"append-to-body":!0},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"http://api-toutiao-web.itheima.net/mp/v1_0/user/images",headers:e.uploadHeaders,name:"image",multiple:""}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])])],1)],1),a("el-row",{attrs:{gutter:10}},e._l(e.images,(function(t,n){return a("el-col",{key:n.vue,staticClass:"image-item",attrs:{xs:12,sm:6,md:6,lg:4},nativeOn:{click:function(t){e.selected=n}}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.url,fit:"cover"}}),e.selected===n?a("div",{staticClass:"selected"}):e._e(),e.isShowAction?a("div",{staticClass:"image-action"},[a("i",{class:{"el-icon-star-off":!t.is_collected,"el-icon-star-on":t.is_collected},on:{click:function(a){return e.onCollect(t)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini"},on:{click:function(a){return e.deleteImg(t)}}})],1):e._e()],1)})),1),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.totalCount,"page-size":e.pageSize},on:{"current-change":e.onPageChange}})],1)])},fe=[],he={name:"ImaListIndex",components:{},props:{isShowAdd:{type:Boolean,default:!0},isShowAction:{type:Boolean,default:!0}},data:function(){var e=JSON.parse(window.localStorage.getItem("user"));return{collect:!1,images:[],dialogVisible:!1,uploadHeaders:{Authorization:"Bearer ".concat(e.token)},totalCount:0,pageSize:18,selected:null}},computed:{},watch:{},created:function(){this.loadImages()},mouted:function(){},methods:{loadImages:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;ue({collect:this.collect,page:t,per_page:this.pageSize}).then((function(t){e.images=t.data.data.results,e.totalCount=t.data.data.total_count}))},onChange:function(){this.loadImages(1)},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},onPageChange:function(e){this.loadImages(e)},onCollect:function(e){de(e.id,!e.is_collected).then((function(t){e.is_collected=!e.is_collected}))},deleteImg:function(e){var t=this;me(e.id).then((function(e){t.loadImages(t.page)}))}}},ge=he,be=(a("6648"),Object(l["a"])(ge,pe,fe,!1,null,"5ea73d21",null)),ve=be.exports,_e={name:"UploadCover",components:{ImageList:ve},props:["value"],data:function(){return{dialogVisible:!1,activeName:"second"}},computed:{},watch:{},created:function(){},mouted:function(){},methods:{showCoverVisible:function(){this.dialogVisible=!0},onFileChange:function(){var e=this.$refs.file.files[0],t=window.URL.createObjectURL(e);this.$refs["preview-image"].src=t},onCoverConfirm:function(){var e=this;if("second"===this.activeName){var t=this.$refs.file.files[0];if(!t)return void this.$message("请选择图片");var a=new FormData;a.append("image",t),ce(a).then((function(t){e.dialogVisible=!1,e.$refs["cover-image"].src=t.data.data.url,e.$emit("input",t.data.data.url)}))}else if("first"===this.activeName){var n=this.$refs["img-list"],o=n.selected;if(null===o)return void this.$message("请选择图片");this.dialogVisible=!1,this.$emit("input",n.images[o].url)}}}},we=_e,Ce=(a("1abc"),Object(l["a"])(we,se,le,!1,null,"3e438d2e",null)),xe=Ce.exports,ye=a("4ccc"),$e=(a("7eef"),{name:"PublishIndex",components:{"el-tiptap":ye["e"],UploadCover:xe},props:{},data:function(){return{channels:[],article:{title:"",content:"",cover:{type:1,images:[]},channel_id:null},extensions:[new ye["d"],new ye["p"],new ye["m"],new ye["g"]({level:3}),new ye["a"]({bubble:!0}),new ye["t"],new ye["j"],new ye["i"]({uploadRequest:function(e){var t=new FormData;return t.append("image",e),ce(t).then((function(e){return e.data.data.url}))}}),new ye["o"],new ye["h"],new ye["k"],new ye["b"],new ye["l"],new ye["r"],new ye["s"],new ye["f"],new ye["n"],new ye["c"],new ye["q"]],rules:{title:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:5,max:30,message:"长度在 5 到 30 个字符",trigger:"blur"}],content:[{validator:function(e,t,a){console.log("content validator"),"<p></p>"===t?a(new Error("请输入文章内容")):a()}},{required:!0,message:"请输入文章内容",trigger:"blur"}],channel_id:[{required:!0,message:"请选择文章频道"}]}}},computed:{},watch:{},created:function(){this.loadChannels(),this.loadArticle()},mouted:function(){},methods:{loadChannels:function(){var e=this;X().then((function(t){e.channels=t.data.data.channels}))},onPunlish:function(){var e=this;Y(this.article).then((function(t){e.$message({type:"success",message:"发布成功!"})}))},loadArticle:function(){var e=this;Z(this.$route.query.id).then((function(t){e.article=t.data.data}))},onUpdateCover:function(e,t){this.article.cover.images[e]=t}}}),Se=$e,ke=Object(l["a"])(Se,ie,re,!1,null,"ab872e5e",null),Oe=ke.exports,ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"image-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[e._v("素材管理")])])],1)],1),a("image-list")],1)],1)},je=[],Ee={name:"ImageIndex",components:{ImageList:ve},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mouted:function(){},methods:{}},Ie=Ee,Ae=(a("b8e7"),Object(l["a"])(Ie,ze,je,!1,null,"69f0aee0",null)),Pe=Ae.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"comment-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[e._v("评论管理")])])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.articles}},[a("el-table-column",{attrs:{prop:"title",label:"标题",width:"180"}}),a("el-table-column",{attrs:{prop:"total_comment_count",label:"总评论数",width:"180"}}),a("el-table-column",{attrs:{prop:"fans_comment_count",label:"粉丝评论数"}}),a("el-table-column",{attrs:{prop:"address",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.comment_status?"正常":"关闭")+" ")]}}])}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:t.row.onStatusDisabled},on:{change:function(a){return e.onStatusChange(t.row)}},model:{value:t.row.comment_status,callback:function(a){e.$set(t.row,"comment_status",a)},expression:"scope.row.comment_status"}})]}}])})],1),a("el-pagination",{staticClass:"comment-pag",attrs:{"current-page":1,"page-sizes":[10,20,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}})],1)],1)},Ve=[],Le=(a("159b"),{name:"commentIndex",components:{},props:{},data:function(){return{articles:[],totalCount:0,pageSize:10}},computed:{},watch:{},created:function(){this.loadArticles()},mouted:function(){},methods:{handleSizeChange:function(){this.loadArticles(1)},handleCurrentChange:function(e){this.loadArticles(e)},loadArticles:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;K({response_type:"comment",page:t,per_page:this.pageSize}).then((function(t){var a=t.data.data.results;a.forEach((function(e){e.onStatusDisabled=!1})),e.articles=a,e.totalCount=t.data.data.total_count}))},onStatusChange:function(e){e.onStatusDisabled=!0,ee(e.id.toString(),e.comment_status).then((function(t){e.onStatusDisabled=!1}))}}}),Ue=Le,De=(a("9ac7"),Object(l["a"])(Ue,Te,Ve,!1,null,"1c9cc70e",null)),Re=De.exports,qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"settings-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[e._v("个人设置")])])],1)],1),a("el-row",[a("el-col",{attrs:{span:15}},[a("el-form",{ref:"form",attrs:{model:e.user,"label-width":"80px",rules:e.setRules}},[a("el-form-item",{attrs:{label:"编号"},model:{value:e.user.id,callback:function(t){e.$set(e.user,"id",t)},expression:"user.id"}},[e._v(" "+e._s(e.user.id)+" ")]),a("el-form-item",{attrs:{label:"手机"},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}},[e._v(" "+e._s(e.user.mobile)+" ")]),a("el-form-item",{attrs:{label:"媒体名称",prop:"name"}},[a("el-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),a("el-form-item",{attrs:{label:"媒体介绍",prop:"intro"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.user.intro,callback:function(t){e.$set(e.user,"intro",t)},expression:"user.intro"}})],1),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.updateProfileLoading},on:{click:e.onUpdateUser}},[e._v("立即创建")]),a("el-button",[e._v("取消")])],1)],1)],1),a("el-col",{attrs:{span:4,offset:2}},[a("label",{attrs:{for:"file"}},[a("el-image",{staticStyle:{width:"200px",height:"200px"},attrs:{src:e.user.photo,fit:"cover"}}),a("p",[e._v("点击修改头像")])],1),a("input",{ref:"file",attrs:{type:"file",id:"file",hidden:""}})])],1)],1),a("el-dialog",{attrs:{title:"修改头像","append-to-body":"",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"preview-image-wrap"},[a("img",{staticClass:"preview-image",attrs:{src:e.prevewImage,alt:""},on:{opened:e.onDialogOpened}})]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},Me=[],Be=(a("b0c0"),a("ac1f"),a("5319"),a("6107"),a("bab4")),Fe=a.n(Be),Ne={name:"SettingsIndex",components:{},props:{},data:function(){return{user:{email:"",id:"",intro:"",mobile:"",name:"",photo:""},dialogVisible:!1,prevewImage:"",cropper:null,updateProfileLoading:!1,setRules:{name:[{required:!0,message:"请输入媒体名称",trigger:"blur"},{min:1,max:7,message:"长度在 1 到 7 个字符",trigger:"blur"}]}}},computed:{},watch:{},created:function(){this.loadUser()},mouted:function(){},methods:{loadUser:function(){var e=this;y().then((function(t){e.user=t.data.data}))},onUpdateUser:function(){var e=this;this.updateProfileLoading=!0;var t=this.user,a=t.name,n=t.intro,o=t.email;$({name:a,intro:n,email:o}).then((function(t){e.$message({type:"success",message:"保存成功"}),e.updateProfileLoading=!1}))},onFileChange:function(){var e=window.URL.createObjectURL(this.$refs.file.files[0]);this.prevewImage=e,this.dialogVisible=!0,this.$refs.file.value=""},onDialogOpened:function(){var e=this.$refs["preview-image"];this.cropper?this.cropper.replace(this.previewImage):this.cropper=new Fe.a(e,{viewMode:1,dragMode:"none",aspectRatio:1,cropBoxResizable:!1})},onDialogClosed:function(){}}},He=Ne,Je=(a("e170"),Object(l["a"])(He,qe,Me,!1,null,"77309ad8",null)),Ge=Je.exports,We=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fans-container"})},Ke=[],Qe={name:"FansIndex",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mouted:function(){},methods:{}},Xe=Qe,Ye=Object(l["a"])(Xe,We,Ke,!1,null,"34ca35b7",null),Ze=Ye.exports;n["default"].use(d["a"]);var et=[{path:"/login",name:"login",component:z},{path:"",component:J,children:[{path:"/",name:"home",component:T},{path:"/article",name:"article",component:oe},{path:"/punlish",name:"punlish",component:Oe},{path:"/image",name:"image",component:Pe},{path:"/comment",name:"comment",component:Re},{path:"/settings",name:"settings",component:Ge},{path:"/fans",name:"fans",component:Ze}]}],tt=new d["a"]({routes:et});tt.beforeEach((function(e,t,a){var n=JSON.parse(window.localStorage.getItem("user"));"/login"!==e.path?n?a():a("/login"):a()}));var at=tt;a("0fae"),a("a4b1");n["default"].use(_.a),n["default"].config.productionTip=!1,new n["default"]({router:at,render:function(e){return e(u)}}).$mount("#app")},6648:function(e,t,a){"use strict";a("0ae3")},"6eca":function(e,t,a){"use strict";a("1b25")},"8cc3":function(e,t,a){},"9ac7":function(e,t,a){"use strict";a("358d")},a4b1:function(e,t,a){},b2fb:function(e,t,a){"use strict";a("e5f6")},b8e7:function(e,t,a){"use strict";a("27b6")},ba84:function(e,t,a){},c020:function(e,t,a){"use strict";a("8cc3")},d5dd:function(e,t,a){},e170:function(e,t,a){"use strict";a("ba84")},e5f6:function(e,t,a){},f399:function(e,t,a){"use strict";a("23cb")}});
//# sourceMappingURL=app.b846d239.js.map