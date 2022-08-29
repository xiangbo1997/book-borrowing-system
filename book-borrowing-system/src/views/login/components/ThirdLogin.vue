<script setup lang="ts">
import {reactive} from 'vue'

interface OtherImg {
 name:string,
 src: string

}

const channelList = reactive<OtherImg[]>([
        // eslint-disable-next-line
        { name: 'wechat', src: ('/src/assets/login/images/wxIcon.png') },
        // eslint-disable-next-line
        { name: 'dingding', src: ('/src/assets/login/images/ddIcon.png') },
        // eslint-disable-next-line
        { name: 'tencent', src: ('/src/assets/login/images/qqIcon.png') },
]
)
const handleClick = ():void => {

}
function getImageUrl(name) {
    // return new URL(`../assets/blogPhotos/${name}.jpg`, import.meta.url).href;
}

</script>

<template>
  <div class="thirdContainer">
    <div>
      <span>第三方登录</span>
      <div class="box" v-for="(item,index) in channelList" :key="'channel-'+index"
          @click="handleClick(item.name)" >
        <span class="container">
          <img :src="item.src" :alt="item.name">
        </span>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>







<style rel="stylesheet/scss" lang="scss" scoped>
.thirdContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &>div{
    display: flex;
    align-items: center;
    .box{
      margin: 0 10px;
      cursor: pointer;
    }
  }

}
</style>

