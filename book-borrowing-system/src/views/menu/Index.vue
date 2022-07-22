<script  lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";
interface TabList {
  path: string;
  label: string;
  id: string;
}

export default defineComponent({
  setup() {
    const tabList: Array<TabList> = [
      {
        path: "/home",
        label: "首页",
        id: "1",
      },
      {
        path: "/home",
        label: "图书流程",
        id: "2",
      },
      {
        path: "/home",
        label: "图书流程",
        id: "2",
      },
      {
        path: "/personal",
        label: "个人中心",
        id: "3",
      },
   
    ];
    console.log(1);

    onBeforeMount(() => {
      console.log(2);
    });
    onMounted(() => {
      console.log(3);
    });
    console.log(4);

    return {
      tabList
    };
  },
});
</script>

<template>
  <div class="menu-warp">
    <div class="logo">
      <img src="" alt="">
    </div>
    <ul class="menu-item">
      <li v-for="item in tabList" :key="item.id">{{item.label}}</li>
    </ul>
  </div>
</template>

<style scoped  lang="scss">
//导航高度
$navHeight:70px;

.menu-warp{
  width: 100%;
  height: $navHeight;
  color: #000;
  display: flex;
  .logo{
    width: 10%;
    height: 100%;
    line-height: $navHeight;
    img{
        width: 50px;
        height: 50px;
           
    }
  }
  .menu-item{
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    li{
       font-size: 18px;
       height: 100%;
       line-height: $navHeight;
       cursor: pointer;
    }
  }

}
</style>
