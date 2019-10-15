<template>
  <div>
    <h3>店铺管理</h3>
    <div class="nav">
      <Tabs value="name1">
        <TabPane label="全部店铺" name="name1">
          <div class="select">
            <myselect :selectcon="cityList" />
          </div>
          <div id="add">+</div>
          <div class="bottom">
            <Table :columns="columns1" :data="storelist"></Table>
            <Page :total="100" show-total />
          </div>
        </TabPane>
        <TabPane label="e店铺" name="name2">
          <div class="select">
            <myselect :selectcon="cityList" />
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
import { mapState, mapActions } from "vuex";
import http from "@/api/index";
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
          key: "floor_name"
        },
        {
          title: "位置",
          key: "address"
        },
        {
          title: "所属分类",
          key: "category_data"
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
          render: () => {
            return <a>查看</a>;
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
      storelist: state => state.home.storelist.list
    })
  },
  created() {},
  methods: {
    ...mapActions("home", ["getshoplist"])
   
  },
  mounted() {
    this.getshoplist();

   
  }
};
</script>

<style lang="scss" scoped>
#add {
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
</style>
