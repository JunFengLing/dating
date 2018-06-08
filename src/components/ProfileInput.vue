<template>
  <section class="profile-input" v-bind:style="width">
    <div class="label" v-html="value.label"></div>
    <div class="input-wrapper">
      <input class="input" placeholder="" maxlength="" />
      <div class="edit-btn"></div>
    </div>
  </section>
</template>

<script>
// import eventBus from '../eventBus.js'

export default {
  name: 'profile-input',
  data () {
    return {}
  },
  props: [
    'value'
  ],
  computed: {
    width () {
      return {
        'width': `${this.value.width}`
      }
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.profile-input {
  display: flex;
  width: 50%;
  height: 44px;
  align-items: center;
}
.label {
  width: 110px;
}
.input-wrapper {
  display: flex;
  align-items: center;
  width: calc(100% - 110px);
  border-bottom: 1px solid #fff;
}
.input {
  width: calc(100% - 38px);
  border: none;
  outline: none;
  background-color: transparent;
}
.edit-btn {
  width: 38px;
  height: 38px;
  background: url(../../static/image/个人中心_编辑按钮.png);
  background-size: 100% 100%;
}
</style>
