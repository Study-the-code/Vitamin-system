<template>
  <div class="detail">
    <div class="title">
      <img :src="detailList.r_logo_img" alt />
      <span>{{detailList.name}}</span>
    </div>
    <div class="content">
      <div class="left">
        <ul v-for="(item,index) in data" :key="index">
          <li @click="tab(index)" :class="index===current?'active':''">{{item.title}}</li>
        </ul>
      </div>
      <div class="right">
        <div class="name">{{data[current].title}}</div>
        <div class="con" v-if="current==0">
          <!-- <ul v-for="it in content" :key="it.key"> -->
          <!-- <h3>{{it.name}}</h3> -->
          <h3>店铺名称</h3>
          <span>{{detailList.floor_name}}</span>
          <h3>店铺电话</h3>
          <h3>楼层</h3>
          <span>{{detailList.address}}</span>
          <h3>所属分类</h3>
          <ul v-for="(it,index) in detailList.category_data" :key="index" class="description">
            <span>{{it}}</span>
          </ul>
          <h3>位置</h3>
          <span>{{detailList.address}}</span>
          <h3>LOGO</h3>
          <span>
            <img :src="detailList.r_logo_img" alt :style="{width:'100px',height:'100px'}"/>
          </span>
          <h3>背景图</h3>
          <h3>店铺描述</h3>
          <span>{{detailList.r_description}}</span>
          <!-- <button>更新基本信息</button> -->
          <Button type="primary">更新基本信息</Button>
          <!-- </ul> -->
        </div>
        <div class="con" v-else-if="current==1">
          <ul class="des">
            <li>
              {{
              detailList.matching_info
              }}
            </li>
            <li>修改</li>
          </ul>
        </div>
        <div class="con" v-else-if="current==2">
          <ul class="config">
            <span>
              <p>{{detailList.e_store_info.titile}}</p>
              <p>修改</p>
            </span>
            <li v-for="(its,index) in detailList.e_store_info.titile_data" :key="index">{{its}}</li>
          </ul>
        </div>
        <div class="con" v-else-if="current==3">
          <!-- <div v-for="(it1,index) in detailList.team_list" :key="index">
                <p></p>  
          </div>-->
          <h3>{{detailList.team_list.building}}</h3>
          <ul v-for="(it1,ind1) in detailList.team_list.building_data" :key="ind1">
            <li>{{it1}}</li>
          </ul>
          <h3>{{detailList.team_list.shopping}}</h3>
          <ul v-for="(it2) in detailList.team_list.shopping_data" :key="it2">
            <li>{{it2}}</li>
          </ul>
        </div>
        <div class="con" v-else-if="current==4">
          <ul>
            <li>删除店铺，店铺信息将被移除，不可恢复，删除店铺前，请确认e店铺已关闭</li>
          </ul>

          <Button type="error">删除店铺</Button>
        </div>
        <div class="con" v-else-if="current==5">
          <ul v-for="k in hisorylist" :key="k.time">
            <li>
              <span>{{k.title}}</span>
              <span>{{k.platform}}</span>
              <span>{{k.time}}</span>
            </li>
            <li :style="{color:'#ccc',fontSize:'12px'}">{{k.content}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import http from "@/api/index";
export default {
  name: "detail",
  data() {
    return {
      detailList: {},
      data: [
        {
          title: "基本信息",
          key: "title"
        },
        {
          title: "匹配配置",
          key: "msg"
        },
        {
          title: "e商店配置",
          key: "shop"
        },
        {
          title: "团队",
          key: "team"
        },
        {
          title: "店铺设置",
          key: "config"
        },
        {
          title: "操作历史",
          key: "history"
        }
      ],
      content: [
        {
          name: "店铺名称",
          key: "names"
        },
        {
          name: "店铺电话",
          key: "phone"
        },
        {
          name: "楼层",
          key: "floor"
        },
        {
          name: "所属分类",
          key: "cluster"
        },
        {
          name: "位置",
          key: "position"
        },
        {
          name: "LOGO",
          key: "logo"
        },
        {
          name: "背景图",
          key: "picture"
        },
        {
          name: "店铺描述",
          key: "despriction"
        }
      ],
      current: 0,
      hisorylist: []
    };
  },
  methods: {
    async _getdetail(id) {
      const result = await http.getAllshopdetail(id);

      const { base_info } = result.data;
      this.detailList = base_info;
      const {}=this.detailList
    
      return result;
    },
    tab(index) {
      this.current = index;
      const id = this.$route.params.id;
      if (this.current === 5) {
       
        this._getHistory(id);
      }
    },
    async _getHistory(id) {
      const result = await http.getHistory(id);
     
      const { list } = result.data;
      this.hisorylist = list;
      return result;
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this._getdetail(id);
  
  }
};
</script>
<style lang="scss" >
.detail {
  font-size: 15px;
  height: 100%;
  width: 100%;
}
.title {
  height: 100px;
  background: #f8f8f8;
  vertical-align: middle;
  line-height: 100px;

  img {
    width: 60px;
    height: 60px;
  }
}
.content {
  width: 100%;
  height: 100%;
}
.left {
  width: 20%;
  height: 100%;

  float: left;
  ul li {
    height: 50px;
    line-height: 50px;
    text-align: left;
    cursor: pointer;
  }
  .active {
    color: #3ec6b6;
    border-right: 5px #3ec6b6 solid;
  }
}
.right {
  width: 80%;
  float: right;
  height: 100%;
  .name {
    font-size: 18px;
    margin: 15px 6px;
  }
  .con {
    width: 100%;
    margin: 10px;
  }
  h3 {
    height: 50px;
    font-size: 17px;
  }
  span {
    display: inline-block;
    height: 30px;
  }
  .description span {
    // float: left;
    height: 20px;
    width: 50px;
    border: 1px #ccc solid;
    margin: 10px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    // display: inline-block;
  }
  //   button {
  //     background: #3ec6b6;
  //     color: #fff;
  //     height: 40px;
  //     width: 150px;
  //   }
  .des {
    display: flex;
    li {
      border-bottom: 0.5px #ccc solid;
      &:nth-child(1) {
        flex: 8;
      }
      &:nth-child(2) {
        flex: 2;
        color: #3ec6b6;
      }
    }
  }
  .config {
    span {
      display: flex;
      p {
        &:nth-child(1) {
          flex: 3;
        }
        &:nth-child(2) {
          flex: 7;
          text-align: right;
          margin-right: 80px;
          color: #3ec6b6;
        }
      }
    }
  }
}
</style>