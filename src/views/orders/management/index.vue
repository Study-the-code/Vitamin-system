<template>
  <div class="processing">
    <div class="top">
      <h3>订单管理</h3>
      <div class="bom">
        <div class="dem">
          <Icon type="arrow-down-c" size="30px"></Icon>批量导出
        </div>
        <div class="dem">
          <Icon type="android-checkbox"></Icon>查看已生成报表
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="ding">
        <span class="nav" @click="getAll">全部</span>
        <span class="nav" @click="getWest">代付款(46)</span>
        <span class="nav" @click="getSend">待发货(16)</span>
        <span class="nav" @click="getShou">待收货</span>
        <span class="nav" @click="getSus">已完成</span>
      </div>
      <div class="but">
        <div class="but-row">
          <div class="wert" v-for="(item,index) in souLie" :key="index">
            <div class="ant-col" v-for="(ules,key) in item" :key="key">
              <div>{{ules.name}}：</div>
              <div>
                <component v-bind:is="ules.is" style="width:200px" v-model="modelList[ules.ils]">
                  <!-- <i-option v-for="(i,k) in dingType" :value="i.name" :key="k">{{ i.name }}</i-option> -->
                  <i-option v-for="(i,k) in ules.options" :value="i.name" :key="k">{{ i.name }}</i-option>
                </component>
              </div>
            </div>
          </div>
        </div>
        <div class="taber">
          <div class="tep">
            <i-button
              style="background:#3ec6b6;color:#fff;position:absolute;right:140px"
              @click="this.search"
            >查询</i-button>
            <i-button style="position:absolute;right:50px">重置</i-button>
          </div>
          <div class="tabone">
            <i-table :columns="columns1" :data="newArr"></i-table>
          </div>
          <div class="btrem">
            <Page :total="pageLength" show-total :current="pageCurrent" @on-change="changepage"></Page>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "vuex";
