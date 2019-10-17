<template>
  <div class="home">
    <div class="com">
      <span>你好，方超管</span>
      <span>看看你店里发生了什么</span>
      <span>没有内容...快去推广你的店铺吧~</span>
    </div>
    <div class="wrap">
      <div class="icon">
        <div>绑定您的账号</div>
        <div>
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4223115080,1535487132&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div>为了使用商户端全部功能，请扫描二维码，前往“国芳官微商城”，绑定你的账号</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.home {
  font-size: 14px;
}
.com {
  margin: 30px;
}
.com span {
  display: block;
  line-height: 30px;
}
.com span:nth-child(1) {
  font-size: 18px;
  padding: 10px 0;
}
.home .icon {
  width: 165px;
  text-align: center;
  margin: 20px auto;
}
.wrap {
  width: 210px;
  height: 320px;
   margin-right: 100px;
  float: right;
  background: #fff;
}
.icon div:nth-child(2) img {
  width: 165px;
}
</style>>
 
