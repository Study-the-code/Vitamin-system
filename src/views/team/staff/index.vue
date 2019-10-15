<template>
  <div class="content-action">
    <div class="permission-list-container">
      <div class="header">
        <span class="size-16">员工管理</span>
        <div class="nav size-14">
          <!-- <span>dfgvb</span>
          <span>dfgvb</span>
          <span>dfgvb</span>-->
          <Tabs :animated="false">
            <TabPane label="标签一">标签一的内容</TabPane>
            <TabPane label="标签二">标签二的内容</TabPane>
            <TabPane label="标签三">标签三的内容</TabPane>
          </Tabs>
        </div>
      </div>
      <div class="ant-row ant-form-item">
        <div class="ant-col ant-col-8 ant-form-item-label">
          <span>手机号:</span>
        </div>
      </div>
      <!-- <div class="form-container">
        <div class="ant-row">
          <div class="input">
            手机号:
            <Input v-model="value" placeholder="Enter something..." style="width: 200px" />
          </div>
          <div class="input">
            <Dropdown style="margin-left: 20px">
              所属店铺：
             <Cascader :data="data" v-model="value1"></Cascader>
               
           
              <DropdownMenu slot="list">
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem disabled>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem divided>北京烤鸭</DropdownItem>
              </DropdownMenu>
            </Dropdown>
         
          </div>
        </div>
      </div> -->
      <div class="ant-col ant-col-24">
        <div class="text-right">
          <div class="btn-primary">查询</div>
          <div class="btn-info margin-10-left">重置</div>
        </div>
      </div>
      <div>
        <Table size="small" :columns="columns1" :data="data1"></Table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "头像",
          key: "name"
        },
        {
          title: "姓名",
          key: "age"
        },
        {
          title: "手机号",
          key: "address"
        },
        {
          title: "角色",
          key: "name"
        },
        {
          title: "所属店铺",
          key: "age"
        },
        {
          title: "顾客账号",
          key: "address"
        },
        {
          title: "正常",
          key: "age"
        },
        {
          title: "查看",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.content-action {
  padding: 0 24px;
}
.permission-list-container {
  margin-top: 20px;
  padding-bottom: 50px;
}
.permission-list-container .header {
  background: #fff;
  height: 130px;
  padding: 24px 0 0 24px;
  position: relative;
  border-bottom: 2px solid #f5f5f5;
}
.size-16 {
  font-size: 16px;
}

.permission-list-container .header .nav {
  position: absolute;
  bottom: 0;
}
.size-14 {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  display: flex;
  //   justify-items: center;
  justify-content: space-around;
}
.ant-col-24 {
    display: block;
    // -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
}
.text-right {
    text-align: right;
}
.btn-primary {
    display: inline-block;
    background: #3ec6b6;
    border: 1px solid #3ec6b6;
    color: #fff;
    border-radius: 4px;
    padding: 6px 15px;
}

.btn-info {
    color: #3c3c3c;
    border-radius: 4px;
    border: 1px solid #e8e8e8;
    display: inline-block;
    padding: 6px 15px;
    background: #fff;
    cursor: pointer;
}
.margin-10-left {
    margin-left: 10px;
}
</style>