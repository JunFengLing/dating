<template>
  <div id="app">
    <section class="entry" v-if="isEntryShow">
      <comp-load v-show="isLoadShow"></comp-load>
      <comp-login v-show="isLoginShow"></comp-login>
      <comp-register v-show="isRegisterShow"></comp-register>
    </section>
    <section class="home" v-else-if="isHomeShow">
      <comp-title></comp-title>
      <comp-game v-show="isGameShow"></comp-game>
      <comp-shop v-show="isShopShow"></comp-shop>
      <comp-profile v-show="isProfileShow"></comp-profile>
    </section>
    <pop-charge></pop-charge>
    <pop-task></pop-task>
  </div>
</template>

<script>
import eventBus from './eventBus.js'

import Load from './components/Load'
import Login from './components/Login'
import Register from './components/Register'
import Title from './components/Title'
import Game from './components/Game'
import Shop from './components/Shop'
import Profile from './components/Profile'
import Charge from './components/Charge'
import Task from './components/Task'

export default {
  name: 'App',
  data () {
    return {
      page: 'load'
    }
  },
  computed: {
    isLoadShow () {
      return this.page === 'load'
    },
    isLoginShow () {
      return this.page === 'login'
    },
    isRegisterShow () {
      return this.page === 'register'
    },
    isGameShow () {
      return this.page === 'game'
    },
    isShopShow () {
      return this.page === 'shop'
    },
    isProfileShow () {
      return this.page === 'profile'
    },
    isEntryShow () {
      return this.isLoadShow || this.isLoginShow || this.isRegisterShow
    },
    isHomeShow () {
      return this.isGameShow || this.isShopShow || this.isProfileShow
    }
  },
  methods: {
    test () {
      return fetch('https://www.baidu.com')
        .then(res => res.text())
        .then(body => {
          console.log(body)
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  created () {
    this.test()
  },
  mounted () {
    eventBus.$on('NotifyShowPage', params => {
      this.page = params.page
    })
  },
  components: {
    'comp-load': Load,
    'comp-login': Login,
    'comp-register': Register,
    'comp-title': Title,
    'comp-game': Game,
    'comp-shop': Shop,
    'comp-profile': Profile,
    'pop-charge': Charge,
    'pop-task': Task
  }
}
</script>

<style>
#app {
  position: relative;
}
.entry {
  height: 1334px;
  background: url(./assets/image/login/背景.jpg) no-repeat;
  background-size: 100% 100%;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1377px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  background: url(./assets/image/game/背景.png) no-repeat;
  background-size: 100% 100%;
}
</style>
