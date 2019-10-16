<template>
  <div>
    <label for>
      手机号：
      <Input v-model="value" placeholder="请输入店铺名称" style="width: 200px" />
    </label>
    <label for>
      所属店铺：
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in selectcon" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </label>
    <label for>
      角色：
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in selectcon" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </label>
     <label for>
      顾客账号：
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in selectcon" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </label>
     <label for>
      状态：
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in selectcon" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </label>
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