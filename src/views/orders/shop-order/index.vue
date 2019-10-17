<template>
  <div class="processing">
    <div class="top">
      <h3>店铺订单</h3>
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
        <span class="nav" @click="getBoth">全部</span>
        <span class="nav" @click="getDai">代付款(54)</span>
        <span class="nav" @click="getFa">待发货(25)</span>
        <span class="nav" @click="getShou">待收货</span>
        <span class="nav" @click="getZuo">已完成</span>
      </div>
      <div class="but">
        <div class="but-row">
          <div class="wert" v-for="(item,index) in souLie" :key="index">
            <div class="ant-col" v-for="(ules,key) in item" :key="key">
              <div>{{ules.name}}：</div>
              <div>
                <component v-bind:is="ules.is" style="width:200px" v-model="modelList[ules.ils]" >
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
            <i-table :columns="columns1" :data="newArr" on-row-click="handleXiang"></i-table>
          </div>
          <div class="btrem">
            <Page :total="pageLength" show-total :current="pageCur" @on-change="changeFen"></Page>
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
          title: "店铺订单编号",
          key: "hort"
        },
        {
          title: "下单时间",
          key: "time"
        },
        {
          title: "店铺",
          key: "stores"
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
          title: "货源类型",
          key: "source"
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
          key: "done",
          render (row, column, index) {
                return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button>`;
          }

        }
      ],
      newArr: [],
      pages: 2,
      souLie: [
        [
          {
            name: "店铺订单编号",
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
            name: "订单编号",
            is: "i-input",
            ils: "floor",
          },
          {
            name: "货源类型",
            is: "i-select",
            ils: "builds",
            options: [
              {
                name: "全部",
                value: 27049
              },
              {
                name: "总仓",
                value: 34162
              },{
                name: "diancan",
                value: 34162
              }
            ]
          },
          {
            name: "楼层",
            is: "i-select",
            ils: "pin",
            options: [
              {
                name: "GXG"
              }
            ]
          },
          {
            name: "店铺",
            is: "i-select",
            ils: "dian",
            options: [
              {
                name: "GXG"
              }
            ]
          }
        ],
        [
          {
            name: "品牌",
            is: "i-select",
            ils: "buildName",
            options: [
              {
                name: "GXG"
              }
            ]

          },
          {
            name: "商品款号",
            is: "i-input",
            ils: "xiaTime"
          },
          {
            name: "商品名称",
            is: "i-input",
            ils: "xiaTime"
          },
          {
            name: "下单时间",
            is: "Date-picker",
            ils: "zhiTime"
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
      pageCur:0,
      pageSize:10,
      pageQian:1
    };
  },
  computed: {
    ...mapState({
      arr: state => state.arr
    })
  },
  methods: {
    // ...mapMutations("order", ["orderData"]),
    // ...mapActions("order", ["getOrder", "getTab"]),
    //全部
    async getAllList() {
      let res = await http.getBuild({
        org_id:61500,
        page:1,
        org_type:5,
        status:'',
        sort:''
      });
      console.log(res.data.list,'--------------');
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.main_number,
          time: item.updated_at_str,
          stores:item.vm_store_name,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          source:item.stock_source_str,
          dan: item.status_str,
          money: item.pay_amount,
          done: "查看"
        };
      });    
      console.log(this.pageCur);
      this.newArr = news;
      this.pageLength = res.data.page.totalNum;
      console.log(this.pageLength);      
    },
    //待发货：
    async getSdList() {
      let res = await http.getList({
        org_id:61500,
        page:1,
        org_type:5,
        status:2,
        sort:''
      });
      console.log(res.data.list)
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.number,
          time: item.updated_at_str,
          stores:item.vm_store_name,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          source:item.stock_source_str,
          dan: item.status_str,
          money: item.pay_amount,
          done: "查看"
        };
      });
      this.pageLength = res.data.page.totalNum;
      this.newArr = news;
    },
    //代付款
    async getWaitList() {
      let res = await http.getList({
        org_id:61500,
        page:1,
        org_type:5,
        status:1,
        sort:''
      });
      console.log(res.data.list,'44444444444')
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.number,
          time: item.updated_at_str,
          stores:item.vm_store_name,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          source:item.stock_source_str,
          dan: item.status_str,
          money: item.pay_amount,
          done: "查看"
        };
      });
      this.pageLength = res.data.page.totalNum;
      this.newArr = news;
    },
    //待收货：
    async getShList() {
      let res = await http.getList({
        org_id:61500,
        page:1,
        org_type:5,
        status:3,
        sort:''
      });
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.number,
          time: item.updated_at_str,
          stores:item.vm_store_name,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          source:item.stock_source_str,
          dan: item.status_str,
          money: item.pay_amount,
          done: "查看"
        };
      });
      this.pageLength = res.data.page.totalNum;
      this.newArr = news;
    },
    //已完成
    async getSuList() {
      let res = await http.getList({
        org_id:61500,
        page:1,
        org_type:5,
        status:4,
        sort:''
      });
      console.log(res.data.list)
      let news = res.data.list.map((item, index) => {
        return {
          hort: item.number,
          time: item.updated_at_str,
          stores:item.vm_store_name,
          people: item.customer_name,
          types: item.order_type,
          shou: item.return_status_str,
          source:item.stock_source_str,
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
        org_id:61500,
        org_type:5,
        status:1
      });
      console.log(res.data);
      this.dingType = res.data.brand;
      this.floors = res.data.floor;
      this.store = res.data.store;
      console.log(this.dingType, "111");
      console.log(this.floors, "222");
      console.log(this.store, "3333");
    },
    getBoth() {
      this.getAllList();
      this.pages = 95;
    },
    getFa() {
      this.getSdList();
    },
    getShou() {
      this.getShList();
    },
    getZuo() {
      this.getSuList();
    },
    getDai() {
      this.getWaitList();
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
        page: this.pageQian,
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
    //分页：
    async changeFen(index){
      console.log(index);
      this.pageCur = index;
      console.log(this.pageCur);
      this.pageQian = this.pageCur;
      this.getAllList();
    },
    //详情：
    show (index) {
        this.$Modal.info({
            title: '用户信息',
          content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
  },

  created() {
    // this.getOrder();
    // this.getTab();
    console.log(this.souLie);
    // console.log(this.$store.state.order.arr.list)
    console.log(this.arr);

    
  },
  async mounted() {
    // await this.getOrder();
    // await this.getTab();

    this.getAllList();
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