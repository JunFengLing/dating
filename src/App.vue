<template>
  <div id="app">
    <entry v-if="showEntry"></entry>
    <da-ting v-else-if="showDaTing"></da-ting>
  </div>
</template>

<script>
import eventBus from './eventBus.js'

import Entry from './components/Entry'
import DaTing from './components/DaTing'

export default {
  name: 'App',
  data () {
    return {
      showEntry: true,
      showDaTing: false
    }
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
    eventBus.$on('NotifyShowDaTing', () => {
      this.showEntry = false
      this.showDaTing = true
    })
  },
  components: {
    'entry': Entry,
    'da-ting': DaTing
  }
}
</script>

<style>

</style>
