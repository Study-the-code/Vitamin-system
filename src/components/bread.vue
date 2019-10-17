<template>
  <Breadcrumb :style="{margin: '24px 0'}">
    <!-- <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Components</BreadcrumbItem>
    <BreadcrumbItem>Layout</BreadcrumbItem>-->
    <BreadcrumbItem v-for="(item,index) in levelList" :key="index">
      <span
        v-if="item.redirect==='noRedirect'||index==levelList.length-1"
        class="no-redirect"
      >{{ item.meta.title }}</span>
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith("/redirect/")) {
        return;
      }
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      console.log(this.$route.matched,'--------')
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      const first = matched[0];
        console.log(matched,'----------')
      if (!this.isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "Dashboard" } }].concat(
          matched
        );
      }

      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    }
  }
};
</script>
