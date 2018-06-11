<template>
  <section class="avatar">
    <div class="left-container" v-on:click="change()">
      <div class="avatar-bg"></div>
      <div class="avatar-img"></div>
    </div>
    <div class="right-container">
      <div class="name">{{ name }}</div>
      <coin></coin>
    </div>
  </section>
</template>

<script>
import Coin from './Coin'

export default {
  name: 'avatar',
  data () {
    return {
      name: '这里是玩家名称'
    }
  },
  computed: {

  },
  methods: {
    change () {
      alert('change avatar')
    }
  },
  mounted () {

  },
  components: {
    'coin': Coin
  }
}
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: space-between;
  width: 360px;
  height: 101px;
}
.left-container {
  position: relative;
  width: 100px;
  height: 100%;
}
.avatar-bg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100px;
  height: 100%;
  background-image: url(../../static/image/头像背景.png);
  background-size: 100% 100%;
  z-index: 110;
}
.avatar-img {

}
.name {
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
  text-align: left;
}
</style>
