<template>
  <div class="register">
    <div class="register-container">
      <div class="register-title"></div>
      <div class="close-btn" v-on:click="close()"></div>
      <div class="wrapper">
        <div class="input-container">
          <div class="label">手机号</div>
          <input
            class="input"
            v-model="phoneNumber"
            placeholder="请输入手机号"
            maxlength="11"
          />
        </div>
        <div class="input-container">
          <div class="label">密&nbsp;&nbsp;&nbsp;&nbsp;码</div>
          <input
            class="input"
            v-model="password"
            type="password"
            placeholder="请输入密码（6-16位）"
            maxlength="16"
          />
        </div>
        <div class="input-container">
          <div class="label">确&nbsp;&nbsp;&nbsp;&nbsp;认</div>
          <input
            class="input"
            v-model="rePassword"
            type="password"
            placeholder="请输入密码（6-16位）"
            maxlength="16"
          />
        </div>
        <div class="register-btn" v-on:click="register()"></div>
        <div class="agreement-container">
          <div class="check-box" v-bind:class="checkBoxImg" v-on:click="check()"></div>
          <div>我已阅读并同意<span v-on:click="agreement()">《用户协议》</span></div>
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
      phoneNumber: '',
      password: '',
      rePassword: '',
      isCheck: false
    }
  },
  computed: {
    checkBoxImg () {
      let checkBoxImg = this.isCheck ? '2' : '1'
      return {
        'backgroundImage': `url(../../static/image/选框按钮_${checkBoxImg}.png)`,
        'backgroundSize': '100% 100%'
      }
    },
    isPasswordValid () {
      const reg = /^.{6,}$/
      return reg.test(this.password)
    }
  },
  methods: {
    check () {
      this.isCheck = !this.isCheck
    },
    register () {

    },
    close () {
      eventBus.$emit('NotifyShowPage', {
        page: 'login'
      })
    },
    agreement () {

    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.register {
  height: 1334px;
  padding-top: 420px;
  background-image: url(../../static/image/背景.jpg);
  background-size: 100% 100%;
}
.register-container {
  position: relative;
  width: 612px;
  height: 632px;
  margin: 0 auto;
  background-image: url(../../static/image/登录_注册_背景.png);
  background-size: 100% 100%;
}
.register-title {
  position: relative;
  top: -36px;
  width: 281px;
  height: 90px;
  margin: 0 auto;
  background-image: url(../../static/image/注册_标题.png);
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
.register-btn {
  width: 318px;
  height: 99px;
  margin: 30px auto 0;
  background-image: url(../../static/image/注册_注册按钮.png);
  background-size: 100% 100%;
}
.agreement-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.agreement-container div {
  padding: 2px;
  font-size: 32px;
  color: #772e06;
}
.agreement-container span {
  border-bottom: 1px solid #772e06;
}
.check-box {
  width: 31px;
  height: 31px;
}
</style>
