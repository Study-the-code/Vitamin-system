<template>
  <div class="statistics">
    <div>
        概况
    </div>
    <div>
        数据统计 
        <div class="m-right-btn">
            <span>今日</span>
            <span>本周</span>
            <span>本月</span>
        </div>
    </div>
    <p class="m-antv" v-for="item in 3" :key="item">
      <Antv :oneId="oneId"/>
    </p>
       
         
  </div>
</template>

<script>
import Antv from "@/components/antv/index.vue";
export default {
 name:"statistics",
 data(){
   return {
     oneId:"one",
     data:3
   }
 },
 components:{
   Antv
 }
}
</script>

<style>
  .statistics > div{
      padding: 20px 0 20px 15px;
      background: #fff;
      font-size: 16px;
      margin:10px 0 16px 0;
  }
  .m-right-btn {
   float: right;
   margin-right: 50px;
  }
  .m-right-btn span{
    margin-left: 8px;
  }
 .statistics .m-vntv {
    width: 500px;
    height: 300px;
  }
</style>