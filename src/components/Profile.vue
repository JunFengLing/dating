<template>
  <section class="profile">
    <comp-title></comp-title>
    <div class="container">
      <avatar></avatar>
      <div class="modify"></div>
    </div>
    <div class="prize-container">
      <div class="sub-title">抽中奖品</div>
      <prize-item
        v-for="(item, index) in newPrizeList[currPage - 1]"
        v-bind:key="index"
        v-bind:itemvalue="item"
        v-bind:itemindex="index"
      >
      </prize-item>
      <div class="page-index-container">
        <div class="arrow" v-on:click="jumpToPrev()">&lt;</div>
        <div
          class="page-index"
          v-bind:style="pageIndexColor(index)"
          v-for="(item, index) in pageIndexList"
          v-bind:key="index"
          v-on:click="jumpToPage(item)"
        >
          {{ item }}
        </div>
        <div class="arrow" v-on:click="jumpToNext()">&gt;</div>
      </div>
    </div>
    <div class="address-container">
      <div class="sub-title">地址管理</div>
      <div class="input-wrapper">
        <div class="top-input-wrapper">
          <profile-input v-bind:value="receipt"></profile-input>
          <profile-input v-bind:value="phone"></profile-input>
        </div>
        <profile-input v-bind:value="address"></profile-input>
      </div>
    </div>
  </section>
</template>

<script>
// import eventBus from '../eventBus.js'

import Title from './Title'
import Avatar from './Avatar'
import PrizeItem from './PrizeItem'
import ProfileInput from './ProfileInput'

export default {
  name: 'profile',
  data () {
    return {
      prizeList: [
        {
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '去兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '兑换中'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '已兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '已兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '已兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '去兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '兑换中'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '已兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '已兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '已兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 35,
          status: '去兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 35,
          status: '兑换中'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 35,
          status: '已兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 35,
          status: '已兑换'
        },
        {
          name: '小猪佩奇毛绒公仔',
          money: 35,
          status: '已兑换'
        }
      ],
      currPage: 1,
      receipt: {
        label: '收件人:',
        width: '50%'
      },
      phone: {
        label: '电&nbsp;&nbsp;&nbsp;&nbsp;话:',
        width: '50%'
      },
      address: {
        label: '地&nbsp;&nbsp;&nbsp;&nbsp;址:',
        width: '100%'
      }
    }
  },
  computed: {
    newPrizeList () {
      return this.getNewList(this.prizeList, 5)
    },
    pageIndexList () {
      let length = this.newPrizeList.length
      let pageIndexList = new Array(length)
      for (let i = 0; i < length; i++) {
        pageIndexList[i] = i + 1
      }
      return pageIndexList
    }
  },
  methods: {
    getNewList (preList, interval) {
      let newList = []
      let tempList = []
      preList.forEach((item, index) => {
        tempList.push(item)
        if (((index + 1) % interval === 0) || index + 1 === preList.length) {
          newList.push(tempList)
          tempList = []
        }
      })
      return newList
    },
    jumpToPage (item) {
      this.currPage = item
      console.log(this.currPage)
    },
    jumpToPrev () {
      if (this.currPage > 1) {
        this.currPage--
        console.log(this.currPage)
      }
    },
    jumpToNext () {
      if (this.currPage < this.newPrizeList.length) {
        this.currPage++
        console.log(this.currPage)
      }
    },
    pageIndexColor (index) {
      let color = index === this.currPage - 1 ? '#ffa509' : '#86635b'
      return {
        'color': color
      }
    }
  },
  components: {
    'comp-title': Title,
    'avatar': Avatar,
    'prize-item': PrizeItem,
    'profile-input': ProfileInput
  },
  mounted () {

  }
}
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1377px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #ffffff;
  background: url(../assets/image/game/背景.png) no-repeat;
  background-size: 100% 100%;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
  padding-left: 10px;
  padding-right: 38px;
  background-color: rgba(27,7,2, 0.6)
}
.modify {
  width: 158px;
  height: 66px;
  background: url(../../static/image/个人中心_修改资料按钮.png);
  background-size: 100% 100%;
}
.sub-title {
  height: 70px;
  line-height: 70px;
  background-color: rgba(52,20,12,0.6);
  font-size: 32px;
}
.address-container {
  height: 286px;
}
.input-wrapper {
  margin: 0 24px;
}
.top-input-wrapper {
  display: flex;
  margin-top: 28px;
  margin-bottom: 40px;
}
.page-index-container {
  display: flex;
  justify-content: center;
  font-size: 32px;
}
.arrow {
  margin: 0 40px;
  color: #86635b;
}
.page-index {
  margin: 0 20px;
}
</style>
