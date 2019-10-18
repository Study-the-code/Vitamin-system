<template>
  <div class="trdialog">
    <div class="form">
      <div class="title">
        <span>添加店铺</span>
        <span @click="close">X</span>
      </div>
      <div class="center">
        <h3>基本信息</h3>
        <RadioGroup v-model="disabledGroup">
          <Radio label="店铺透视查找">店铺透视查找</Radio>
          <Radio label="自定义店铺查找">自定义店铺查找</Radio>
        </RadioGroup>

        <div class="content">
          <div class="con" v-if="true">
            <label for>
              店铺名称：
              <span>从系统中快速查找品牌，获取基础信息</span>
              <Select style="width:200px">
                <Option></Option>
              </Select>
            </label>
          </div>
          <div class="con" v-if="false">
            <label for>
              店铺名称：
              <Input v-model="value" placeholder="请输入" style="width: 300px" />
            </label>
            <h3>关于店铺</h3>
            <RadioGroup>
              <Radio label="实体店">实体店</Radio>
              <Radio label="虚拟店">虚拟店</Radio>
            </RadioGroup>
          </div>
          <label for="店铺电话">
            店铺电话 ：
            <Input v-model="value" placeholder="请输入" style="width: 300px" />
          </label>
          <label for="楼层">
            楼层 ：
            <Select style="width:200px">
              <Option></Option>
            </Select>
          </label>
          <label for="所属分类">
            所属分类 ：
            <Select style="width:200px">
              <Option></Option>
            </Select>
          </label>
          <label for="位置">
            位置 ：
            <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
          </label>
          <label for="店铺设置">
            店铺设置
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline">+</Button>
            </Upload>
          </label>
          <label for="背景图">
            背景图
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline">+</Button>
            </Upload>
          </label>
          <label for="店铺描述">
            店铺描述
            <textarea name id cols="30" rows="10"></textarea>
          </label>
        </div>
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
      disabledGroup: Boolean,
      value: ""
    };
  },
  methods: {
    close() {
      this.$emit("flagMethod");
    },
    click(index) {
      console.log(index);
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
    .title {
      display: flex;
      height: 50px;
      line-height: 50px;
      font-size: 15px;
      span {
        &:nth-child(1) {
          flex: 7;
          margin-left: 10px;
        }
        &:nth-child(2) {
          flex: 3;
          margin-right: 10px;
        }
      }
    }
  }
  .center {
    height: auto;
    // background: lightblue;
  }
  .bottom {
    height: 100px;
    border-top: 1px #ccc solid;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>