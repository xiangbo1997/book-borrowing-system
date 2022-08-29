<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { isvalidateMobile } from '@/utils/tool'

interface LoginForm{
 phone: string,
 code:string
}

interface ComputedRef{
 ():{ MSGINIT: string; MSGSCUCCESS: string; MSGTIME: number; }
}


const validatePhone = (rule: any, value: any, callback: any) => {
    if (isvalidateMobile(value)[0]) {
      callback(new Error(isvalidateMobile(value)[1]));
    } else {
      callback();
    }
  }
const validateCode = (rule: any, value: any, callback: any) => {
   if (value.length !== 4) {
     callback(new Error('请输入4位数的验证码'));
   } else {
     callback();
   }
 }

const msgText = ref<string>('1');
const msgTime = ref<number>(0);
const msgKey = ref<boolean>(false);
const loginForm = reactive<LoginForm> ({
        phone: '',
        code: '',
      });
const loginRules = reactive<FormRules>({
        phone: [
          { required: true, trigger: 'blur', validator: validatePhone },
        ],
        code: [
          { required: true, trigger: 'blur', validator: validateCode },
        ],
      })

const config = computed(() => {
  return {
        MSGINIT: '发送验证码',
        MSGSCUCCESS: '重新发送验证码',
        MSGTIME: 60,
      };
})
const handleLogin = ():void => {
}

const handleSend = () => {
       if (msgKey.value) return;
      msgText.value = msgTime.value + config.value.MSGSCUCCESS;
      msgKey.value = true;
      const time = setInterval(() => {
       msgTime.value -= 1;
        msgText.value = msgTime.value + config.value.MSGSCUCCESS;
        if (msgTime.value === 0) {
          msgTime.value = config.value.MSGTIME;
          msgText.value = config.value.MSGINIT;
          msgKey.value = false;
          clearInterval(time);
        }
      }, 1000);
 
}


 msgText.value = config.value.MSGINIT;
msgTime.value = config.value.MSGTIME;





</script>

<template>
<el-form class="loginForm"
           status-icon
           :rules="loginRules"
           ref="loginForm"
           :model="loginForm">
    <el-form-item prop="phone">
      <el-input size="small"
                v-model="loginForm.phone"
                auto-complete="off"
                placeholder="请输入手机号">
       <template #prefix class="userLoginIcon">
          <img src="@/assets/login/images/userIcon.png" alt="用户名" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="code" class="codeForm">
      <el-input size="small"
                v-model="loginForm.code"
                auto-complete="off"
                placeholder="输入验证码">
        <template #prefix
           class="userLoginIcon"><img src="@/assets/login/images/codeIcon.png" alt=""></template>
        <template #append>
          <span @click="handleSend"
                class="msg-text"
                :class="[{display:msgKey}]">{{msgText}}</span>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="loginButton">
      <el-button size="small"
                 type="primary"
                 @click.native.prevent="handleLogin"
                 class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>

</template>


<style scoped lang="scss">
.msg-text {
  width: auto;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
}
.msg-text.display {
  color: #ccc;
}
</style>
