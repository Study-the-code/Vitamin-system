<template>
  <div>
    <h3>专柜导航设置</h3>
    <div class="select">
      <myselect :selectcon="cityList" />
    </div>
    <div class="bottom">
      <Table :columns="columns1" :data="data1"></Table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import { getshoplist } from "@/store/modules/home";
// import './index.scss';
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
          title: "权重",
          key: "domain",
          sortable: true
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
  // computed: {
  //   ...mapState("storelist", ["storelist"])
  // },
  created() {},
  methods: {
    ...mapActions("home", ["getshoplist"])
  },
  mounted() {
    this.getshoplist();
  },
};
</script>

<style>
</style>
