<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
#app,
.layout,
.ivu-layout {
  width:100%;
  height: 100%;
}
.ivu-layout-sider-children{
 height: 100%;
   overflow:hidden;
}
.menu-item{
  height:90%;
  overflow-y: scroll;
}
.layout .ivu-menuivu-layout-sider-children {
  background: #fff;
}
.ivu-menu-light{
  height: 100%;
}

</style>
