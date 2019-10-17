<template>
  <div>
    <h3>店铺管理</h3>
    <div class="nav">
      <Tabs value="name1">
        <TabPane label="全部店铺" name="name1">
          <div class="select">
            <myselect :selectcon="floor" />
          </div>
          <div id="add" @click="clickStatic">+</div>
          <div class="bottom">
            <Table :columns="columns1" :data="storelist"></Table>
            <Page :total="100" show-total />
          </div>
        </TabPane>
        <TabPane label="e店铺" name="name2">
          <div class="select">
            <label for>
              店铺名：
              <Input v-model="value" placeholder="请输入店铺名称" style="width: 300px" />
            </label>
            <label for>
              店铺权限:
              <Select v-model="model1" style="width:200px">
                <Option v-for="item in authority" :value="item" :key="item">{{ item }}</Option>
              </Select>
            </label>
            <label for>
              授权品牌:
              <Select v-model="model1" style="width:200px">
                <Option v-for="item in list" :value="item.name" :key="item.id">{{ item.name }}</Option>
              </Select>
            </label>

            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </div>
          <div class="bottom">
            <Table :columns="columns2" :data="shopList"></Table>
          </div>
        </TabPane>
      </Tabs>
    </div>
    <trDialog v-show="flag" @flagMethod="flagMethod" />
  </div>
</template>

<script>
import myselect from "@/components/common/select";
import { mapState, mapActions } from "vuex";
import trDialog from "@/components/trdialog";
import http from "@/api/index";

export default {
  name: "about",
  components: {
    myselect,
    trDialog
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
          render: (e, params) => {
            return e("a", [
              e(
                "a",
                {
                  props: {
                    type: "1"
                  },
                  on: {
                    click: () => {
                      const id = params.row.id;
                      this.goDetail(id);
                    }
                  }
                },
                "查看"
              )
            ]);
          }
        }
      ],
      columns2: [
        {
          title: "店铺名称",
          key: "name"
        },
        {
          title: "店铺权限",
          key: "store_permission",
          render: (p, params) => {
           
            return p("li", [
              p("li", {
                type: "person"
              }),
              p("strong", params.row.store_permission)
            ]);
          }
        },
        {
          title: "授权品牌",
          key: "name"
        },
        {
          title: "商品来源",
          key: "prod_src",
          render: (p, params) => {
     
            return p("p", [
              p("p", {
                type: "1"
              }),
              p("strong", params.row.prod_src)
            ]);
          }
        },
        {
          title: "状态",
          key: "status_str"
        },
        {
          title: "操作",
          key: "domain",
          render: (e, params) => {
            return e("a", [
              e(
                "a",
                {
                  props: {
                    type: "1"
                  },
                  on: {
                    click: () => {
                      const id = params.row.id;

                      this.goDetail(id);
                    }
                  }
                },
                "查看"
              )
            ]);
          }
        }
      ],
      model1: "",
      floor: [],
      flag: false,
      shopList: [],
      authority: []
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
    async _getfloor() {
      const result = await http.getfloor();

      const { list } = result.data;

      this.floor = list;
      return result;
    },
    clickStatic() {
      this.flag = true;
    },
    flagMethod() {
      this.flag = false;
    },
    async _getshop() {
      const result = await http.getshopList();
      const { list } = result.data;

      this.shopList = list;
      this.authority = this.shopList[0]["store_permission"];
      return result;
    },
    async _getbrend() {
      const result = await http.getbrand();
      const { data } = result;
      console.log(result.data, "----------------------");
      this.list = data;
      return result;
    },
    goDetail(id) {
      console.log(id);
      console.log(this.$router);
      this.$router.push({
        path: `/shop/manager/detail/${id}`
      });
    }
  },
  mounted() {
    this.getshoplist();
    this._getfloor();
    this._getshop();
    this._getbrend();
  }
};
</script>

<style lang="scss" >
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
