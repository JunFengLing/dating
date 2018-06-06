<template>
  <section class="load">
    <div class="logo"></div>
    <div class="progress">{{ progress }}%</div>
    <div class="progress-bar-bg">
      <div class="progress-bar" v-bind:style="progressBarStyle"></div>
    </div>
  </section>
</template>

<script>
import eventBus from '../eventBus.js'

export default {
  name: 'load',
  data () {
    return {
      progress: 0
    }
  },
  computed: {
    progressBarStyle () {
      return {
        'right': `${100 - this.progress}%`
      }
    }
  },
  mounted () {
    setInterval(() => {
      if (this.progress < 100) {
        this.progress++
        if (this.progress === 100) {
          this.isShow = false
          eventBus.$emit('NotifyShowLogin')
        }
      }
    }, 20)
  }
}
</script>

<style scoped>
.load {
  padding-top: 250px;
}
.logo {
  width: 510px;
  height: 237px;
  margin: 0 auto 250px;
  background: url(../assets/image/load/logo.png) no-repeat;
  background-size: 100% 100%;
}
.progress {
  color: #ffa509;
  text-align: center;
  font-size: 34px;
  font-weight: bold;
}
.progress-bar-bg {
  position: relative;
  width: 569px;
  height: 47px;
  margin: 12px auto 0;
  background: url(../assets/image/load/进度条背景.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.progress-bar {
  position: absolute;
  right: 0;
  top: 0;
  width: 569px;
  height: 47px;
  background: url(../assets/image/load/进度条.png) no-repeat;
  background-size: 100% 100%;
}
</style>
