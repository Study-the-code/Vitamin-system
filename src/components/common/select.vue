<template>
  <div class="shop">
    <label for>
      店铺名：
      <Input v-model="value" placeholder="请输入店铺名称" style="width: 300px" />
    </label>
    <label for>
      楼层
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in selectcon" :value="item.name" :key="item.name">{{ item.name }}</Option>
      </Select>
    </label>
    <label for>
      分类：
      <Select v-model="model1" style="width:200px">
        <Option
          v-for="item in selectcon"
          :value="item.description"
          :key="item.id"
        >{{ item.description }}</Option>
      </Select>
    </label>

    <Button type="primary">查询</Button>
    <Button>重置</Button>
  </div>
</template>
<script>
export default {
  props: ["selectcon", "model1", "value"]
};
</script>
<style lang="scss">

</style>