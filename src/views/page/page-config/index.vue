<template>
  <div class="layout-content">
    <div class="content-action">
      <div class="page-container">
        <div class="card-group">
          <h3>页面</h3>
        </div>
        <div class="padding-24 margin-24-top bg-white">
          <div class="btn-add" @click="yelishi">   
            +  
          </div>
          <div class="namelist">
            <Table :columns="columns1" :data="listhome"></Table>
          </div>
          <div class="goage">
            <span>第1-3条, 共 3 条</span>
            <Page :total="3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import http from "@/api/index"
export default {
  data() {
    return {
      listhome:[],
      columns1: [
        {
          title: "名称",
          key: "page_title"
        },
        {
          title: "URL",
          key: "page_url"
        },
        {
          title: "状态",
          key: "address"
        },
        {
          title: "发布时间",
          key: "publish_time"
        }
      ],
      // data1: [
      //   {
      //     name: "John Brown",
      //     age: 18,
      //     address: "New York No. 1 Lake Park",
      //     release: "--",
      //     date: "2016-10-03"
      //   },
      //   {
      //     name: "Jim Green",
      //     age: 24,
      //     address: "London No. 1 Lake Park",
      //     release: "立即发布",
      //     date: "2016-10-01"
      //   },
      //   {
      //     name: "Joe Black",
      //     age: 30,
      //     address: "Sydney No. 1 Lake Park",
      //     release: "立即发布",
      //     date: "2016-10-02"
      //   }
      // ],
       model1: ""
    };
  },
 created() {},
  methods: {
     async gethomelist(){
      const getlist= await http.gethome()
      this.listhome=getlist.data.list
      console.log(getlist.data.list)
    },
    yelishi() {
      this.$router.push("/page/page-config/operate");
    },
   
  },
  
  mounted() {
    this.gethomelist();
  },

};
</script>
<style lang='scss' scoped>
.content-action {
  padding: 0 24px;
}
.page-container {
  width: 100%;
  padding: 24px 0;
  overflow: hidden;
}
.card-group {
  padding: 24px;
  background: #fff;
  overflow: hidden;
  border-bottom: 1px solid #ffefef;
  font-size: 14px;
}
.overflow {
  overflow: hidden;
}

.margin-24-top {
  margin-top: 24px;
}
.padding-24 {
  padding: 24px;
}
.bg-white {
  background: #fff;
}
.btn-add {
  width: 34px;
  height: 34px;
  background: #3ec6b6;
  border-radius: 50%;
  color: #fff;
  font-size: 30px;
  margin-bottom: 24px;
  text-align: center;
  line-height: 34px;
  font-weight: 200;
  cursor: pointer;
}
.namelist {
  font-size: 16px;
}
.goage {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
</style>