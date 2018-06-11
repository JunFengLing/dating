<template>
  <div class="login">
    <div class="login-container">
      <div class="login-title"></div>
      <div class="close-btn" v-on:click="close()"></div>
      <div class="wrapper">
        <div class="input-container">
          <div class="label">手机号</div>
          <input class="input" placeholder="请输入手机号" maxlength="11" />
        </div>
        <div class="input-container">
          <div class="label">密&nbsp;&nbsp;&nbsp;&nbsp;码</div>
          <input class="input" placeholder="请输入密码（6-16位）" maxlength="16" />
        </div>
        <div class="login-btn" v-on:click="login()"></div>
        <div class="link-container">
          <div v-on:click="register()">注册账号</div>
          <div v-on:click="forget()">忘记密码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../eventBus.js'

export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    close () {

    },
    login () {
      eventBus.$emit('NotifyShowPage', {
        page: 'game'
      })
    },
    register () {
      eventBus.$emit('NotifyShowPage', {
        page: 'register'
      })
    },
    forget () {

    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.login {
  height: 1334px;
  padding-top: 420px;
  background-image: url(../../static/image/背景.jpg);
  background-size: 100% 100%;
}
.login-container {
  position: relative;
  width: 612px;
  height: 632px;
  margin: 0 auto;
  background-image: url(../../static/image/背景.png);
  background-size: 100% 100%;
}
.login-title {
  position: relative;
  top: -36px;
  width: 281px;
  height: 90px;
  margin: 0 auto;
  background-image: url(../../static/image/登录_标题.png);
  background-size: 100% 100%;
}
.close-btn {
  position: absolute;
  top: -19px;
  right: -19px;
  width: 75px;
  height: 76px;
  background-image: url(../../static/image/关闭按钮.png);
  background-size: 100% 100%;
}
.wrapper {
  width: 480px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.label {
  color: #772e06;
  font-size: 36px;
}
.input {
  width: 326px;
  height: 79px;
  padding-left: 24px;
  border: none;
  outline: none;
  background-image: url(../../static/image/输入框.png);
  background-size: 100% 100%;
}
.input, .input::-webkit-input-placeholder {
  color: #9f7d59;
  font-size: 30px;
  text-align: left;
}
.login-btn {
  width: 318px;
  height: 99px;
  margin: 76px auto 0;
  background-image: url(../../static/image/登录_立即登录按钮.png);
  background-size: 100% 100%;
}
.link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 56px;
}
.link-container div {
  padding: 2px;
  border-bottom: 1px solid #772e06;
  font-size: 32px;
  color: #772e06;
}
</style>
