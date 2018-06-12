<template>
  <section class="prize-item">
    <div class="prize-item-img">
      <img v-bind:src="itemvalue.img" width="100%" height="100%"/>
    </div>
    <div class="prize-item-text">
      <div class="name">{{ itemvalue.name }}</div>
      <div class="money">（参考价：{{ itemvalue.money }}元）</div>
    </div>
    <div class="exchange-btn" v-bind:style="exchangeBtnImg"></div>
  </section>
</template>

<script>
export default {
  name: 'prize-item',
  data () {
    return {}
  },
  props: [
    'itemvalue',
    'itemindex'
  ],
  computed: {
    exchangeBtnImg () {
      return {
        'backgroundImage': `url(../../static/image/个人中心_${this.itemvalue.status}按钮.png)`,
        'backgroundSize': '100% 100%'
      }
    }
  },
  methods: {
    test () {

    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.prize-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  margin-left: 46px;
  margin-right: 36px;
}
.prize-item-img {
  width: 90px;
  height: 90px;
}
.prize-item-text {
  flex: 1;
  padding: 40px;
  text-align: left;
}
.name, .money {
  height: 34px;
  line-height: 34px;
  font-size: 22px;
}
.money {
  text-decoration:line-through;
  color: #7a554e;
}
.exchange-btn {
  width: 170px;
  height: 68px;
}
</style>
