<template>
  <section class="charge" v-show="isShow">
    <div class="charge-container">
      <div class="charge-title" v-bind:style="chargeImg"></div>
      <div class="close-btn" v-on:click="close()"></div>
      <div class="charge-item-contianer">
        <charge-item
          v-for="(item, index) in chargeItemList"
          v-bind:key="index"
          v-bind:chargeitemvalue="item"
          v-bind:chargeitemindex="index"
          v-bind:isfirsttimecharge="isFirstTimeCharge"
        >
        </charge-item>
      </div>
    </div>
  </section>
</template>

<script>
import eventBus from '../eventBus.js'

import ChargeItem from './ChargeItem'

export default {
  name: 'charge',
  data () {
    return {
      isShow: false,
      isFirstTimeCharge: false,
      chargeItemList: [
        {
          money: 6,
          coin: 36000
        },
        {
          money: 68,
          coin: 36000
        },
        {
          money: 168,
          coin: 36000
        },
        {
          money: 618,
          coin: 36000
        }
      ]
    }
  },
  computed: {
    chargeImg () {
      let changeImg = this.isFirstTimeCharge ? '首充' : ''
      return {
        'backgroundImage': `url(../../static/image/充值_${changeImg}标题.png)`,
        'backgroundSize': '100% 100%'
      }
    }
  },
  methods: {
    close () {
      this.isShow = false
    }
  },
  components: {
    'charge-item': ChargeItem
  },
  mounted () {
    eventBus.$on('NotifyShowCharge', () => {
      this.isShow = true
    })
  }
}
</script>

<style scoped>
.charge {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 200;
}
.charge-container {
  position: relative;
  width: 615px;
  height: 797px;
  margin: 290px auto;
  background-image: url(../../static/image/充值_弹窗背景.png);
  background-size: 100% 100%;
}
.charge-title {
  position: relative;
  top: -36px;
  width: 285px;
  height: 95px;
  margin: 0 auto;
}
.close-btn {
  position: absolute;
  top: -19px;
  right: -19px;
  width: 75px;
  height: 76px;
  background-image: url(../../static/image/关闭按钮.png);
  background-size: 100% 100%;
}
.charge-item-contianer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 454px;
  height: 584px;
  margin: 0 auto;
}
</style>
