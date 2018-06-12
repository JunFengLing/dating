<template>
  <section class="charge-item" v-bind:style="chargeItemStyle" v-on:click="charge()">
    <div class="off-tag" v-show="isfirsttimecharge"></div>
    <div class="coin-label" v-bind:style="coinLableImg">
      <div class="coin-item-wrapper">
        <div class="coin-item-container" v-show="isfirsttimecharge">
          <div class="coin-item"></div>
          <div class="coin-item"
            v-for="(item, index) in coinItemList"
            v-bind:key="index"
            v-bind:style="coinItemImg(item)"
          >
          </div>
        </div>
        <div class="coin-item-container">
          <div class="coin-item coin-item-add"></div>
          <div class="coin-item"
            v-for="(item, index) in coinItemList"
            v-bind:key="index"
            v-bind:style="coinItemImg(item)"
          >
          </div>
        </div>
      </div>
    </div>
    <div class="charge-btn">
      <div class="money-item money-item-rmb"></div>
      <div class="money-item"
        v-for="(item, index) in moneyItemList"
        v-bind:key="index"
        v-bind:style="moneyItemImg(item)"
      >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'charge-item',
  data () {
    return {

    }
  },
  props: [
    'chargeitemvalue',
    'chargeitemindex',
    'isfirsttimecharge'
  ],
  computed: {
    chargeItemStyle () {
      let alignSelf = this.chargeitemindex < 2 ? 'flex-start' : 'flex-end'
      return {
        'alignSelf': alignSelf
      }
    },
    coinLableImg () {
      return {
        'backgroundImage': `url(../../static/image/充值_金币_${this.chargeitemindex + 1}.png)`,
        'backgroundSize': '100% 100%'
      }
    },
    coinItemList () {
      return `${this.chargeitemvalue.coin}`.split('')
    },
    moneyItemList () {
      return `${this.chargeitemvalue.money}`.split('')
    }
  },
  methods: {
    charge () {
      alert('charge')
    },
    coinItemImg (item) {
      return {
        'backgroundImage': `url(../../static/image/充值_金币数字/${item}.png)`,
        'backgroundSize': '100% 100%'
      }
    },
    moneyItemImg (item) {
      return {
        'backgroundImage': `url(../../static/image/充值_按钮/${item}.png)`,
        'backgroundSize': '100% 100%'
      }
    }
  }
}
</script>

<style scoped>
.charge-item {
  position: relative;
  width: 210px;
  height: 276px;
  background-image: url(../../static/image/充值_金币背景.png);
  background-size: 100% 100%;
}
.off-tag {
  position: absolute;
  right: -2px;
  top: 0;
  width: 141px;
  height: 112px;
  background-image: url(../../static/image/充值_off标签.png);
  background-size: 100% 100%;
  z-index: 210;
}
.coin-label {
  position: relative;
  width: 169px;
  height: 156px;
  margin: 17px auto;
}
.charge-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 67px;
  margin: 0 auto;
  background-image: url(../../static/image/充值_按钮/按钮背景.png);
  background-size: 100% 100%;
}
.coin-item-wrapper {
  position: absolute;
  bottom: 0;
}
.coin-item-container {
  display: flex;
  justify-content: center;
}
.coin-item {
  width: 27px;
  height: 36px;
}
.coin-item-add {
  background-image: url(../../static/image/充值_金币数字/+.png);
  background-size: 100% 100%;
}
.money-item {
  width: 26px;
  height: 34px;
}
.money-item-rmb {
  margin-right: 4px;
  background-image: url(../../static/image/充值_按钮/￥.png);
  background-size: 100% 100%;
}
</style>
