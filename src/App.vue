<template>
  <div id="app">
    <comp-load v-show="page === 'load'"></comp-load>
    <comp-login v-show="page === 'login'"></comp-login>
    <comp-register v-show="page === 'register'"></comp-register>
    <comp-game v-show="page === 'game'"></comp-game>
    <comp-shop v-show="page === 'shop'"></comp-shop>
    <comp-profile v-show="page === 'profile'"></comp-profile>
    <pop-charge></pop-charge>
    <pop-task></pop-task>
  </div>
</template>

<script>
import eventBus from './eventBus.js'
import httpUtil from './utils/httpUtil.js'

import Load from './components/Load'
import Login from './components/Login'
import Register from './components/Register'
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

  },
  methods: {
    test () {
      httpUtil.get('https://www.baidu.com').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
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
  color: #ffffff;
}
</style>
