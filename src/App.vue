<template>
  <div id="app">
    <div id="title"></div>
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
  width: 100%;
  height: 1377px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  background: url(./assets/image/背景.png) no-repeat;
  background-size: 100% 100%;
}
#title {
  width: 368px;
  height: 91px;
  margin: 0 auto;
  background: url(./assets/image/标题.png) no-repeat;
  background-size: 100% 100%;
}
</style>
