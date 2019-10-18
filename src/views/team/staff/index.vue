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
            <Table :columns="columns1" :data="pagelists"></Table>
          </div>
        </TabPane>
        <TabPane label="邀请中(3)" name="name2">
          <div class="bottom">
            <Table :columns="columns3" :data="pagelists"></Table>
          </div>
        </TabPane>
        <TabPane label="角色描述" name="name3">
          <div class="bottom">
            <Table :columns="columns2" :data="pagets"></Table>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import myselects from "@/components/common/selectlist";
import http from "@/api/index";

export default {
  name: "about",
  components: {
    myselects
  },
  data() {
    return {
      // value: "",
      list: [],
      pagelists: [],
      pagets: [],
      columns1: [
        {
          title: "头像",
          render: (e, params) => {
            return e("img", {
              attrs: {
                src: params.row.img,
                style: "width:100%;height:100%;border-radius:100%;"
              }
            });
          }
        },

        {
          title: "姓名",
          key: "user_name"
        },
        {
          title: "手机号",
          key: "mobile"
        },
        {
          title: "角色",
          key: "role"
        },
        {
          title: "所属店铺",
          key: "store_name",
          render: (p, params) => {
            return p("li", [
              p("li", {
                type: "person"
              }),
              p("strong", params.row.store_name)
            ]);
          }
        },
        {
          title: "顾客账号",
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
      columns3: [
        {
          title: "姓名",
          key: "user_name"
        },
        {
          title: "手机号",
          key: "mobile"
        },
        {
          title: "角色",
          key: "role"
        },
        {
          title: "所属店铺",
          key: "store_name"
        },
        {
          title: "邀请者",
          key: "create_user_name"
        },
        {
          title: "发送时间",
          key: "created_at"
        },
        {
          title: "操作",
          key: "domain",
          render: () => {
            return <a>查看</a>;
          }
        }
      ],
      columns2: [
        {
          title: "角色",
          key: "role_name"
        },
        {
          title: "权限",
          key: "description"
        },
        {
          title: "店铺权限",
          key: "building"
        },
        {
          title: "手机APP",
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
      model1: "",
      value: ""
    };
  },

  created() {},
  methods: {
    async getlist() {
      const pagelist = await http.getTuan();
      this.pagelists = pagelist.data.list;
      console.log(pagelist.data.list);
    },
    async getls() {
      const pagetsl = await http.getmiao();
      this.pagets = pagetsl.data.list;
      // console.log(pagetsl.data.list)
    }
  },
  mounted() {
    this.getlist();
    this.getls();
  }
};
</script>

<style>
</style>
