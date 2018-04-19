<template>
  <div id="app">
    <top-container></top-container>
    <middle-container></middle-container>
    <bottom-container></bottom-container>
    <navigation></navigation>
  </div>
</template>

<script>
import TopContainer from './components/TopContainer'
import MiddleContainer from './components/MiddleContainer'
import BottomContainer from './components/BottomContainer'
import Navigation from './components/Navigation'

export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    test () {
      this.$axios({
        url: 'test',
        method: 'get'
      }).then(res => {
        console.log(res.status)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.test()
  },
  mounted () {
  },
  components: {
    'top-container': TopContainer,
    'middle-container': MiddleContainer,
    'bottom-container': BottomContainer,
    'navigation': Navigation
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1377px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  background: url(./assets/image/背景.png) no-repeat;
  background-size: 100% 100%;
}
</style>
