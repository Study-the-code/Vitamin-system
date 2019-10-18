<template>
  <div class="container">
    <div class="container_title">绑定会员卡设置</div>
    <div class="context">
      <ul class="top">
        <li>关联您的会员卡</li>
        <li>网上商城</li>
      </ul>
      <div class="des">顾客可以在个人中心绑定会员卡。绑定会员卡方法：顾客输入会员卡手机号，维他命会访问商场CRM获取顾客会员卡信息。</div>
      <h4>客服中心电话</h4>
      <p>点击添加客服中心电话</p>
      <p>设置会员卡背景图</p>
      <button>+</button>
      <Table :columns="columns1" :data="membersetList" size="large"></Table>
      <p>提示：卡片图案建议尺寸： 690像素 * 100像素 分辨率72</p>
      <div>开通绑定会员卡功能</div>
      <button>开通</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "vip-card",
  data() {
    return {
      columns1: [
        {
          title: "会员等级编码",
          key: "grade_code"
        },
        {
          title: "会员等级名称",
          key: "grade_title"
        },
        {
          title: "卡片图案",
          render: (e, params) => {
            return e("img", {
              attrs: {
                src: params.row.grade_img,
                style: "width:100%"
              }
            });
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
                "编辑"
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
  computed: {
    ...mapState({
      membersetList: state => state.vip.membersetList.cardList
    })
  },
  methods: {
    ...mapActions({
      getBindbank: "vip/getBindbank"
    })
  },
  mounted() {
    this.getBindbank();
    console.log(this.membersetList);
  }
};
</script>
<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  .container_title {
    font-size: 16px;
  }
  .context {
    height: 100%;
  }
}
</style>