import http from "@/api/index";
export default {
  props: {},
  components: {},
  data() {
    return {
      columns1: [
        {
          title: "订单号",
          key: "hort"
        },
        {
          title: "下单时间",
          key: "time"
        },
        {
          title: "顾客",
          key: "people"
        },
        {
          title: "订单类型",
          key: "types"
        },
        {
          title: "售后",
          key: "shou"
        },
        {
          title: "订单状态",
          key: "dan"
        },
        {
          title: "实付金额",
          key: "money"
        },
        {
          title: "操作",
          key: "done"
        }
      ],
      newArr: [],
      pages: 2,
      souLie: [
        [
          {
            name: "订单号",
            is: "i-input",
            ils: "hort"
          },
          {
            name: "姓名",
            is: "i-input",
            ils: "name"
          },
          {
            name: "手机号",
            is: "i-input",
            ils: "phone"
          },
          {
            name: "订单类型",
            is: "i-select",
            ils: "type",
            options: [
              {
                name: "全部"
              },
              {
                name: "线上pos"
              },
              {
                name: "电商订单"
              },
              {
                name: "电子卡劵"
              }
            ]
          }
        ],
        [
          {
            name: "楼层",
            is: "i-select",
            ils: "floor",
            options: [
              {
                id: 2,
                name: "F1"
              },
              {
                id: 3,
                name: "F2"
              },
              {
                id: 4,
                name: "F3"
              },
              {
                id: 5,
                name: "F4"
              },
              {
                id: 6,
                name: "F5"
              },
              {
                id: 7,
                name: "F6"
              }
            ]
          },
          {
            name: "店铺",
            is: "i-select",
            ils: "builds",
            options: [
              {
                name: "III VIVINIKO",
                value: 27049
              },
              {
                name: "SNIDEL",
                value: 34162
              }
            ]
          },
          {
            name: "品牌",
            is: "i-select",
            ils: "pin",
            options: [
              {
                name: "GXG"
              }
            ]
          },
          {
            name: "商品款号",
            is: "i-input",
            ils: "kuan"
          }
        ],
        [
          {
            name: "商品名称",
            is: "i-input",
            ils: "buildName"
          },
          {
            name: "下单时间",
            is: "Date-picker",
            ils: "xiaTime"
          },
          {
            name: "支付时间",
            is: "Date-picker",
            ils: "zhiTime"
          }
        ]
      ],
      modelList: {
        hort: "",
        name: "",
        phone: "",
        type: "",
        floor: "",
        builds: "",
        pin: "",
        kuan: "",
        buildName: "",
        xiaTime: "",
        zhiTime: ""
      },
      val: "",
      dingType: "",
      floors: "",
      store: "",
      ops:'',
      pageLength:0,
      pageCurrent:0,
      pageSize:10,
      pageDang:1
    };
  },
  computed: {
    ...mapState({
      arr: state => state.arr
    })
  },
  methods: {
    ...mapMutations("order", ["orderData"]),
    ...mapActions("order", ["getOrder", "getTab"]),
    //全部
    async getMetho() {
      let res = await http.getList({
        org_id: 61500,
        page: this.pageDang,
        org_type: 5,
        status: "",
        sort: ""
      });
      console.log(res);
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.number,
          time: item.created_at_str,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          dan: item.status_str,
          money: item.pay_amount,
          done: "查看"
        };
      });
     
      console.log(this.pageCurrent);
      this.newArr = news;
      this.pageLength = res.data.page.totalNum;
      console.log(this.pageLength);

       
    },
    //待发货：
    async getSd() {
      let res = await http.getList({
        org_id: 61500,
        page: 1,
        org_type: 5,
        status: 2,
        sort: ""
      });
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.number,
          time: item.created_at_str,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          dan: item.status_str,
          money: item.pay_amount,
          done: "查看"
        };
      });
      this.pageLength = res.data.page.totalNum;
      this.newArr = news;
    },
    //代付款
    async getWait() {
      let res = await http.getList({
        org_id: 61500,
        page: 1,
        org_type: 5,
        status: 1,
        sort: ""
      });
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.number,
          time: item.created_at_str,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          dan: item.status_str,
          money: item.pay_amount,
          done: "查看"
        };
      });
      this.pageLength = res.data.page.totalNum;
      this.newArr = news;
    },
    //待收货：
    async getSh() {
      let res = await http.getList({
        org_id: 61500,
        page: this.pageDang,
        org_type: 5,
        status: 3,
        sort: ""
      });
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.number,
          time: item.created_at_str,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          dan: item.status_str,
          money: item.pay_amount,
          done: "查看"
        };
      });
      this.pageLength = res.data.page.totalNum;
      this.newArr = news;
    },
    //已完成
    async getSu() {
      let res = await http.getList({
        org_id: 61500,
        page: this.pageDang,
        org_type: 5,
        status: 4,
        sort: ""
      });
      console.log(res.data.list)
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.number,
          time: item.created_at_str,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          dan: item.status_str,
          money: item.pay_amount,
          done: "查看"
        };
        console.log(news)
      });
      this.pageLength = res.data.page.totalNum;
      this.newArr = news;
    },
    //option数据：
    async getOpt() {
      let res = await http.getTabList({
        org_id: 61500,
        org_type: 5,
        status: ""
      });
      console.log(res.data);
      this.dingType = res.data.brand;
      this.floors = res.data.floor;
      this.store = res.data.store;
      console.log(this.dingType, "111");
      console.log(this.floors, "222");
      console.log(this.store, "3333");
    },
    getAll() {
      this.getMetho();
      this.pages = 95;
    },
    getSend() {
      this.getSd();
    },
    getShou() {
      this.getSh();
    },
    getSus() {
      this.getSu();
    },
    getWest() {
      this.getWait();
    },
    search() {
      //输入框的值：
      let arr = [
        this.modelList.hort,
        this.modelList.name,
        this.modelList.phone,
        this.modelList.type,
        this.modelList.floor,
        this.modelList.builds,
        this.modelList.pin,
        this.modelList.kuan,
        this.modelList.buildName,
        this.modelList.xiaTime,
        this.modelList.zhiTime
      ];
      console.log(arr);
      //接口中的参数：
      let obj = {
        org_id: 61500,
        page: this.pageDang,
        org_type: 5,
        status: "",
        sort: "",
        number: this.modelList.hort,
        delivery_name: this.modelList.name,
        delivery_tel: this.modelList.phone,
        order_type: this.modelList.type,
        floor_id: "",
        vm_store_id: "",
        brand_id: "",
        prod_code: this.modelList.kuan,
        prod_name: this.modelList.buildName,
        submit_time: this.modelList.buildName,
        order_pay_time: this.modelList.xiaTime
      };
      console.log(this.ops);
    },
    async changepage(index){
      console.log(index);
      // var _start = ( index - 1 ) * this.pageSize;
      // var _end = index * this.pageSize;
      // this.historyData = this.newArr.slice(_start,_end);
      this.pageCurrent=index;
      console.log(this.pageCurrent);
      this.pageDang = this.pageCurrent;
      this.getMetho();
    }

    
  },

  created() {
    // this.getOrder();
    // this.getTab();
    console.log(this.souLie);
    // console.log(this.$store.state.order.arr.list)
    console.log(this.arr);

    
  },
  async mounted() {
    await this.getOrder();
    await this.getTab();

    this.getMetho();
    this.getOpt();
    //遍历动态组件
    let das = [];
    this.souLie.forEach((item, index) => {
      item.forEach((val, k) => {
        console.log(val.options);
        das.push(val.options);
      });
    });
    console.log(das);
  }
};
</script>
<style scoped lang="scss">
.processing {
  width: 100%;
  padding: 24px 0;
  overflow: hidden;
  .top {
    padding: 24px;
    background: #fff;
    overflow: hidden;
    border-bottom: 1px solid #e8e8e8;
    h3 {
      width: 100%;
      height: 24.21px;
    }
    .bom {
      width: 100%;
      height: 20.87px;
      display: flex;
      .dem {
        display: flex;
        .ivu-icon ivu-icon-arrow-down-c {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    margin-top: 24px;
    .ding {
      width: 100%;
      border-bottom: 1px solid #e8e8e8;
      .nav {
        color: #3ec6b6;
        border-bottom: 2px solid #3ec6b6;
        display: inline-block;
        box-sizing: content-box;
        padding: 5px 5px 10px;
        margin: 0 24px;
        border-bottom: 2px solid transparent;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #595959;
        text-align: center;
        line-height: 22px;
        cursor: pointer;
      }
    }
    .but {
      width: 100%;
      padding: 24px;
      background: #fff;
      overflow: hidden;
      border-bottom: 1px solid #e8e8e8;
      .but-row {
        width: 100%;
        position: relative;
        height: auto;
        margin-right: 0;
        margin-left: 0;
        zoom: 1;
        display: flex;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: flex;
        flex-shrink: 4;
        flex-wrap: wrap;
        .wert {
          width: 100%;
          display: flex;
          flex-shrink: 4;
          flex-wrap: wrap;
          margin-left: 100px;
          .ant-col {
            display: flex;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            width: 25%;
            line-height: 30px;
            margin-top: 20px;
          }
        }
      }
      .taber {
        width: 100%;
        margin-top: 30px;
        .tep {
          width: 100%;
          height: 35px;
          display: flex;
        }
        .tabone {
          width: 100%;
          margin-top: 30px;
        }
        .btrem {
          width: 100%;
          height: 50px;
          margin-top: 20px;
          .ivu-page {
            position: absolute;
            right: 50px;
          }
        }
      }
    }
  }
}
</style>