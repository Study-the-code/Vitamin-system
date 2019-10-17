<template>
    <div>
      <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    </div>
</template>
<script>
export default {
    name:'setting'
}
</script>
<style lang="scss" scoped>

</style>