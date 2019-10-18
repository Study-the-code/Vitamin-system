<template>
  <div class="shopSet">
    <div class="m-set-left">
      <span @click="classify" :class="`${isline ? 'color':''}`">
        店铺分类管理
        <i :class="`${isline ? 'topline':'bottomline'}`"></i>
      </span>
      <span @click="manage" :class="`${isline ? '':'color'}`">楼层管理</span>
    </div>
    <div class="m-set-right">
      <h2>{{title}}</h2>
<<<<<<< HEAD
      <button @click="addParent" class="btn">+</button>
      <div class="tab-header">
        <span v-for="(item,index) in tabheader[info]" :key="index">{{item}}</span>
      </div>
      <div class="tab" @mouseleave="handleClearRow">
        <div
          class="item-wrap"
          v-for="(item,index) in categoryList"
          :key="index"
          @mouseover="handleClearCurrentRow(index)"
        >
          <span>
            <i v-if="item.children">+</i>
            <input
              type="text"
              :value="item.name"
              v-if="isShow===index&&!item.description"
              class="text"
              :name="item.id"
              @change="input"
            />
            <b :class="`${item.children ? '':'maxright'}`" v-else>{{item.name}}</b>
          </span>
          <span>
            <b v-if="item.description">{{item.description}}</b>
          </span>
          <span>
            <input
              type="text"
              :value="item.weight"
              :name="item.id"
              :class="`${item.description ? 'weight':'weights'}`"
              v-if="isShow===index"
              @change="input"
            />
            <b v-else>{{item.weight}}</b>
          </span>
          <span>
            <i @click="addItem(item.name,item.id)">添加</i>
            <i class="among">|</i>
            <Poptip
              confirm
              :transfer="true"
              title="确定要删除吗?"
              @on-ok="removeItem(item.id,item.description)"
              @on-cancel="cancel"
              ok-text="确定"
              cancel-text="取消"
              placement="top-end"
            >删除</Poptip>
=======
      <button @click="modal1 = true" class="btn">+</button>
      <div class="tab-header">
          <span v-for="(item,index) in tabheader[info]" :key="index">{{item}}</span>
        </div>
      <div class="tab" @mouseleave="handleClearRow">
        <div class="item-wrap" v-for="(item,index) in categoryList" :key="index" @mouseover="handleClearCurrentRow(index)">
          <span>
            <i v-if="item.children">+</i>
            <input type="text" :value="item.name" v-if="isShow===index" name="name" @focus="focus" @change="input"/>
            <b :class="`${item.children ? '':'maxright'}`" v-else>{{item.name}}</b>
          </span>
          <span>
            <input type="text" :value="item.weight" name="weight" v-if="isShow===index" @focus="focus" @change="input"/>
            <b v-else>{{item.weight}}</b>
          </span>
          <span>
            <i>添加</i>
            <i class="among">|</i>
            <i>删除</i>
>>>>>>> 5eb593b18684b75de6b3d89d6e23a36c718f0e97
          </span>
        </div>
      </div>
    </div>
<<<<<<< HEAD
    <Modal v-model="modal1" :title="com" class="modal">
      <Form ref="formValidate" :model="formValidate" :label-width="80">
        <FormItem label="父分类" v-if="itemName">{{itemName}}</FormItem>
        <FormItem label="* 分类名称" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="权重" prop="mail">
          <Input v-model="formValidate.weight" placeholder="请输入"></Input>
        </FormItem>
      </Form>
      <p>填写数字，权重大的排在前面</p>
      <div slot="footer">
        <Button type="text" size="large" @click="cancel">取消</Button>
        <Button type="primary" size="large" @click="ok">确定</Button>
      </div>
    </Modal>
=======
    <div class="deloge">
      <Modal v-model="modal1" title="添加父分类" @on-ok="ok" @on-cancel="cancel" class="modal">
        <Form ref="formValidate" :model="formValidate" :label-width="80">
          <FormItem label="* 分类名称" prop="name">
            <Input v-model="formValidate.value" placeholder="请输入"></Input>
          </FormItem>
          <FormItem label="权重" prop="mail">
            <Input v-model="formValidate.size" placeholder="请输入"></Input>
          </FormItem>
        </Form>
        <p>填写数字，权重大的排在前面</p>
      </Modal>
    </div>
