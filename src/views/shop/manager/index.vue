<template>
  <div>
    <h3>店铺管理</h3>
    <div class="nav">
      <Tabs value="name1">
        <TabPane label="全部店铺" name="name1">
          <div class="select">
            <myselect :selectcon="cityList" />
          </div>

          <div class="bottom">
            <Table :columns="columns1" :data="data1"></Table>
          </div>
        </TabPane>
        <TabPane label="e店铺" name="name2">
          <div class="select">
            <myselect :selectcon="cityList"/>
          </div>

          <div class="bottom">
            <Table :columns="columns1" :data="data1"></Table>
          </div>
        </TabPane>
      </Tabs>
    </div>
    <!-- <div class="select">
     <myselect :selectcon="cityList"/>
    </div>

    <div class="bottom">
      <Table :columns="columns1" :data="data1"></Table>
    </div>-->
  </div>
</template>

<script>

import myselect from "@/components/common/select";
// import "./index.scss";
export default {
  name: "about",
  components: {
    myselect
  },
  data() {
    return {
      value: "",
      list: [],
      columns1: [
        {
          title: "店铺名称",
          key: "name"
        },
        {
          title: "楼层",
          key: "age"
        },
        {
          title: "位置",
          key: "address"
        },
        {
          title: "所属分类",
          key: "clouse"
        },
        {
          title: "店长",
          key: "manager"
        },
        {
          title: "楼管",
          key: "residential"
        },
        {
          title: "状态",
          key: "static"
        },
        {
          title: "操作",
          key: "domain",
          render: ()=>{
            return <a>
                查看
            </a>
          }
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
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      model1: ""
    };
  },
};
</script>

<style>
</style>
