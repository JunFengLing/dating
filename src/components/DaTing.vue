<template>
  <section class="da-ting">
    <top-container></top-container>
    <middle-container></middle-container>
    <bottom-container></bottom-container>
    <navigation></navigation>
  </section>
</template>

<script>
import TopContainer from './TopContainer'
import MiddleContainer from './MiddleContainer'
import BottomContainer from './BottomContainer'
import Navigation from './Navigation'

export default {
  name: 'da-ting',
  data () {
    return {

    }
  },
  components: {
    'top-container': TopContainer,
    'middle-container': MiddleContainer,
    'bottom-container': BottomContainer,
    'navigation': Navigation
  }
}
</script>

<style scoped>
.da-ting {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1377px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  background: url(../assets/image/game/背景.png) no-repeat;
  background-size: 100% 100%;
}
</style>
