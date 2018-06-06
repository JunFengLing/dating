<template>
  <div class="register" v-show="isShow">
    <div class="register-container">
      <div class="register-title"></div>
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
        <div class="password-container">
          <div class="label">确&nbsp;&nbsp;&nbsp;&nbsp;认</div>
          <input placeholder="请输入密码（6-16位）" maxlength="16" />
        </div>
        <div class="register-btn" v-on:click="register()"></div>
        <div class="link-container">
          <div class="check-box" v-bind:class="checkBoxClass" v-on:click="check()"></div>
          <div>我已阅读并同意<span v-on:click="">《用户协议》</span></div>
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
      isShow: false,
      isCheck: false
    }
  },
  computed: {
    checkBoxClass () {
      return this.isCheck ? 'checked' : 'unchecked'
    }
  },
  methods: {
    check () {
      this.isCheck = !this.isCheck
    },
    register () {

    },
    close () {

    }
  },
  mounted () {
    eventBus.$on('NotifyShowRegister', () => {
      this.isShow = true
    })
  }
}
</script>

<style scoped>
.register {
  padding-top: 320px;
}
.register-container {
  position: relative;
  width: 612px;
  height: 632px;
  margin: 0 auto;
  background: url(../assets/image/login/背景.png);
  background-size: 100% 100%;
}
.register-title {
  position: relative;
  top: -30px;
  width: 281px;
  height: 90px;
  margin: 0 auto;
  background: url(../assets/image/login/标题_注册.png);
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
  margin-top: 20px;
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
.register-btn {
  width: 318px;
  height: 99px;
  margin: 30px auto 0;
  background: url(../assets/image/login/注册按钮.png);
  background-size: 100% 100%;
}
.link-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.link-container div {
  font-size: 32px;
  color: #772e06;
}
.link-container span {
  border-bottom: 1px solid #772e06;
}
.check-box {
  width: 31px;
  height: 31px;
}
.unchecked {
  background: url(../assets/image/login/选框按钮_1.png);
  background-size: 100% 100%;
}
.checked {
  background: url(../assets/image/login/选框按钮_2.png);
  background-size: 100% 100%;
}
</style>
