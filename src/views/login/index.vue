<template>
  <div class="login-container">

    <el-form
    ref="login-form"
    :model="user"
    :rules="fromRules"
     >
  <el-form-item prop="mobile">
    <el-input
      v-model="user.mobile"
      placeholder="请输入手机号"></el-input>
  </el-form-item>
  <el-form-item prop="code">
    <el-input
      v-model="user.code"
      placeholder="请输入验证码"></el-input>
  </el-form-item>
    <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已知晓内容</el-checkbox>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onLogin" class="login-btn">登录</el-button>
  </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { login } from '@/api/user'

export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        // 手机号
        code: '246810'
        // 密码
      },
      fromRules: {
        mobile: [
          // blur静态绑定，change动态绑定
          { required: true, message: '请输入手机号', trigger: 'change' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'change' },
          { pattern: /^\d{6}$/, message: '请输入正确的验证码格式', trigger: 'change' }
        ],
        agree: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('错误消息'))
              }
            },
            message: '请勾选用户协议',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      // const user = this.user
      this.$refs['login-form'].validate((valid, err) => {
        // 如果验证失败阻止提交
        if (!valid) {
          return
        }
        this.login()
      })
    },
    login () {
      login(this.user).then(res => {
        this.$message({
          message: '登录成功',
          type: 'success'
        })

        // 将接口返回的用户数据放到本地存储，方便应用
        window.localStorage.setItem('user', JSON.stringify(res.data.data))

        // 登录成功跳转：
        this.$router.push({
          name: 'home'
        })
      }).catch(err => {
        console.log('登录失败', err)
        this.$message.error('登录失败')
      })
    }
  }
}
</script>

<style lang="less">
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("./fisrtbg.jpg") no-repeat;
  background-size: cover;
}

.el-form {
  padding: 50px;
  background-color: #fff;
  min-width: 300px;
}

.login-btn {
  width: 100%;
}
</style>
