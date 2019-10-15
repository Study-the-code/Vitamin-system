<template>
  <div class="content-action">
    <div class="permission-list-container">
      <div class="header">
        <span class="size-16">员工管理</span>
        <div class="nav size-14">
          <!-- <span>dfgvb</span>
          <span>dfgvb</span>
          <span>dfgvb</span> -->
          <Tabs :animated="false">
            <TabPane label="标签一">标签一</TabPane>
            <TabPane label="标签二">标签二的内容</TabPane>
            <TabPane label="标签三">标签三的内容</TabPane>
          </Tabs>
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
    data () {
            return {
                columns1: [
                    {
                        title: '头像',
                        key: 'name'
                    },
                    {
                        title: '姓名',
                        key: 'age'
                    },
                    {
                        title: '手机号',
                        key: 'address'
                    },
                    {
                        title: '角色',
                        key: 'name'
                    },
                    {
                        title: '所属店铺',
                        key: 'age'
                    },
                    {
                        title: '顾客账号',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
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
    height:50px;
    line-height: 50px;
  font-size: 14px;
  display: flex;
//   justify-items: center;
  justify-content: space-around
}
</style>