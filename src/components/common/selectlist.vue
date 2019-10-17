<template>

  <div class="ant-row">
    
    <div class="ant-form-item">
      <label for>
      手机号：
      <Input v-model="value" placeholder="请输入店铺名称" style="width: 200px" />
    </label>
    </div>
     <div class="ant-form-item">
    <label for>
      所属店铺：
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in selectcon" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </label>
    </div>
     <div class="ant-form-item">
    <label for>
      角色：
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in selectcon" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </label>
     </div>
      <div class="ant-form-item">
     <label for>
      顾客账号：
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in selectcon" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </label>
     </div>
      <div class="ant-form-item">
     <label for>
      状态：
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in selectcon" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </label>
     </div>
    <div class="btn_box">
      <div class="left"></div>
      <div class="right">
        <Button type="primary">查询</Button>
        <Button>重置</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selectcon",'model1']
};
</script>
<style>
  .btn_box{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .select{
        background: #fff;
    height: 200px;
    margin-top: 24px;
    padding: 24px;
    position: relative;
  }
.ant-row {
    position: relative;
    height: auto;
    zoom: 1;
    display: block;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}

.ant-form-item {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    margin: 0 0 24px;
    vertical-align: top;
    margin-right: 15px;
    }
</style>