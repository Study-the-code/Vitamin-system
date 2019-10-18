<template>
  <div class="card">
    <div class="card_left">
      <ul v-for="(item,index) in list" :key="index">
        <li @click="tabMethod(index)" :class="current===index?'active':''">{{item.title}}</li>
      </ul>
    </div>
    <div class="card_right">
      <div class="title">
        <h3>{{list[current].title}}</h3>
        <div class="add" v-if="current===0" @click="value1 = true">+</div>
        <div class="add" v-else-if="current===4" @click="value1 = true">+</div>
      </div>
      <div class="card_group" v-if="current===0">
        <Table :columns="columns1" :data="cardPicture" size="large"></Table>
      </div>
      <div class="card_group" v-if="current===1">
        <ul >
          <li v-for="item in messageList" :key="item.id">
            <span class="group-item">{{item.name}}</span>:
            <span>必填</span>
          </li>
          <li>
            <span class="group-item">选择默认地区</span>：
            <span>天津市 天津 北辰区</span>
          </li>
        </ul>
        <div class="change" @click="value1 = true">修改注册信息</div>
      </div>
      <div class="card_group" v-if="current===2">
        <div>
          <p>{{message.reminder}}</p>
        </div>
        <p :style="{ color: '#a0a0a0',margin:'15px'}">用户保存推荐码图片时，在二维码图片下方显示的提示语，最多输入22个汉字</p>
        <div>
          <span :style="{    color: '#3ec6b6',cursor: 'pointer'}" @click="value1 = true">修改提示语</span>
        </div>
      </div>
      <div class="card_group" v-if="current===3">
        <div>
          <p :style="{ color: '#a0a0a0',margin:'15px'}">{{msg.termsOfUse}}</p>
        </div>
        <div>
          <p :style="{  color: '#3ec6b6',cursor: 'pointer'}" @click="value1 = true">修改使用条款</p>
        </div>
      </div>
      <div class="card_group" v-if="current===4">
        <Table :columns="columns2" :data="shopList"></Table>
      </div>
    </div>
    <Drawer title="Basic Drawer" :closable="false" v-model="value1">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Drawer>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "card",
  data() {
    return {
       value1: false,
      list: [
        {
          title: "会员卡图案",
          key: "vipbg"
        },
        {
          title: "注册信息",
          key: "msg"
        },
        {
          title: "保证推荐提示语",
          key: "sure"
        },
        {
          title: "使用条款",
          key: "use"
        },
        {
          title: "商场门面",
          key: "shopmap"
        }
      ],
      current: 0,
      columns1: [
        {
          title: "会员等级编码",
          key: "level"
        },
        {
          title: "会员等级名称",
          key: "title"
        },
        {
          title: "卡片图案",
          key: "img",
          render: (e, params) => {
            return e("img", {
              attrs: {
                src: params.row.img,
                style: "width: 100px;border-radius: 2px;"
              }
            });
          }
        }
      ],
      columns2: [
        {
          title: "CRM门店编码",
          key: "crm_store_code"
        },
        {
          title: "门店名称",
          key: "store_name"
        },
        {
          title: "所属城市",
          key: "city_name"
        },
        {
          title: "门店地址",
          key: "address"
        },
        {
          title: "联系方式",
          key: "go",
          render: (e, params) => {
            return e("span", [
              e(
                "span",
                {
                  props: {
                    type: "1"
                  },
                  style: {
                    color: "#3EC6E6"
                  }
                  //   on: {
                  //     click: () => {
                  //       const id = params.row.id;
                  //       this.goDetail(id);
                  //     }
                  //   }
                },
                "管理联系方式"
              )
            ]);
          }
        },
        {
          title: "操作",
          key: "domain",
          render: (e, params) => {
            return e("div", [
              e(
                "span",
                {
                  style: {
                    color: "#3EC6E6"
                  },
                  on: {}
                },
                "修改"
              ),
              "|",
              e(
                "span",
                {
                  style: {
                    color: "#3EC6E6"
                  },
                  on: {}
                },
                "删除"
              )
            ]);
          }
        }
      ]
    };
  },
  methods: {
    tabMethod(index) {
      this.current = index;
      if (this.current === 1) {
        this.getMessage();
      } else if (this.current === 2) {
        this._getMsg();
        console.log(this.message);
      } else if (this.current === 3) {
        this.useMsg();
        console.log(this.msg);
      } else if (this.current === 4) {
        this.getshop();
        this.getCityTree();
        console.log(this.cityList);
      }
    },
    ...mapActions({
      getcardPicture: "vip/getcardPicture",
      getMessage: "vip/getMessage",
      _getMsg: "vip/_getMsg",
      useMsg: "vip/useMsg",
      getshop: "vip/getshop",
      getCityTree: "vip/getCityTree"
    })
  },
  computed: {
    ...mapState({
      cardPicture: state => state.vip.cardPicture.list,
      messageList: state => state.vip.messageList.registerForm,
      message: state => state.vip.message,
      msg: state => state.vip.msg,
      shopList: state => state.vip.shopList,
      cityList: state => state.vip.cityList
    })
  },
  mounted() {
    this.getcardPicture();
  }
};
</script>
<style lang="scss">
.card {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background: #fff;
  margin-top: 24px;
  padding: 24px 24px 48px;
  .card_left {
    width: 20%;
    height: 100%;

    float: left;
    ul li {
      height: 40px;
      line-height: 40px;
      cursor: pointer;
    }
    .active {
      color: #3ec6b6;
      border-right: 2px #3ec6b6 solid;
    }
  }
  .card_right {
    width: 80%;
    height: 100%;

    float: right;
    border-left: 1px #ccc solid;
    .title {
      height: 154px;
      background: #fff;
      h3 {
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        margin: 10px;
        width: 100%;
      }
    }
    .add {
      width: 34px;
      height: 34px;
      background: #3ec6b6;
      border-radius: 50%;
      color: #fff;
      font-size: 30px;
      margin-top: 24px;
      text-align: center;
      line-height: 30px;
      font-weight: 200;
      cursor: pointer;
      margin-left: 15px;
    }
    .card_group {
      padding: 24px;
      background: #fff;
      overflow: hidden;
      ul {
        padding-left: 24px;
        li {
          height: 30px;
          .group-item {
            width: 60px;
            display: inline-block;
            height: 30px;
          }
        }
      }

      .change{
            margin-top: 24px;
             padding-left: 24px;
            color: #3ec6b6;
      }
    }
  }
}
</style>