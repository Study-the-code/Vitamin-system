<template>
  <div class="layout-content">
         <!-- <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb> -->
    <div class="breadCrumbs ant-breadcrumb">
     
    </div>
    <div class="content-action">
      <div class="permission-list-container">
        <div class="header">
          <span class="size-16">导购管理</span>
          <div class="nav size-14">
            <span class="color-light border-light">导购管理</span>
            <span>邀请中</span>
            <span>角色描述</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="form-container">
       <div class="ant-row">
           <div class="ant-row ant-form-item">
               手机号:
           <Input v-model="value2" placeholder="default size" class="ddd"/>
           </div>
           
        
       </div>
      </div>
     
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    value2: '',
      data: [
       
        {
          value: "jiangsu",
          label: "江苏",
         
        },
         {
          value: "beijign",
          label: "北京",
         
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped >
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
}
.layout-main .layout-content .content-action {
  padding: 0 24px;
}
.permission-list-container {
  margin-top: 20px;
  padding-bottom: 50px;
}
.permission-list-container .header {
  background: #fff;
  height: 130px;
  padding: 24px 0 0 24px;
  position: relative;
  border-bottom: 2px solid #f5f5f5;
}
.size-16 {
  font-size: 16px;
}
.permission-list-container .header .nav {
  position: absolute;
  bottom: 0;
}

.size-14 {
  font-size: 14px;
}
.permission-list-container .header {
  float: none;
}
.permission-list-container .header .nav span {
  margin-right: 48px;
  height: 40px;
  display: inline-block;
  line-height: 40px;
  cursor: pointer;
}

.permission-list-container .border-light {
  border-bottom: 2px solid #3ec6b6;
}
.color-light {
  color: #3ec6b6;
}
.inpu {
  width: 200px;
}
// .form-container{
//     display: flex;
//     align-items:center;
//     padding: 0 15px;
// }
.permission-list-container .form-container {
    background: #fff;
    height: 200px;
    margin-top: 24px;
    padding: 24px;
    position: relative;
}
.ddd{
    width: 200px;
}
</style>