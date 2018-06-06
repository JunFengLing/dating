<template>
  <div id="app">
    <entry></entry>
    <da-ting></da-ting>
  </div>
</template>

<script>
import Entry from './components/Entry'
import DaTing from './components/DaTing'

export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    test () {
      return fetch('https://www.baidu.com')
        .then(res => res.text())
        .then(body => {
          console.log(body)
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  created () {
    this.test()
  },
  mounted () {
  },
  components: {
    'entry': Entry,
    'da-ting': DaTing
  }
}
</script>

<style>

</style>
