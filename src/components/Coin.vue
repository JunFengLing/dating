<template>
  <section class="coin">
    <div class="coin-icon"></div>
    <div class="coin-amount">
      <div
        class="coin-number"
        v-for="(item, index) in coinNumberList"
        v-bind:key="index"
        v-bind:class="coinNumber(item)">
      </div>
    </div>
    <div class="add-coin" v-on:click="addCoin()"></div>
  </section>
</template>

<script>
export default {
  name: 'coin',
  data () {
    return {
      coinAmount: 98765432
    }
  },
  computed: {
    coinNumberList () {
      return this.coinAmount.toString().split('')
    }
  },
  methods: {
    addCoin () {
      this.coinAmount++
    },
    coinNumber (number) {
      return `coin-number-${number}`
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.coin {
  position: relative;
  width: 260px;
  height: 50px
}
.coin-icon {
  position: absolute;
  left: 0;
  width: 48px;
  height: 50px;
  background: url(../assets/image/金币.png) no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}
.add-coin {
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
  background: url(../assets/image/加金币按钮.png) no-repeat;
  background-size: 100% 100%;
  z-index: 1;
}
.coin-amount {
  position: absolute;
  left: 12px;
  bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 236px;
  height: 40px;
  background: url(../assets/image/金币数背景.png) no-repeat;
  background-size: 100% 100%;
}
.coin-number {
  width: 17px;
  height: 25px;
}
.coin-number-0 {
  background: url(../assets/image/金币数字/0.png);
  background-size: 100% 100%;
}
.coin-number-1 {
  background: url(../assets/image/金币数字/1.png);
  background-size: 100% 100%;
}
.coin-number-2 {
  background: url(../assets/image/金币数字/2.png);
  background-size: 100% 100%;
}
.coin-number-3 {
  background: url(../assets/image/金币数字/3.png);
  background-size: 100% 100%;
}
.coin-number-4 {
  background: url(../assets/image/金币数字/4.png);
  background-size: 100% 100%;
}
.coin-number-5 {
  background: url(../assets/image/金币数字/5.png);
  background-size: 100% 100%;
}
.coin-number-6 {
  background: url(../assets/image/金币数字/6.png);
  background-size: 100% 100%;
}
.coin-number-7 {
  background: url(../assets/image/金币数字/7.png);
  background-size: 100% 100%;
}
.coin-number-8 {
  background: url(../assets/image/金币数字/8.png);
  background-size: 100% 100%;
}
.coin-number-9 {
  background: url(../assets/image/金币数字/9.png);
  background-size: 100% 100%;
}
</style>
