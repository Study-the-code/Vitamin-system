<template>
  <div>
    <h3>店铺管理</h3>
    <div class="nav">
      <Tabs value="name1">
        <TabPane label="员工管理" name="name1">
          <div class="select">
            <myselects :selectcon="cityList" />
          </div>

          <div class="bottom">
            <Table :columns="columns1" :data="storelist"></Table>
          </div>
        </TabPane>
        <TabPane label="邀请中(3)" name="name2">
          <!-- <div class="select">
            <myselects :selectcon="cityList"/>
          </div> -->

          <div class="bottom">
            <Table :columns="columns1" :data="data1"></Table>
          </div>
        </TabPane>
        <TabPane label="角色描述" name="name3">
          <!-- <div class="select">
            <myselects :selectcon="cityList"/>
          </div> -->

          <div class="bottom">
            <Table :columns="columns1" :data="data1"></Table>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>

import myselects from "@/components/common/selectlist";
import { mapState, mapActions } from "vuex";
export default {
  name: "about",
  components: {
    myselects
  },
  data() {
    return {
      value: "",
      list: [],
      columns1: [
        {
          title: "头像",
          key: "name"
        },
        {
          title: "姓名",
          key: "floor_name"
        },
        {
          title: "手机号",
          key: "address"
        },
        {
          title: "所属分类",
          key: "category_data",
          
        },
        {
          title: "店长",
          key: "shop_manager"
        },
        {
          title: "楼管",
          key: "building"
        },
        {
          title: "状态",
          key: "status_str"
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
    computed: {
    ...mapState({
      storelist:state=>state.home.storelist.list
    })
  },
  created() {},
  methods: {
    ...mapActions("home", ["getshoplist"])
  },
  mounted() {
    this.getshoplist();
    console.log(this.$store.state.home.storelist.list)
  },
};
</script>

<style>
</style>
