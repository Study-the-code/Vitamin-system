
<template>
<<<<<<< HEAD
  <section class="admin-layout-container">
    <div class="layout">
      <Layout>
        <Sider
          ref="side1"
          hide-trigger
          collapsible
          :collapsed-width="78"
          v-model="isCollapsed"
          style="background: rgb(73, 80, 96);"
        >
          <div class="logo">
            <div v-if="!isCollapsed">
              <img src="https://img.weitaming.com/weitaming/partner/icon/icon-wtm-logo.png" />
              <b></b>
              <span>维他命后台管理系统</span>
            </div>
            <img src="https://img.weitaming.com/weitaming/partner/icon/icon-wtm-logo.png" v-else />
          </div>
          <Menu
            ref="side_menu"
            :active-name="activeMenuName"
            :open-names="openMenuName"
            theme="dark"
            width="auto"
            :class="menuitemClasses"
            @on-select="choosedMenu"
            v-if="!isCollapsed"
          >
            <template v-for="(menu,menu_index) in menus">
              <Submenu :name="menu.name" v-if="menu.children" :key="menu_index">
                <template slot="title">
                  <Icon :size="20" :type="menu.icon"></Icon>
                  {{menu.title}}
                </template>
                <MenuItem
                  :name="child.name"
                  v-for="(child ,child_index) in menu.children"
                  :key="child_index"
                >
                  <Icon :size="20" :type="child.icon"></Icon>
                  {{child.title}}
                </MenuItem>
              </Submenu>
              <MenuItem
                :name="menu.name"
                v-if="!menu.children && menu.showInMenus"
                :key="menu.name"
              >
                <Icon :size="20" :type="menu.icon"></Icon>
                {{menu.title}}
              </MenuItem>
            </template>
          </Menu>
          <div class="dropdown-wrap">
            <template v-for="(menu,menu_index) in menus">
              <Dropdown
                transfer
                placement="right-start"
                v-if="menu.children"
                @on-click="dropdownClick"
                :key="menu_index"
              >
                <Button style="width: 85px;margin-left: -5px;padding:10px 0;" type="text">
                  <Icon :size="25" color="#fff" :type="menu.icon"></Icon>
                </Button>
                <DropdownMenu style="width: 200px;" slot="list">
                  <template v-for="(child, i) in menu.children">
                    <DropdownItem :name="child.name" :key="i">
                      <div style="display:flex;align-items:center;">
                        <Icon :size="16" :type="child.icon"></Icon>
                        <span style="padding-left:10px;">{{ child.title }}</span>
                      </div>
                    </DropdownItem>
                  </template>
                </DropdownMenu>
              </Dropdown>
              <Dropdown placement="right-start" :key="menu.title">
                <Button style="width: 85px;margin-left: -5px;padding:10px 0;" type="text">
                  <Icon :size="25" color="#fff" :type="menu.icon"></Icon>
                </Button>
                <DropdownMenu style="width: 200px;" slot="list">
                  <DropdownItem :name="menu.name">
                    <div style="display:flex;align-items:center;">
                      <Icon :size="16" :type="menu.icon"></Icon>
                      <span style="padding-left:10px;">{{ menu.title }}</span>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </template>
          </div>
        </Sider>
        <Layout>
          <Header
            :style="{position: 'fixed',
                        width: isCollapsed?'calc(100% - 78px)':'calc(100% - 200px)',
                        padding: 0,
                        display:'flex',
                        flexDirection:'column',
                        zIndex:20
                    }"
            class="layout-header-bar"
          >
            <div
              style="
                        display:flex;
                        align-tems:center;
                        justify-content:space-between;
                        position: relative;
                        height:60px;
                        line-height: 60px;
                        z-index: 1;
                        box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);"
            >
              <div style="display:flex;align-items:center;">
                <Icon
                  @click.native="collapsedSider"
                  :class="rotateIcon"
                  :style="{margin: '0 20px 0'}"
                  type="md-menu"
                  size="24"
                ></Icon>
                <span style="font-size:18px;font-weight:bold">后台管理系统</span>
              </div>
              <div style="margin-right:20px">
                <!-- <Button type="text" icon="person" size="large">个人中心</Button>
                <Button type="text" icon="android-notifications" size="large" @click="clickNotice">消息通知</Button>-->
                <Button type="text" icon="android-exit" size="large" @click="quit">退出系统</Button>
              </div>
            </div>
            <div
              style="display: flex;
                                position: relative;
                                padding-left:10px;
                                height: 40px;
                                background: #f5f7f9;
                                align-items: center;
                                box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);"
            >
              <template>div</template>
            </div>
          </Header>
          <Content
            :style="{
                    height: 'calc(100% - 100px)',
                    position: 'absolute',
                    top: '100px',
                    overflow: 'auto',
                    padding: '10px',
                    width:isCollapsed?'calc(100% - 78px)':'calc(100% - 200px)'
                    }"
          >
            <!--保存组件状态到内存，避免重新渲染-->
            <keep-alive>
              <router-view />
            </keep-alive>
          </Content>
        </Layout>
      </Layout>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      isCollapsed: false,
      // ------------------------------  菜单操作开始  --------------------------------
      openMenuName: [],
      menus: [
        {
          title: "首页",
          num: 1,
          name: "admin",
          icon: "home",
          href: "/admin",
          closable: false,
          showInTags: true,
          showInMenus: true,
          choosed: true
        },
        {
          title: "概况",
          name: "course-manage",
          icon: "ios-bookmarks",
          href: "/admin",
          closable: false,
          showInTags: true,
          showInMenus: true,
          choosed: true
        },
        {
          title: "店铺",
          name: "teacher-manage",
          icon: "ios-bookmarks",
          children: [
            {
              title: "店铺管理",
              name: "classroom-manage",
              icon: "erlenmeyer-flask",
              href: "/admin/classroom",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            },
              {
              title: "专柜导航管理",
              name: "classroom-manage",
              icon: "erlenmeyer-flask",
              href: "/admin/classroom",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            }
          ]
        },
        {
          title: "页面",
          name: "student-manage",
          icon: "university",
          children: [
            {
              title: "页面管理",
              name: "classroom-manage",
              icon: "erlenmeyer-flask",
              href: "/admin/classroom",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            }
          ]
        },
        {
          title: "订单",
          name: "class-manage-parent",
          icon: "easel",
          children: [
            {
              title: "订单管理",
              name: "classroom-manage",
              icon: "erlenmeyer-flask",
              href: "/admin/classroom",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            },
             {
              title: "店铺订单",
              name: "classroom-manage",
              icon: "erlenmeyer-flask",
              href: "/admin/classroom",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            },
            {
              title: "店铺订单",
              name: "classroom-manage",
              icon: "erlenmeyer-flask",
              href: "/admin/classroom",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            }
          ]
        },
        {
          title: "团队",
          name: "apk-manage",
          icon: "social-android",
         children: [
            {
              title: "导购管理",
              name: "classroom-manage",
              icon: "erlenmeyer-flask",
              href: "/admin/classroom",
              closable: true,
              showInTags: false,
              showInMenus: true,
              choosed: false
            }
          ]
        },
        {
          title: "设置",
          name: "setting",
          icon: "gear-a",
          href: "/admin/setting",
          closable: true,
          showInTags: false,
          showInMenus: true,
          choosed: false
        }
      ]
      // ------------------------------  菜单操作结束  --------------------------------
    };
  },
  computed: {
    ...mapState({
      user: state => state.user
    }),
    // 筛选menus中选中的menu
    tags() {
      let tags = [];
      // 将menus中showInTags=true的标签放到tags数组中
      this.menus.forEach(menu => {
        if (menu.showInTags) {
          tags.push(menu);
        } else if (menu.children) {
          menu.children.forEach(child => {
            if (child.showInTags) {
              tags.push(child);
            }
          });
        }
      });
      console.log("tags=>", tags);

      //标签数组排序，从小到到
      tags.sort((a, b) => {
        return a.num - b.num;
      });
      return tags;
    },
=======
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
              <Icon type="ios-paper"></Icon>订单
            </template>
            <MenuItem name="2-1">店铺订单</MenuItem>
            <MenuItem name="2-2">退款管理</MenuItem>
          </Submenu>
           <Submenu name="3">
            <template slot="title">
              <Icon type="ios-briefcase-outline" />商品
            </template>
            <MenuItem name="3-1">商品管理</MenuItem>
            <MenuItem name="3-2">库存管理</MenuItem>
            <MenuItem name="3-3">规格值管理</MenuItem>
          </Submenu>
           <Submenu name="4">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>营销
            </template>
            <MenuItem name="4-1">店内促销</MenuItem>
          </Submenu>
           <Submenu name="5">
            <template slot="title">
              <Icon type="ios-people"></Icon>团队
            </template>
            <MenuItem name="5-1">导购管理</MenuItem>
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
>>>>>>> 73a0c17163fc0f457456b4668c927ce22dd817e4
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
<<<<<<< HEAD
    }
  },
  // ------------------------------  菜单操作开始  --------------------------------
  //刷新页面之后保存并选中最后一次菜单和标签
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      let activeMenuName = localStorage.activeMenuName;
      vm.activeMenuName = activeMenuName;

      let tags_last_num = vm.tags[vm.tags.length - 1].num;

      if (activeMenuName && activeMenuName.length != 0) {
        vm.menus.forEach(_menu => {
          if (activeMenuName == _menu.name) {
            _menu.choosed = true;
            _menu.showInTags = true;
            _menu.num = tags_last_num + 1;
          } else if (_menu.children) {
            _menu.children.forEach(child => {
              if (activeMenuName == child.name) {
                child.choosed = true;
                child.showInTags = true;
                child.num = tags_last_num + 1;
                vm.openMenuName = [_menu.name];
              }
            });
          } else {
            // 排除首页
            if (_menu.name != "admin") {
              _menu.choosed = false;
              _menu.showInTags = false;
            } else {
              _menu.choosed = false;
            }
          }
        });
      }
      vm.$nextTick(() => {
        vm.$refs.side_menu.updateOpened();
        vm.$refs.side_menu.updateActiveName();
      });
    });
  },
  // ------------------------------  菜单操作结束  --------------------------------
  methods: {
    ...mapActions(["logout"]),
    quit() {
      this.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("activeMenuName");
      this.$router.push("/login");
    },
    clickNotice() {
      this.choosedMenu("notice");
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    // ------------------------------  菜单操作开始  --------------------------------
    closeTag(event, name) {
      // 判断该标签是否是选中状态
      // 如果是那么就要设置标签数组中最后一个标签成选中状态
      // 如果否那么就直接删除就好
      let is_choosed = false;
      this.menus.forEach((menu, _index) => {
        if (menu.name == name) {
          is_choosed = menu.choosed;
          menu.showInTags = false;
        } else if (menu.children) {
          menu.children.forEach(child => {
            if (child.name == name) {
              is_choosed = child.choosed;
              child.showInTags = false;
            }
          });
        }
      });
      // 关闭标签并选中tags中最后一个标签高亮
      if (is_choosed) {
        let last_tag = this.tags[this.tags.length - 1];
        last_tag.choosed = true;
        this.$router.push(last_tag.href);
        this.activeMenuName = last_tag.name;
        localStorage.activeMenuName = this.activeMenuName;
      }
    },
    clickTag(tag) {
      this.tags.forEach(_tag => {
        if (_tag.name == tag.name) {
          _tag.choosed = true;
        } else {
          _tag.choosed = false;
        }
      });
      // 设置菜单选中name
      this.activeMenuName = tag.name;
      localStorage.activeMenuName = this.activeMenuName;
      // 刷新菜单
      this.$nextTick(() => {
        if (this.$refs.side_menu) {
          this.$refs.side_menu.updateActiveName();
        }
      });
      //点击tab跳转
      this.$router.push(`${tag.href}`);
    },
    choosedMenu(name) {
      // 获取标签数组最后一个元素的num
      let tags_last_num = this.tags[this.tags.length - 1].num;
      // 设置选中菜单name
      this.activeMenuName = name;
      localStorage.activeMenuName = this.activeMenuName;
      let if_tab = false;

      //根据name查找对应的菜单对象
      let menu = null;
      this.menus.forEach(_menu => {
        if (_menu.name == name) {
          // 只有不在tags数组中的元素才能设置num
          if (!_menu.showInTags) {
            _menu.num = tags_last_num + 1;
          }
          menu = _menu;
          _menu.showInTags = true;
          _menu.choosed = true;
        } else if (_menu.children) {
          _menu.children.forEach(child => {
            if (child.name == name) {
              // 只有不在tags数组中的元素才能设置num
              if (!_menu.showInTags) {
                child.num = tags_last_num + 1;
              }
              menu = child;
              child.showInTags = true;
              child.choosed = true;
            } else {
              child.choosed = false;
            }
          });
        } else {
          _menu.choosed = false;
        }
      });
      this.$router.push(`${menu.href}`);
    },
    dropdownClick(name) {
      this.choosedMenu(name);
    }
    // ------------------------------  菜单操作结束  --------------------------------
  }
};
</script>

<style lang="scss" scoped>
.ivu-menu::-webkit-scrollbar { width: 0 !important }
.logo img {
  width: 30px;
}
.logo div b {
  padding: 0 5px;
}
.logo div {
  font-size: 15px;
  display: flex;
  align-items: center;
}
.ivu-menu{
     overflow-x: hidden;
     overflow-y: scroll;
}
.ivu-layout.ivu-layout-has-sider {
  height: 100%;
}
.ivu-menu-item{
    width: 100%;
   
}
.ivu-layout-sider {
  background: #fff;
}
.ivu-layout-header {
  height: 100px;
  line-height: 18px;
}
.ivu-menu {
  height: 100%;
}
.admin-layout-container {
  position: absolute;
  width: 100%;
  height: 100%;
  .layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    height: 100%;
    & .dropdown-wrap {
      background: rgb(73, 80, 96);
    }
    & .logo {
      background: #4c364f80;
      color: #fff;
      border-bottom: 1px solid #363e4f;
      width: auto;
      height: 60px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  .layout-header-bar {
    background: #fff;
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
=======
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
>>>>>>> 73a0c17163fc0f457456b4668c927ce22dd817e4
}
</style>