<template>
  <div>
    <h3>专柜导航设置</h3>
    <div class="select">
      <myselect :selectcon="floor" />
    </div>
    <div class="bottom">
      <Table :columns="columns1" :data="storelist"></Table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import myselect from "@/components/common/select";
import http from "@/api/index";
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
          key: "category_data",
          render: (p, params) => {
            return p("li", [
              p("li", {
                type: "person"
              }),
              p("strong", params.row.category_data)
            ]);
          }
        },
        {
          title: "权重",
          key: "city_id",
          sortable: true
        }
      ],

      model1: "",
      floor: []
    };
  },
  computed: {
    ...mapState({
      storelist: state => state.home.storelist.list
    })
  },
  created() {},
  methods: {
    ...mapActions("home", ["getshoplist"]),
    //  async _getbrend() {
    //   const result = await http.getbrand();
    //   const { data } = result;
    //   console.log(result.data, "----------------------");
    //   this.list = data;
    //   return result;
    // },
    async _getfloor() {
      const result = await http.getfloor();

      const { list } = result.data;

      this.floor = list;
      return result;
    }
  },
  mounted() {
    this.getshoplist();
    // console.log(this.$store.state.home.storelist.list)
    this._getfloor();
    //  this._getbrend();
  }
};
</script>

<style>
</style>

