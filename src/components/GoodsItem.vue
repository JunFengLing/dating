<template>
  <section class="goods-item" v-on:click="test()">
    <div class="item-img"></div>
    <div class="name">{{ itemvalue.name }}</div>
    <div class="money">（参考价：{{ itemvalue.money }}元）</div>
    <span class="coin">{{ itemvalue.coin }}</span>
  </section>
</template>

<script>
export default {
  name: 'goods-item',
  data () {
    return {}
  },
  props: [
    'itemvalue',
    'itemindex'
  ],
  computed: {

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
.goods-item {
  width: 250px;
  height: 274px;
}
.item-img {
  width: 160px;
  height: 160px;
  margin: 26px auto 0;
  background: url(../../static/image/商城_商品图片.png);
  background-size: 100% 100%;
}
.name, .money, .coin {
  height: 32px;
  line-height: 32px;
  font-size: 24px;
}
.money {
  text-decoration:line-through;
  color: #7a554e;
}
.coin {
  padding-left: 36px;
  background: url(../../static/image/商城_金币图标.png) no-repeat left center;
  background-size: 31px 31px;
  color: #ffa509;
}
</style>
