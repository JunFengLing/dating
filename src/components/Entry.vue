<template>
  <section class="entry">
    <load v-if="showLoad"></load>
    <login v-else-if="showLogin"></login>
    <register v-else-if="showRegister"></register>
  </section>
</template>

<script>
import eventBus from '../eventBus.js'

import Load from './Load'
import Login from './Login'
import Register from './Register'

export default {
  name: 'entry',
  data () {
    return {
      showLoad: true,
      showLogin: false,
      showRegister: false
    }
  },
  computed: {

  },
  components: {
    'load': Load,
    'login': Login,
    'register': Register
  },
  mounted () {
    eventBus.$on('NotifyShowLogin', () => {
      this.showLoad = false
      this.showLogin = true
      this.showRegister = false
    })
    eventBus.$on('NotifyShowRegister', () => {
      this.showLoad = false
      this.showLogin = false
      this.showRegister = true
    })
  }
}
</script>

<style scoped>
.entry {
  height: 1334px;
  background: url(../assets/image/login/背景.jpg) no-repeat;
  background-size: 100% 100%;
}
</style>
