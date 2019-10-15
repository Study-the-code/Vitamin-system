<template>
  <div class="teamstaff">
    <div class="content-action">
      <div class="permission-list-container">
        <div class="header">
          <span class="size-16">员工管理</span>
          <div class="nav size-14">
            <span class="color-light border-light">导购管理</span>
            <span>邀请中(3)</span>
            <span>角色描述</span>
          </div>
        </div>
      </div>
    </div>
    <div class="form-container">
      <div class="container-box">
        <div class="input">
          手机号:
          <Input v-model="value" placeholder="Enter something..." style="width: 200px" />
        </div>
        <div>
          所属店铺:
          <Dropdown>
            <Input v-model="value" placeholder="Enter something..." style="width: 200px" />
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div>
          所属店铺:
          <Dropdown>
            <Input v-model="value" placeholder="Enter something..." style="width: 200px" />
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
       <div>
          所属店铺:
          <Dropdown>
            <Input v-model="value" placeholder="Enter something..." style="width: 200px" />
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      <div>
          所属店铺:
          <Dropdown>
            <Input v-model="value" placeholder="Enter something..." style="width: 200px" />
            <DropdownMenu slot="list">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div class="button">
          <el-row>
            <el-button type="success">查询</el-button>
          </el-row>
          <el-row>
            <el-button>重置</el-button>
          </el-row>
        </div>
      </div>
    </div>
    <div class="table-list">
      <div class="table">
        <div class="btn-add">+</div>
      </div>

      <div class="table-elbox">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="img" label="头像" width="70px" height="70px">
            <template slot-scope="scope">
              <img :src="scope.row.img" min-width="70" height="70" />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="手机号"></el-table-column>
          <el-table-column prop="role" label="角色"></el-table-column>
          <el-table-column prop="super" label="所属店铺"></el-table-column>
          <el-table-column prop="customer" label="顾客账号"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column prop="operate" label="操作"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: [
        {
          img: "http://www.uzones.com/uploads/allimg/170522/2-1F5221R605.jpg",
          name: "方超管",
          address: "13523992456",
          role: "超级管理员",
          super: "全部",
          customer: "未关联",
          status: "正常",
          operate: "查看"
        },
        {
          img:
            "http://img4.imgtn.bdimg.com/it/u=2100492198,3371106014&fm=26&gp=0.jpg",
          name: "sonya",
          address: "17010000001",
          role: "超级管理员",
          super: "全部",
          customer: "未关联",
          status: "冻结",
          operate: "查看"
        },
        {
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2627420391,3533811142&fm=26&gp=0.jpg",
          name: "超管",
          address: "17346557975",
          role: "超级管理员",
          super: "所辖店铺",
          customer: "未关联",
          status: "正常",
          operate: "查看"
        },
        {
          img:
            "http://img5.imgtn.bdimg.com/it/u=3942224086,2306564507&fm=26&gp=0.jpg",
          name: "王雅云",
          address: "17689878909",
          role: "超级管理员",
          super: "所辖店铺",
          customer: "未关联",
          status: "冻结",
          operate: "查看"
        },
        {
          img:
            "http://img3.imgtn.bdimg.com/it/u=3026939796,485761977&fm=26&gp=0.jpg",
          name: "秦桂平",
          address: "18987678970",
          role: "超级管理员",
          super: "所辖店铺",
          customer: "未关联",
          status: "正常",
          operate: "查看"
        },
        {
          img:
            "http://img5.imgtn.bdimg.com/it/u=4212639482,1816603765&fm=26&gp=0.jpg",
          name: "钱转",
          address: "13456568767",
          role: "超级管理员",
          super: "所辖店铺",
          customer: "未关联",
          status: "冻结",
          operate: "查看"
        },
        {
          img:
            "http://img3.imgtn.bdimg.com/it/u=1558695446,2847015617&fm=26&gp=0.jpg",
          name: "王小虎",
          address: "15576876767",
          role: "超级管理员",
          super: "全部",
          customer: "未关联",
          status: "正常",
          operate: "查看"
        }
      ],
      multipleSelection: [],
      options: [
        {
          value: "选项1",
          label: "诗易茜"
        },
        {
          value: "选项2",
          label: "FSALTER诗篇"
        },
        {
          value: "选项3",
          label: "爱美丽三楼专柜"
        },
        {
          value: "选项4",
          label: "AVVN"
        },
        {
          value: "选项5",
          label: "J.D.V"
        }
      ],
      roles: [
        {
          value: "选项1",
          label: "店长"
        },
        {
          value: "选项2",
          label: "导购"
        }
      ],
      customer: [
        {
          value: "选项1",
          label: "已关联"
        },
        {
          value: "选项2",
          label: "未关联"
        }
      ],
      status: [
        {
          value: "选项1",
          label: "冻结"
        },
        {
          value: "选项2",
          label: "正常"
        }
      ],
      value: "",
      input: ""
    };
  },
  computed: {},
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.teamstaff {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.breadCrumbs {
  padding: 20px 0 20px 24px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  line-height: 28px;
}
.permission-list-container {
  width: 90%;
  background: #fff;
  height: 130px;
  padding: 24px 0 0 24px;
  position: relative;
  border-bottom: 2px solid #f5f5f5;
}
.permission-list-container .header .nav {
  position: absolute;
  bottom: 0;
}
.header .nav span {
  margin-right: 48px;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  cursor: pointer;
}
.content-action {
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-light {
  border-bottom: 2px solid #3ec6b6;
}
.form-container {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 36px;
}
.container-box {
  width: 90%;
  height: 150px;
  background: #fff;
  display: flex;
  align-items: center;
  // justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 20px;
  box-sizing: border-box;
}
.container-box div {
  padding: 0 10px;
  box-sizing: border-box;
}
.el-input:hover {
  border-color: #3ec6b6 !important;
}
.el-input {
  flex: 1;
}
.input {
  line-height: 36px;
  display: flex;
}
.button {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.table-list {
  width: 100%;
  flex: 1;
  background: #f5f5f5;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.table {
  width: 90%;
  height: 64px;
  padding: 0 10px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.btn-add {
  width: 34px;
  height: 34px;
  background: #3ec6b6;
  border-radius: 50%;
  color: #fff;
  font-size: 30px;
  text-align: center;
  line-height: 34px;
  font-weight: 200;
  cursor: pointer;
}
.table-elbox {
  width: 100%;
  flex: 1;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 42px;
  box-sizing: border-box;
}
.el-table {
  width: 90%;
  flex: 1;
  background: #fff;
}
// .el-table tr{
//     background: #fafafa;
// }
</style>