<template>
  <section class="load">
    <div class="logo"></div>
    <div class="progress">{{ progress }}%</div>
    <div class="bar-container">
      <div class="bar" v-bind:style="barStyle"></div>
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
    barStyle () {
      return {
        'right': `${100 - this.progress}%`
      }
    }
  },
  methods: {
    setProgress () {
      setInterval(() => {
        if (this.progress < 100) {
          this.progress++
          if (this.progress === 100) {
            eventBus.$emit('NotifyShowPage', {
              page: 'login'
            })
          }
        }
      }, 20)
    }
  },
  mounted () {
    this.setProgress()
  }
}
</script>

<style scoped>
.load {
  height: 1334px;
  padding-top: 350px;
  background-image: url(../../static/image/背景.jpg);
  background-size: 100% 100%;
}
.logo {
  width: 510px;
  height: 237px;
  margin: 0 auto 250px;
  background-image: url(../../static/image/加载_logo.png);
  background-size: 100% 100%;
}
.progress {
  color: #ffa509;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
}
.bar-container {
  position: relative;
  width: 569px;
  height: 47px;
  margin: 12px auto 0;
  background-image: url(../../static/image/加载_进度条背景.png);
  background-size: 100% 100%;
  overflow: hidden;
}
.bar {
  position: absolute;
  top: 0;
  width: 569px;
  height: 47px;
  background-image: url(../../static/image/加载_进度条.png);
  background-size: 100% 100%;
}
</style>