>>>>>>> 5eb593b18684b75de6b3d89d6e23a36c718f0e97
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
<<<<<<< HEAD

=======
>>>>>>> 5eb593b18684b75de6b3d89d6e23a36c718f0e97
export default {
  name: "shopSet",
  data() {
    return {
<<<<<<< HEAD
      type: 2,
      modal1: false,
      com: "添加父分类",
      itemName: "",
      title: "店铺分类管理",
      isline: true,
      info: 0,
      isShow: -1,
      initial: "",
      id: "",
      formValidate: {
        update: 1,
        name: "",
        weight: ""
      },
      tabheader: [
        ["分类名称", "", "权重", "操作"],
        ["楼层名称", "楼层说明", "权重", "操作"]
      ]
    };
  },
  watch: {
    modal1(val) {
      console.log(this.val);
    }
  },
=======
      modal1: false,
      title: "店铺分类管理",
      isline: true,
      info:0,
      isShow: -1,
      initial:"",
      formValidate: {
        value: "",
        size: "",
        name:"",
        weight:"",
      },
      tabheader:[["分类名称","权重","操作"],["1","2","3"]]
    };
  },
>>>>>>> 5eb593b18684b75de6b3d89d6e23a36c718f0e97
  computed: {
    ...mapState({
      categoryList: state => state.list.categoryList
    })
  },
  async mounted() {
<<<<<<< HEAD
    await this.getCategoryList(this.type);
  },
  methods: {
    ...mapActions({
      getCategoryList: "list/getCategoryList",
      getFloorList: "list/getFloorList",
      addCategorySave: "list/addCategorySave",
      categoryDelete: "list/categoryDelete"
    }),
    async classify() {
      await this.getCategoryList(this.type);
      this.title = "店铺分类管理";
      this.isline = true;
      this.info = 0;
    },
    async ok() {
      if (this.formValidate.name) {
        console.log(this.formValidate);
        console.log(this.itemName);
        console.log(this.modal1);
        let res = null;
        if (this.itemName) {
          let params = {
            parent_id: this.id
          };
          let newParams = Object.assign({}, this.formValidate, params);
          res = await this.addCategorySave(newParams);
          await this.getFloorList(this.type);
        } else {
          res = await this.addCategorySave(this.formValidate);
          await this.getCategoryList(this.type);
        }
        if (res.code === 200) {
          let params = {
            parent_id: "",
            update: 1,
            name: "",
            weight: ""
          };
          this.$Message.success("操作成功");
          this.modal1 = false;
          this.formValidate = params;
        }
      } else {
        this.$Message.info("请填写分类名称");
      }
    },
    cancel() {
      this.modal1 = false;
    },
    async manage() {
      await this.getFloorList();
      this.title = "楼层管理";
      this.isline = false;
      this.info = 1;
    },
    handleClearCurrentRow($index) {
      this.isShow = $index;
    },
    handleClearRow(e) {
      this.isShow = -1;
    },
  async input(event) {
      var e = event || window.event;
      console.log(e.target.className)
      if (e.target.className==="text") {
        let params = {
          update: 2,
          name: e.target.value,
          id: e.target.name
        };
        console.log(e.target.value)
        this.$Message.success("操作成功")
        await this.addCategorySave(params);
        await this.getCategoryList(this.type);  
      } else {
        let params = {
          update: 2,
          weight: e.target.value,
          id: e.target.name
        };
       await this.addCategorySave(params);
        if(e.target.className==="weight"){
          await  this.getFloorList(this.type);
        }else{
          await this.getCategoryList(this.type);  
        }
          this.$Message.success("操作成功")
      }
    },
    addItem(name, id) {
      this.modal1 = true;
      this.com = "添加子分类";
      this.itemName = name;
      this.id = id;
    },
    addParent() {
      this.modal1 = true;
      this.com = "添加父分类";
      this.itemName = "";
    },
    async removeItem($id, $info) {
      let params = {
        id: $id
      };
      let res = await this.categoryDelete(params);
      if (res.code === 200) {
        if ($info) {
          await this.getFloorList(this.type);
        } else {
          await this.getCategoryList(this.type);
        }
        this.$Message.info("删除成功");
      }
    }
=======
    let type = { type: 2 };
    await this.getCategoryList(type);
    console.log(this.categoryList);
  },
  methods: {
    ...mapActions({
      getCategoryList: "list/getCategoryList"
    }),
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    classify() {
      this.title = "店铺分类管理";
      this.isline = true;
      this.info=0
    },
    manage() {
      this.title = "楼层管理";
      this.isline = false;
      this.info=1
    },
    handleClearCurrentRow($index) {
     this.isShow=$index
    },
    handleClearRow(e){
     this.isShow=-1
    },
    input(event){
         var e= event || window.event
      if(e.target.name==="name"){
        console.log(this.initial)
          console.log(e.target.value)
      }else{
         console.log(e.target.value)
      }
    },
    focus(event){
      var e= event || window.event
      this.initial= e.target.value;
    }
    
>>>>>>> 5eb593b18684b75de6b3d89d6e23a36c718f0e97
  }
};
</script>

