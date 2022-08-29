<script setup lang="ts">
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Avatar,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const isCollapse = ref(false)

</script>

<template>
  <el-menu
       default-active="1"
       class="el-menu-vertical-demo"
       @open="handleOpen"
       @close="handleClose"
       :collapse="isCollapse"
        >
          <el-menu-item index="1">
              <el-icon><location /></el-icon>
              <span>首页</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>图书流程</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><avatar /></el-icon>
            <span>个人中心</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon><setting /></el-icon>
            <span>运维管理</span>
          </el-menu-item>
         
  </el-menu>


</template>


<style scoped lang="scss">
.el-menu-vertical-demo{
 // font-size: 18px;
 .el-menu-item{
  font-size: 20px;
 }

}
</style>
