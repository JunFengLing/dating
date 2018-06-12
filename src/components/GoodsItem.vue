<template>
  <section class="goods-item" v-on:click="test()">
    <div class="goods-item-wrapper">
      <div class="goods-item-img">
        <img v-bind:src="itemvalue.img" width="100%" height="100%"/>
      </div>
      <div class="name">{{ itemvalue.name }}</div>
      <div class="money">（参考价：{{ itemvalue.money }}元）</div>
      <span class="coin">{{ itemvalue.coin }}</span>
    </div>
    <div v-if="itemindex !== 2 && itemindex !== 5" class="goods-item-border"></div>
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
  display: flex;
  width: 250px;
  height: 274px;
}
.goods-item-wrapper {
  flex: 1;
}
.goods-item-border {
  width: 2px;
  height: 215px;
  margin: auto 0;
  background-image: url(../../static/image/商城_商品分隔线.png);
  background-size: 100% 100%;
}
.goods-item-img {
  width: 160px;
  height: 160px;
  margin: 26px auto 0;
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
