<template>
  <section class="prize-item">
    <div class="item-img"></div>
    <div>
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
  width: 750px;
  height: 130px;
}
.item-img {
  width: 90px;
  height: 90px;
  /* margin: 26px auto 0; */
  background: url(../../static/image/个人中心_充值奖品图片.png);
  background-size: 100% 100%;
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
