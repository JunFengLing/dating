<template>
  <section class="shop">
    <comp-title></comp-title>
    <message></message>
    <div class="phone-charge-container">
      <div class="sub-title">手机充值</div>
      <div class="wrapper">
        <phone-charge-item
          v-for="(item, index) in phoneChargeList"
          v-bind:key="index"
          v-bind:itemvalue="item"
        >
        </phone-charge-item>
      </div>
    </div>
    <div class="goods-container">
      <div class="sub-title">商品</div>
      <div class="wrapper">
        <goods-item
          v-for="(item, index) in goodsList"
          v-bind:key="index"
          v-bind:itemvalue="item"
          v-bind:itemindex="index"
        >
        </goods-item>
      </div>
    </div>
    <navigation></navigation>
  </section>
</template>

<script>
// import eventBus from '../eventBus.js'

import Title from './Title'
import Message from './Message'
import PhoneChargeItem from './PhoneChargeItem'
import GoodsItem from './GoodsItem'
import Navigation from './Navigation'

export default {
  name: 'game',
  data () {
    return {
      page: 'game',
      phoneChargeList: [
        {
          money: 10,
          coin: 100000
        },
        {
          money: 50,
          coin: 100000
        },
        {
          money: 100,
          coin: 100000
        }
      ],
      goodsList: [
        {
          img: require('../../static/image/商城_商品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          coin: 100000
        },
        {
          img: require('../../static/image/商城_商品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          coin: 100000
        },
        {
          img: require('../../static/image/商城_商品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          coin: 100000
        },
        {
          img: require('../../static/image/商城_商品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          coin: 100000
        },
        {
          img: require('../../static/image/商城_商品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          coin: 100000
        },
        {
          img: require('../../static/image/商城_商品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          coin: 100000
        }
      ]
    }
  },
  computed: {

  },
  methods: {

  },
  components: {
    'comp-title': Title,
    'message': Message,
    'phone-charge-item': PhoneChargeItem,
    'goods-item': GoodsItem,
    'navigation': Navigation
  },
  mounted () {

  }
}
</script>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1377px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  background-image: url(../../static/image/背景.png);
  background-size: 100% 100%;
}
.phone-charge-container {
  margin-top: 150px;
}
.sub-title {
  height: 70px;
  line-height: 70px;
  background-color: rgba(52,20,12,0.6);
  font-size: 32px;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
