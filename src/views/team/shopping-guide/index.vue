<template>
  <div>
    <h3>店铺管理</h3>
    <div class="nav">
      <Tabs value="name1">
        <TabPane label="员工管理" name="name1">
          <div class="select">
            <myselects :selectcon="cityList" :data="cityList"/>
          </div>
          <div class="bottom">
            <Table :columns="columns1" :data="pagelists"></Table>
          </div>
        </TabPane>
        <TabPane label="邀请中(96)" name="name2">
          <div class="bottom">
            <Table :columns="columns3" :data="pagelists"></Table>
          </div>
        </TabPane>
        <TabPane label="角色描述" name="name3">
          <div class="bottom">
            <Table :columns="columns2" :data="pagejiao"></Table>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import myselects from "@/components/common/selectlist";
import http from "@/api/index";
// console.log(http,'---------------')
export default {
  name: "about",
  components: {
    myselects
  },
  data() {
    return {
      value: "",
      list: [],
      pagelists: [],
      pagejiao: [],
      columns1: [
        {
          title: "头像",
          render:(e,params)=>{
            return e ('img',{
              attrs:{
                src:params.row.img,
                style:"width:100%;"
              }
            })
        
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
          key: "status"
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
                      this.GoDetail(id);
                    }
                    
                  }
                },
                "查看"
              )
            ]);
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
                    //  this.GoDetail(id)
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
          title: "角色",
          key: "name"
        },
        {
          title: "权限",
          key: "name"
        },
        {
          title: "店铺权限",
          key: "building"
        },
        {
          title: "手机APP",
          key: "status"
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
                      // this.GoDetail(id);
                    } 
                  }
                },
                "查看"
              )
            ]);
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
    };
  },

  created() {},
  methods: {
   
    async getlist() {
      const pagelist = await http.getTuan();
      this.pagelists = pagelist.data.list;
    },
    async getll() {
      const jiaose = await http.getjiao();
      this.pagejiao = jiaose.data.roleMap;
      console.log(jiaose.data.list)
    }
    //    GoDetail(id) {
    //   this.$router.push({
    //     path: `/team/shopping-guide/detail/${id}`
    //   });
    // }
  },

 
  mounted() {
    this.getlist();
    this.getll();
  }
};
</script>

<style>
/* img{
  width: 80px;
  height: 80px;
} */
</style>
