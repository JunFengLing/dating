<template>
  <section class="avatar">
    <div class="left-container" v-on:click="changAvatar()">
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
    changAvatar () {
      alert('chang avatar')
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
  height: 101px;
  margin: 0 10px;
}
.left-container {
  position: relative;
  width: 100px;
  height: 100%;
}
.left-container {
  flex: 1;
}
.avatar-bg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100px;
  height: 100%;
  background: url(../assets/image/game/头像背景.png) no-repeat;
  background-size: 100% 100%;
  z-index: 1;
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
