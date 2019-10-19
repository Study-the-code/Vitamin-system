<template>
  <div class="wrap">
    <div class="card-group">
      <div class="top">
        <h3>
          代付款
          <span class="ant-tag">电商订单</span>
        </h3>
      </div>
      <div class="bom">
        <span>店铺订单编号：</span>
        <span class="margin-20-left">下单时间：</span>
      </div>
    </div>

    <div class="content-action">
      <div class="order-list">
        <div class="store-group">
          <div class="border-btm-grey">
            <p class="full-width">
              <span class="ant-avatar">
                <img
                  src="https://img.weitaming.com/vm_brand/logo/20160414/4a09889fac23b464632a0fa7aae7faed.png"
                />
              </span>
              <span class="margin-10-left">III VIVINIKO</span>
            </p>
          </div>
          <div class="product-detail">
            <div class="product-img">
              <img
                src="https://img.alicdn.com/imgextra/i1/1706908345/O1CN01qavxOq2BW3ivWXFXW_!!0-item_pic.jpg"
              />
            </div>
            <div class="product-list">
              <p>商品名称：Knit套头衫</p>
              <p>商品款号：11</p>
              <p>SKU编码：22</p>
              <p>
                <span class="margin-10-right">颜色</span>
                <span class="margin-10-right">尺码</span>
                <span class="margin-10-right">尺码</span>
              </p>
              <div class="justify-between">
                <div>
                  <span class="line-through">￥260.22</span>
                  <span class="color-FF7887">111</span>
                </div>
                <div>x1</div>
              </div>

              <p class="text-right">
                <span
                  class="ant-tag"
                  style="color: rgb(38, 38, 38); border-color: rgb(38, 38, 38);"
                >改价格</span>
              </p>
            </div>
          </div>
        </div>
        <div class="content">
          <p class="quest">
            <span class="float-left">货源类型</span>
            <span class="float-right">配送方式</span>
          </p>
        </div>
        <div class="overflow">
          <div class="card-group">
            <div class="col-xs-3s">
              <p class="justify-between">
                <span>商品宋佳</span>
                <span class="bold">￥55</span>
              </p>
              <div>
                <p class="justify-between">
                  <span>商品宋佳</span>
                  <span class="bold">￥22</span>
                </p>
                <p class="justify-between">
                  <span>商品宋佳</span>
                  <span class="bold">￥88</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-item">
          <div class="col-xs-3s">
            <p class="justify-between">
              <span>实付金额(不含运算)</span>
              <span class="bold">￥55</span>
            </p>
          </div>
        </div>

        <div class="card-itemFull-width">
          <p>订单编号</p>
          <p>订单类型</p>
          <p>下单时间</p>
        </div>
      </div>
      <div class="order-others">
        <div class="ant-card margin-24-btm ant-card-bordered">
          <div class="ant-card-head">
            <div class="ant-card-head-wrapper">
              <div class="ant-card-head-title">买家留言</div>
            </div>
          </div>
          <div class="ant-card-body">
            <p class="margin-8-btm"></p>
          </div>
        </div>

        <div class="ant-card margin-24-btm ant-card-bordered">
          <div class="ant-card-head">
            <div class="ant-card-head-wrapper">
              <div class="ant-card-head-title">提货人信息</div>
            </div>
          </div>
          <div class="ant-card-body">
            <p class="margin-8-btm">啦啦啦啦阿拉啦啦啦</p>
            <p class="margin-8-btm">18656962345</p>
          </div>
        </div>
        <div class="ant-card margin-24-btm ant-card-bordered">
          <div class="ant-card-head">
            <div class="ant-card-head-wrapper">
              <div class="ant-card-head-title">提货人信息</div>
            </div>
          </div>
          <div class="ant-card-body">
            <ul class="ant-timeline"></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .card-group {
    padding: 24px;
    background: #fff;
    overflow: hidden;
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .ant-tag {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        -webkit-font-feature-settings: "tnum";
        font-feature-settings: "tnum";
        display: inline-block;
        height: auto;
        margin: 0 8px 0 0;
        padding: 0 7px;
        font-size: 12px;
        line-height: 20px;
        white-space: nowrap;
        background: #fafafa;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        cursor: default;
        opacity: 1;
        -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
      }
    }
    .bom {
      width: 100%;
      margin-top: 8px;
      display: flex;
      .margin-20-left {
        margin-left: 20px;
      }
    }
  }
  .content-action {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    .order-list {
      width: 68%;
      float: left;
      .store-group {
        width: 100%;
        float: left;
        margin-bottom: 24px;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        display: flex;
        flex-direction: column;
        .border-btm-grey {
          padding: 16px 24px;
          float: left;
          width: 100%;
          background: #fff;
          border-bottom: 1px solid #e8e8e8;
          .full-width {
            width: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            .ant-avatar {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              color: rgba(0, 0, 0, 0.65);
              font-size: 14px;
              font-variant: tabular-nums;
              line-height: 1.5;
              list-style: none;
              -webkit-font-feature-settings: "tnum";
              font-feature-settings: "tnum";
              position: relative;
              display: inline-block;
              overflow: hidden;
              color: #fff;
              white-space: nowrap;
              text-align: center;
              vertical-align: middle;
              background: #ccc;
              width: 32px;
              height: 32px;
              line-height: 32px;
              border-radius: 50%;
              background: transparent;
              img {
                display: block;
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
                border-style: none;
                vertical-align: middle;
              }
            }
            .margin-10-left {
              margin-left: 10px;
            }
          }
        }
        .product-detail {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #e8e8e8;
          .product-img {
            width: 105px;
            height: 140px;
            margin-right: 8px;
            overflow: hidden;
            white-space: nowrap;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            img {
              height: 100%;
              width: 100%;
              object-fit: contain;
              border-style: none;
            }
          }
          .product-list {
            width: 80%;
            float: left;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            .margin-10-right {
              margin-right: 10px;
              box-sizing: border-box;
            }
            .justify-between {
              display: flex;
              justify-content: space-between;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              list-style: none;
              .line-through {
                text-decoration: line-through;
                font-weight: 700;
              }
              .color-FF7887 {
                margin-left: 20px;
                color: #ff7887;
              }
            }
            .text-right {
              text-align: right;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              list-style: none;
              .ant-tag {
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                color: rgba(0, 0, 0, 0.65);
                font-size: 14px;
                font-variant: tabular-nums;
                line-height: 1.5;
                list-style: none;
                -webkit-font-feature-settings: "tnum";
                font-feature-settings: "tnum";
                display: inline-block;
                height: auto;
                margin: 0 8px 0 0;
                padding: 0 7px;
                font-size: 12px;
                line-height: 20px;
                white-space: nowrap;
                background: #fafafa;
                border: 1px solid #d9d9d9;
                border-radius: 4px;
                cursor: default;
                opacity: 1;
                -webkit-transition: all 0.3s
                  cubic-bezier(0.78, 0.14, 0.15, 0.86);
                transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
              }
            }
          }
        }
      }
      .content {
        padding: 16px 24px;
        float: left;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #e8e8e8;
        .quest {
          width: 100%;
          float: left;
          margin-bottom: 8px;
          .float-left {
            float: left;
          }
          .float-right {
            float: right;
          }
        }
      }

      .overflow {
        overflow: hidden;
        width: 100%;
        float: left;
        margin-bottom: 24px;
        .card-group {
          border-bottom: 1px solid #e8e8e8;
          padding: 24px;
          background: #fff;
          overflow: hidden;
          .col-xs-3s {
            width: 30%;
            float: right;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            .justify-between {
              display: flex;
              justify-content: space-between;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              list-style: none;
              span {
                display: inline-block;
              }
              .bold {
                font-weight: 700;
              }
            }
          }
        }
      }
      .card-item {
        padding: 24px;
        background: #fff;
        overflow: hidden;
        width: 100%;
        float: left;
        margin-bottom: 24px;
        .col-xs-3s {
          width: 30%;
          float: right;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          .justify-between {
            display: flex;
            justify-content: space-between;
            .bold {
              font-weight: 700;
            }
          }
        }
      }
      .card-itemFull-width {
        width: 100%;
        padding: 24px;
        background: #fff;
        overflow: hidden;
        float: left;
        margin-bottom: 24px;
        p {
          margin-bottom: 8px;
          overflow: hidden;
        }
      }
    }

    .order-others {
      overflow: hidden;
      width: 30%;
      float: left;
      .ant-card margin-24-btm ant-card-bordered {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        -webkit-font-feature-settings: "tnum";
        font-feature-settings: "tnum";
        position: relative;
        background: #fff;
        border-radius: 2px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        .ant-card-head {
          min-height: 48px;
          margin-bottom: -1px;
          padding: 0 24px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
          font-size: 16px;
          background: transparent;
          border-bottom: 1px solid #e8e8e8;
          border-radius: 2px 2px 0 0;
          zoom: 1;
          .ant-card-head-wrapper {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            .ant-card-head-title {
              display: inline-block;
              -webkit-box-flex: 1;
              -ms-flex: 1;
              flex: 1;
              padding: 16px 0;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              list-style: none;
            }
          }
        }
        .ant-card-body {
          padding: 24px;
          zoom: 1;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          .margin-8-btm {
            margin-bottom: 8px;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
          }
          .ant-timeline {
            webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5;
            -webkit-font-feature-settings: "tnum";
            font-feature-settings: "tnum";
            margin: 0;
            padding: 0;
            list-style: none;
          }
        }
      }
    }
  }
}
</style>