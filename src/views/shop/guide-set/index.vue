<template>
  <div>
    <h3>专柜导航设置</h3>
    <div class="select">
      <myselect :selectcon="cityList" />
    </div>
    <div class="bottom">
      <Table :columns="columns1" :data="storelist"></Table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import './index.scss';
import myselect from "@/components/common/select";
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
          title: "权重",
          key: "city_id",
          sortable: true
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

