<template>
  <section class="number">
    <div v-for="number in numberList" v-bind:style="itemImg(number)"></div>
  </section>
</template>

<script>
export default {
  name: 'number',
  data () {
    return {}
  },
  props: [
    'number'
  ],
  computed: {
    numberList () {
      return `${this.number}`.split('')
    }
  },
  methods: {
    itemImg (number) {
      return {
        'backgroundImage': `url(../../static/image/商城_金币数字/${number}.png)`,
        'backgroundSize': '100% 100%'
      }
    }
  }
}
</script>

<style scoped>
.number {
  display: flex
}
.number div {
  width: 17px;
  height: 25px;
}
</style>
