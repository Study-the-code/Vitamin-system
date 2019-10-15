<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <div class="logo">
              <img src="https://img.weitaming.com/weitaming/partner/icon/icon-wtm-logo.png!b" alt="">
              <span>维他命商家后台</span>
              </div>
              <MenuItem name="1-1">
                        <Icon Icon type="ios-home-outline"></Icon>
                        <span>
                            <router-link to="/">首页</router-link>
                        </span>
                    </MenuItem>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-keypad"/>店铺
            </template>
            <MenuItem name="1-1">
              <router-link to="/home/shop">店铺管理</router-link>
            </MenuItem>
          </Submenu>
            <Submenu name="2">
            <template slot="title">
              <Icon type="ios-paper"></Icon>页面
            </template>
            <MenuItem name="2-1">
              <router-link to="/home/management">页面管理</router-link>
            </MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-paper"></Icon>订单
            </template>
            <MenuItem name="3-1">店铺订单</MenuItem>
            <MenuItem name="3-2">退款管理</MenuItem>
          </Submenu>
          
           <Submenu name="4">
            <template slot="title">
              <Icon type="ios-briefcase-outline" />商品
            </template>
            <MenuItem name="4-1">商品管理</MenuItem>
            <MenuItem name="4-2">库存管理</MenuItem>
            <MenuItem name="4-3">规格值管理</MenuItem>
          </Submenu>
           <Submenu name="5">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>营销
            </template>
            <MenuItem name="5-1">店内促销</MenuItem>
          </Submenu>
           <Submenu name="6">
            <template slot="title">
              <Icon type="ios-people"></Icon>团队
            </template>
              
            <MenuItem name="6-1">
            <router-link to="/home/staff">员工管理</router-link>
            </MenuItem>
            <MenuItem name="6-2">
                <router-link to="/home/stafflist">导购管理</router-link>
            </MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
        </Header>
        <Breadcrumb :style="{margin: '20px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    goups() {
      console.log("123");
    }
  }
};
</script>
<style lang='scss' scoped>
.logo{
       height: 64px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img{
            width: 32px;
    margin-left: 30px;
    margin-right: 20px;
    }
    span{
            font-size: 16px;
    font-weight: 600;

    }
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>