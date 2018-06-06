<template>
  <div class="login">
    <div class="login-container">
      <div class="login-title"></div>
      <div class="close-btn" v-on:click="close()"></div>
      <div class="wrapper">
        <div class="phone-container">
          <div class="label">手机号</div>
          <input placeholder="请输入手机号" maxlength="11" />
        </div>
        <div class="password-container">
          <div class="label">密&nbsp;&nbsp;&nbsp;&nbsp;码</div>
          <input placeholder="请输入密码（6-16位）" maxlength="16" />
        </div>
        <div class="login-btn" v-on:click="login()"></div>
        <div class="link-container">
          <div v-on:click="register()">注册账号</div>
          <div v-on:click="forgetPassword()">忘记密码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '../eventBus.js'

export default {
  name: 'register',
  data () {
    return {

    }
  },
  methods: {
    close () {

    },
    login () {
      eventBus.$emit('NotifyShowDaTing')
    },
    register () {
      eventBus.$emit('NotifyShowRegister')
    },
    forgetPassword () {

    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.login {
  padding-top: 320px;
}
.login-container {
  position: relative;
  width: 612px;
  height: 632px;
  margin: 0 auto;
  background: url(../assets/image/login/背景.png);
  background-size: 100% 100%;
}
.login-title {
  position: relative;
  top: -30px;
  width: 281px;
  height: 90px;
  margin: 0 auto;
  background: url(../assets/image/login/标题_登录.png);
  background-size: 100% 100%;
}
.close-btn {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 75px;
  height: 76px;
  background: url(../assets/image/关闭按钮.png);
  background-size: 100% 100%;
}
.wrapper {
  width: 478px;
  height: 444px;
  margin: 0 auto;
}
.phone-container, .password-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}
.label {
  color: #772e06;
  font-size: 36px;
}
input {
  width: 326px;
  height: 79px;
  padding-left: 26px;
  border: none;
  background: url(../assets/image/login/输入框.png);
  background-size: 100% 100%;
}
input, input::-webkit-input-placeholder {
  color: #9f7d59;
  font-size: 30px;
  text-align: left;
}
input::-webkit-input-placeholder {
  outline: none;
}
.login-btn {
  width: 318px;
  height: 99px;
  margin: 80px auto 0;
  background: url(../assets/image/login/立即登录按钮.png);
  background-size: 100% 100%;
}
.link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
}
.link-container div {
  padding: 2px;
  border-bottom: 1px solid #772e06;
  font-size: 32px;
  color: #772e06;
}
</style>
