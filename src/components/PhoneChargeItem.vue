<template>
  <section class="phone-charge-item" v-on:click="test()">
    <div class="item-img" v-bind:style="itemImg"></div>
    <span class="coin">{{ itemvalue.coin }}</span>
  </section>
</template>

<script>
export default {
  name: 'phone-charge-item',
  data () {
    return {}
  },
  props: [
    'itemvalue'
  ],
  computed: {
    itemImg () {
      return {
        'backgroundImage': `url(../../static/image/商城_${this.itemvalue.money}元.png)`,
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
.phone-charge-item {
  width: 250px;
  height: 236px;
}
.item-img {
  width: 156px;
  height: 148px;
  margin: 26px auto 10px;
}
.coin {
  height: 31px;
  padding-left: 36px;
  background: url(../../static/image/商城_金币图标.png) no-repeat left;
  background-size: 31px 31px;
  color: #ffa509;
}
</style>
