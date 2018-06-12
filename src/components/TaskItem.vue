<template>
  <section class="task-item">
    <div class="task-description">{{ taskitemvalue.description }}</div>
    <div class="task-btn" v-bind:style="taskBtnImg" v-on:click="doTask()"></div>
  </section>
</template>

<script>
export default {
  name: 'task-item',
  data () {
    return {

    }
  },
  props: [
    'taskitemvalue'
  ],
  computed: {
    taskBtnImg () {
      let taskBtnImg = this.taskitemvalue.isComplete ? '已兑换' : '去完成'
      return {
        'backgroundImage': `url(../../static/image/任务_${taskBtnImg}按钮.png)`,
        'backgroundSize': '100% 100%'
      }
    }
  },
  methods: {
    doTask () {

    }
  }
}
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 592px;
  height: 99px;
  margin: 0 auto;
  background-image: url(../../static/image/任务_任务栏背景.png);
  background-size: 100% 100%;
}
.task-description {
  width: 330px;
  margin-left: 100px;
  text-align: left;
}
.task-btn {
  width: 136px;
  height: 54px;
  margin-right: 10px
}
</style>
