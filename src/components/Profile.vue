<template>
  <section class="profile">
    <comp-title></comp-title>
    <div class="container">
      <avatar></avatar>
      <div class="modify-btn" v-on:click="modify()"></div>
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
        <div class="left-arrow" v-on:click="jumpToPrev()"></div>
        <div
          class="page-index"
          v-bind:style="pageIndexColor(index)"
          v-for="(item, index) in pageIndexList"
          v-bind:key="index"
          v-on:click="jumpToPage(item)"
        >
          {{ item }}
        </div>
        <div class="right-arrow" v-on:click="jumpToNext()"></div>
      </div>
    </div>
    <div class="address-container">
      <div class="sub-title">地址管理</div>
      <div class="input-container">
        <div class="input-wrapper">
          <div class="label">收件人:</div>
          <div class="receipt-input-box">
            <input class="input" placeholder="" maxlength="" v-model="receipt" />
            <div class="edit-btn" v-on:click="editReceipt()"></div>
          </div>
        </div>
        <div class="input-wrapper">
          <div class="label">电&nbsp;&nbsp;&nbsp;&nbsp;话:</div>
          <div class="phone-input-box">
            <input class="input" placeholder="" maxlength="11" v-model="phone" />
            <div class="edit-btn" v-on:click="editPhone()"></div>
          </div>
        </div>
      </div>
      <div class="input-container">
        <div class="input-wrapper">
          <div class="label">地&nbsp;&nbsp;&nbsp;&nbsp;址:</div>
          <div class="address-input-box">
            <input class="input" placeholder="" maxlength="" v-model="address" />
            <div class="edit-btn" v-on:click="editAddress()"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import eventBus from '../eventBus.js'

import Title from './Title'
import Avatar from './Avatar'
import PrizeItem from './PrizeItem'

export default {
  name: 'profile',
  data () {
    return {
      prizeList: [
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '去兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '兑换中'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '已兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '已兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 15,
          status: '已兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '已兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '已兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '已兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '兑换中'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 25,
          status: '去兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 35,
          status: '去兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 35,
          status: '兑换中'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 35,
          status: '已兑换'
        },
        {
          img: require('../../static/image/个人中心_充值奖品图片.png'),
          name: '小猪佩奇毛绒公仔',
          money: 35,
          status: '已兑换'
        }
      ],
      currPage: 1,
      receipt: '',
      phone: '',
      address: ''
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
    },
    modify () {
      alert('modify profile')
    },
    editReceipt () {
      alert(`${this.receipt}`)
    },
    editPhone () {
      alert(`${this.phone}`)
    },
    editAddress () {
      alert(`${this.address}`)
    }
  },
  components: {
    'comp-title': Title,
    'avatar': Avatar,
    'prize-item': PrizeItem
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
  background-image: url(../../static/image/背景.png);
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
.prize-container {
  flex: 1;
}
.modify-btn {
  width: 158px;
  height: 66px;
  background-image: url(../../static/image/个人中心_修改资料按钮.png);
  background-size: 100% 100%;
}
.sub-title {
  height: 70px;
  line-height: 70px;
  background-color: rgba(52,20,12,0.6);
  font-size: 32px;
}
.page-index-container {
  display: flex;
  justify-content: center;
  font-size: 32px;
}
.left-arrow, .right-arrow {
  width: 23px;
  height: 30px;
  background-image: url(../../static/image/个人中心_翻页箭头.png);
  background-size: 100% 100%;
  margin: 0 40px;
}
.right-arrow {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -webkit-transform: rotate(180deg); /* Safari and Chrome */
}
.page-index {
  margin: 0 20px;
}
.address-container {
  height: 286px;
}
.input-container, .input-wrapper, .receipt-input-box, .phone-input-box, .address-input-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-container {
  margin: 28px 24px 0;
}
.label {
  margin-right: 6px;
}
.receipt-input-box, .phone-input-box, .address-input-box {
  border-bottom: 1px solid #8a6e52;
}
.receipt-input-box {
  width: 220px;
}
.phone-input-box {
  width: 240px;
}
.address-input-box {
  width: 600px;
}
.input {
  width: calc(100% - 42px);
  padding: 0 10px;
  border: none;
  outline: none;
  color: #ffa509;
  background-color: transparent;
}
.edit-btn {
  width: 38px;
  height: 38px;
  margin: 2px;
  background-image: url(../../static/image/个人中心_编辑按钮.png);
  background-size: 100% 100%;
}
</style>
