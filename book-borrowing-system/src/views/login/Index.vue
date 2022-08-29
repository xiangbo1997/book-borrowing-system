<script setup lang="ts">
import { computed, ref } from 'vue';
import UserLogin from './components/UserLogin.vue'
import ThirdLogin from './components/ThirdLogin.vue'
import CodeLogin from './components/CodeLogin.vue'
const basePath = ref<string>('http://localhost:5173/image')
const bgImg = ref<string>('/bg1.jpeg')
const activeName = ref<string>('userLogin')


const bgcss = computed(() => {
   return {'--backImg':`url(${basePath.value}${bgImg.value})`}
  
 })



</script>

<template>
  <div class="login-container">
    <div class="login">
      <img src="@/assets/login/logo.png" alt="" width="224" />
    </div>
    <div class="loginMain">
      <el-tabs v-model="activeName">
        <el-tab-pane label="密码登录" name="userLogin">
          <user-login></user-login>
        </el-tab-pane>
        <el-tab-pane label="短信登录" name="codeLogin">
          <code-login></code-login>
        </el-tab-pane>
      </el-tabs>
        <third-login ></third-login>
    </div>

    <!-- <div class="is-auth" v-loading="code" v-show="code"></div> -->

  </div>

</template>


<style scoped lang="scss">

.login-container {
  width: 100%;
  height: 100%;
  background: url("../../assets/login/images/bg.png") top left
    no-repeat;
  background-size: cover;
  color: #9b9b9b;
  font-size: 16px;
  letter-spacing: 2px;
  .login {
    text-align: left;
    img {
      padding: 30px 0 0 60px;
    }
  }
  .loginMain {
    width: 530px;
    height: 580px;
    margin: 100px 0 0 100px;
    ::v-deep .el-tabs__header {
      border: none;
      .el-tabs__item {
        &.is-active {
          background-color: transparent;
        }
      }
    }
    ::v-deep .el-tabs__nav {
      width: 100%;
      .el-tabs__item {
        font-size: 30px;
        width: 33%;
        height: 54px;
      }
      .el-tabs__active-bar {
        height: 4px;
      }
    }
    ::v-deep .el-form-item {
      margin-bottom: 48px;
      &.codeForm {
        margin-bottom: 30px;
      }
      &.loginButton {
        margin-bottom: 24px;
      }
      &:first-of-type {
        margin-top: 48px;
      }
      .el-form-item__error {
        line-height: 2;
      }
      .el-input__wrapper{
          height: 54px;
        border-radius: 25px;
        background-color: #f4f6fd;
        border: 1px solid #edf0ff;
        // padding-left: 90px;
        // padding-right: 70px;
 
      }
        .el-input__inner {
          height: 54px;
             background-color: #f4f6fd;
        color: #9b9b9b;
        font-size: 20px;
        width: 100%;
        border-radius: 25px;
        &::-webkit-input-placeholder {
          color: #9b9b9b;
        }
      }
      .authCode{
    
         width: auto;
    
      }
      input:-internal-autofill-selected {
         background-color: #f4f6fd;
      }

      .el-input__prefix {
        width: 90px;
        .el-input__prefix-inner{
          width: 100%;
        }
      }
      .el-input__suffix {
        right: 10px;
      }
    
      .userLoginIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        
      }
      .el-input-group {
        .el-input__inner {
          width: 95%;
        }
        .el-input-group__append {
          min-width: 90px;
          border: none;
          border: 1px solid #e3c9cb;
          border-radius: 0;
        }
      }
      .el-checkbox__label {
        font-size: 16px;
        color: #9b9b9b;
      }
      .forgetPassword {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        span {
          cursor: pointer;
          &:hover {
            color: $app-tabnav-hover-color;
          }
        }
      }
    }
    ::v-deep .login-submit {
      width: 100%;
      height: 60px;
      border-radius: 30px;
      background-color: #336fff;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      &:hover {
        background-color: $app-createblank-buttonbg;
      }
    }
  }

  .is-auth {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

}
</style>
