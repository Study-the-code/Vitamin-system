<template>
  <div class="container">
    <div class="container_title">绑定会员卡设置</div>
    <div class="context">
      <ul class="top">
        关联您的会员卡
        <span>网上商城</span>
      </ul>
      <div class="des">顾客可以在个人中心绑定会员卡。绑定会员卡方法：顾客输入会员卡手机号，维他命会访问商场CRM获取顾客会员卡信息。</div>
      <div class="service-setting">
        <h4>客服中心电话</h4>
        <p @click="addiphone" title="添加客服电话">点击添加客服中心电话</p>
      </div>
      <div class="dividing-line"></div>
      <div class="vip-card-setting">
        <p class="title">设置会员卡背景图</p>
        <div class="add" @click="changeVip">+</div>
        <Table :columns="columns1" :data="membersetList" size="large"></Table>
        <p class="tip">提示：卡片图案建议尺寸： 690像素 * 100像素 分辨率72</p>
        <div class="open-vip-card">
          <div class="title">开通绑定会员卡功能</div>
          <div class="btn_open">开通</div>
        </div>
      </div>
    </div>
    <Modal v-model="modal1" :title="title" @on-ok="ok" @on-cancel="cancel">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import http from '@/api/index'
export default {
  name: "vip-card",
  data() {
    return {
      modal1: false,
      title:"",
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
                  on: {
                    click:()=>{
                      const id=params.row.id
                        this.vipMessage(id)
                    }
                  }
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
                  on: {
                    click:(params)=>{
                      this.remove()
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
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
    }),
    ok() {
      this.$Message.info("Clicked ok");

    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    
   async remove(id){
      const res= await http.Delete(id)
     if(res.code===200){
       this.$Message.info("删除成功！");
     }
      
    },
    addiphone(){
      this.modal1=true
      this.title="修改客服中心电话"
    },
    changeVip(){
      this.modal1=true
      this.title="会员卡信息设置"
    },
    vipMessage(id){
      this.modal1=true
      this.title="会员卡信息设置"
    }
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
  background: #fff;
  margin-top: 24px;
  padding: 24px 24px 48px;
  font-size: 14px;
  .container_title {
    font-size: 16px;
  }
  .context {
    height: 100%;
  }
  .top {
    margin-bottom: 16px;
    margin-top: 34px;
  }
  .des {
    margin-bottom: 24px;
    color: #a0a0a0;
  }
  .service-setting {
    margin-top: 34px;
    h4 {
      margin-bottom: 16px;
    }
    p {
      cursor: pointer;
      color: #3ec6b6;
    }
  }
  .dividing-line {
    border-bottom: 1px solid #e8e8e8;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .vip-card-setting {
    .title {
      margin-top: 24px;
      margin-bottom: 24px;
    }
    .add {
      width: 34px;
      height: 34px;
      background: #3ec6b6;
      border-radius: 50%;
      color: #fff;
      font-size: 30px;
      margin-bottom: 24px;
      text-align: center;
      line-height: 30px;
      font-weight: 200;
      cursor: pointer;
    }
    .tip {
      margin-top: 12px;
      color: #a0a0a0;
    }
    .open-vip-card {
      .title {
        margin-top: 24px;
        margin-bottom: 12px;
      }
      .btn_open {
        width: 88px;
        height: 32px;
        background: #3ec6b6;
        color: #fff;
        line-height: 32px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 12px;
      }
    }
  }
}
</style>