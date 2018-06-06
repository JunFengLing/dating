<template>
  <section class="entry">
    <load></load>
    <login></login>
    <register></register>
  </section>
</template>

<script>
import Load from './Load'
import Login from './Login'
import Register from './Register'

export default {
  name: 'entry',
  data () {
    return {
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
