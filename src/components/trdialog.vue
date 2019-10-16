<template>
  <div class="trdialog">
    <div class="form">
      <div class="title">
        <span>添加店铺</span>
        <span @click="close">X</span>
      </div>
      <div class="center">
        <h3>基本信息</h3>
        <RadioGroup>
          <Radio label="店铺透视查找">店铺透视查找</Radio>
          <Radio label="自定义店铺查找">自定义店铺查找</Radio>
        </RadioGroup>
        <div class="content"></div>
      </div>
      <div class="bottom">
        <Button type="primary">确定</Button>
        <Button style="margin-left: 8px">取消</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "trdialog",
  data() {
    return {
        
    };
  },
  methods: {
    close() {
      this.$emit("flagMethod");
    }
  }
};
</script>
<style lang="scss" >
.trdialog {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .form {
    width: 40%;
    background: #fff;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }
}
</style>