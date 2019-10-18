<template>
  <div class="qrcore_content">
    <div class="qrcore_top">
      <h4>自拓二维码管理</h4>
      <p>批量上传</p>
    </div>
    <div class="qrcore_center">
       <Form :model="formItem" :label-width="60" inline>
         <FormItem label="编号">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>
         <FormItem label="姓名">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>
         <FormItem label="电话号码">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>
         <FormItem label="会员卡号">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>
        
        <FormItem label="员工类型">
            <Select v-model="formItem.select">
                <Option value="beijing">专柜员工</Option>
                <Option value="shanghai">自营员工</Option>
            </Select>
        </FormItem>
         <FormItem label="部门">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>
         <FormItem label="楼层">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>
         <FormItem label="区域">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>
         <FormItem label="品牌">
            <Input v-model="formItem.input" placeholder="请输入"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">查询</Button>
            <Button style="margin-left: 8px">重置</Button>
        </FormItem>
       </Form>
    </div>
    <div class="qrcore_bottom">
      <button>+</button>
      <Table ref="selection" :columns="columns1" :data="qrcore"></Table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "qrcode",
  data() {
    return {
       formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
      columns1: [
        {
          title: "编号",
          key: "id"
        },
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "电话号码",
          key: "mobile"
        },
        {
          title: "会员卡号",
          key: "cid"
        },
        {
          title: "入职时间",
          key: "hiredate"
        },
        {
          title: "员工类型",
          key: "simple",
          render: e => {
            return e("div", [
              e(
                "p",
                {
                  style: {
                    fontSize: "16px"
                  }
                },
                "专柜员工"
              )
            ]);
          }
        },
        {
          title: "部门",
          key: "section"
        },
        {
          title: "楼层",
          key: "floor"
        },
        {
          title: "区域",
          key: "district"
        },
        {
          title: "品牌",
          key: "brand"
        },
        {
          title: "操作",
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
                "推荐码"
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
                "编辑"
              ),
              e('span',{
                style:{
                  color:'#3EC6E6'
                },
              },'删除')
            ]);
          }
        }
      ]
    };
  },
  computed: {
    ...mapState({
      qrcore: state => state.vip.qrcore.list
    })
  },
  methods: {
    ...mapActions({
      getqrcode: "vip/getqrcode"
    })
  },
  mounted() {
    this.getqrcode();
    console.log(this.qrcore);
  }
};
</script>
<style lang="scss">
.qrcore_content {
  width: 100%;
  height: 100%;
  .qrcore_top {
    padding: 24px;
    background: #fff;
    overflow: hidden;
  }
  .qrcore_center {
    padding: 24px;
    background: #fff;
    overflow: hidden;
  }
}
</style>