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
        <span class="nav">全部</span>
        <span class="nav">代付款(46)</span>
        <span class="nav">待发货(16)</span>
        <span class="nav">待收货</span>
        <span class="nav">已完成</span>
      </div>
      <div class="but">
        <div class="but-row">
          <div class="ant-col">
            <div>订单号：</div>
            <div>
              <i-input :value.sync="value" placeholder="请输入..." style="width: 200px"></i-input>
            </div>
          </div>
          <div class="ant-col">
            <div>订单号：</div>
            <div>
              <i-input :value.sync="value" placeholder="请输入..." style="width: 200px"></i-input>
            </div>
          </div>
          <div class="ant-col">
            <div>订单号：</div>
            <div>
              <i-input :value.sync="value" placeholder="请输入..." style="width: 200px"></i-input>
            </div>
          </div>
          <div class="ant-col">
            <div>订单号：</div>
            <div>
              <i-input :value.sync="value" placeholder="请输入..." style="width: 200px"></i-input>
            </div>
          </div>
          <div class="ant-col">
            <div>订单号：</div>
            <div>
              <i-input :value.sync="value" placeholder="请输入..." style="width: 200px"></i-input>
            </div>
          </div>
          <div class="ant-col">
            <div>订单号：</div>
            <div>
              <i-input :value.sync="value" placeholder="请输入..." style="width: 200px"></i-input>
            </div>
          </div>
          <div class="ant-col">
            <div>订单号：</div>
            <div>
              <i-input :value.sync="value" placeholder="请输入..." style="width: 200px"></i-input>
            </div>
          </div>
          <div class="ant-col">
            <div>订单号：</div>
            <div>
              <i-input :value.sync="value" placeholder="请输入..." style="width: 200px"></i-input>
            </div>
          </div>
        </div>
        <div class="taber">
          <div class="tep">
            <i-button style="marginLeft:1110px;background:#3ec6b6;color:#fff">查询</i-button>
            <i-button style="marginLeft:10px">重置</i-button>
          </div>
          <div class="tabone">
            <i-table :columns="columns1" :data="newArr"></i-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from "vuex";
import { getList } from "@/server/index";
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
      value: "",
      newArr: []
    };
  },
  computed: {
    ...mapState({
      arr: state => state.arr
    })
  },
  methods: {
    ...mapMutations("menu", ["orderData"]),
    ...mapActions("menu", ["getOrder","getTab","susList","waitList"]),
    async getMetho() {
      let res = await getList({
        org_id: 61500,
        page: 1,
        org_type: 5,
        status: "",
        sort: ""
      });
      let news=res.data.list.map((item,index)=>{
        return {
            hort:item.number,
            time:item.created_at_str,
            people:item.customer_name,
            types:item.order_type,
            shou:item.return_status_str,
            dan:item.status_str,
            money:item.pay_amount,
            done:'查看'
        }
     });
     this.newArr = news;
    }
  },
  created() {
    this.getOrder();
    this.getTab();
    this.susList();
    this.waitList();
  },
  mounted() {
    this.getMetho();
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
        flex-shrink: 4;
        flex-wrap: wrap;
        justify-content: space-between;
        .ant-col {
          display: flex;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          width: 25%;
          line-height: 30px;
          margin-top: 20px;
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
      }
    }
  }
}
</style>