<style lang="scss" scoped>
.shopSet {
  width: 100%;
  min-height: 520px;
  display: flex;
  background: #fff;
}
.modal /deep/ .ivu-modal-body {
  padding: 33px;
}
<<<<<<< HEAD
.tab-header {
  width: 98%;
}
=======

>>>>>>> 5eb593b18684b75de6b3d89d6e23a36c718f0e97
.tab {
  width: 98%;
  min-height: 370px;
  font-size: 14px;
}
.tab-header,
.item-wrap {
  display: flex;
  background: #e8e8e8;
  padding: 16px 0;
}
.item-wrap {
  padding: 20px 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.item-wrap input {
  border-radius: 5px 5px 5px 5px;
  outline: none;
  border: 1px solid #ccc;
  padding: 5px 0 5px 15px;
}
.tab-header span,
.item-wrap span {
<<<<<<< HEAD
  padding-left: 14px;
}
.tab-header span:nth-child(1),
.item-wrap span:nth-child(1) {
  flex: 2.5;
}
.tab-header span:nth-child(2),
.item-wrap span:nth-child(2) {
  flex: 3.5;
}
.tab-header span:nth-child(3),
.item-wrap span:nth-child(3) {
  flex: 2.5;
}
.tab-header span:nth-child(4),
.item-wrap span:nth-child(4) {
  cursor: pointer;
=======
  padding-left: 12px;
}
.tab-header span:nth-child(1),
.item-wrap span:nth-child(1) {
  flex: 6;
}
.tab-header span:nth-child(2),
.item-wrap span:nth-child(2) {
  flex: 2.5;
}
.tab-header span:nth-child(3),
.item-wrap span:nth-child(3) {
>>>>>>> 5eb593b18684b75de6b3d89d6e23a36c718f0e97
  flex: 1.5;
}
.item-wrap span:nth-child(1) i {
  border: 1px solid #ccc;
  padding: 1px;
  margin-right: 8px;
}
.item-wrap b {
  font-weight: normal;
}
<<<<<<< HEAD
.item-wrap i {
  font-style: normal;
}
.item-wrap:hover {
  background: #e0e0e0;
}
.among {
  padding: 0 7px;
=======
.item-wrap i{
  font-style:normal
}
.item-wrap:hover{
  background: #e0e0e0
}
.among{
  padding: 0 7px
>>>>>>> 5eb593b18684b75de6b3d89d6e23a36c718f0e97
}
.maxright {
  margin-left: 21px;
}
.m-set-left {
  max-width: 200px;
  min-width: 200px;
  font-size: 14px;
  border-right: 1px solid #ccc;
}

.m-set-left span:nth-child(1) {
  margin-top: 35px;
  position: relative;
}
.m-set-left span {
  cursor: pointer;
  display: block;
  padding: 14px 0 14px 30px;
}
.color {
  background: #fafafa;
}
.m-set-left span i {
  position: absolute;
  width: 3px;
  height: 100%;
  background: #797a7c;
  right: 0;
  top: 0;
  border-radius: 5px 0 0 5px;
}
.m-set-left .topline {
  transform: translateY(0);
}
.m-set-left .bottomline {
  transform: translateY(100%);
}
.m-set-right {
  padding-left: 20px;
  flex: 1;
}
.m-set-right h2 {
  margin: 35px 0 20px 0;
}
.m-set-right .btn {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 0;
  font-size: 20px;
  outline: none;
  background: #3ec6b6;
  color: #fff;
  margin-bottom: 25px;
}

.modal p {
  padding-left: 78px;
  color: #ccc;
}
</style>