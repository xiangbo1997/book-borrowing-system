
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { View, Hide } from '@element-plus/icons-vue'
interface UserInfo {
  username: string,
  password: string,
  authCode?: string
}

interface Provcode {
    isShowCode: boolean,
    image: string,
    isLoadImage: boolean,
    authCodeKey: string
}

interface LoginStatus{
  automatically: boolean,
  remember:boolean
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<UserInfo>({
  username: 'Hello',
  password:'',
  authCode: ''
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 12, message: '用户名长度应为5-12', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8,  message: '密码至少为8位', trigger: 'blur' },
  ],
  authCode: [
    { required: false, message: '请输入验证码', trigger: 'blur' },
  ],

})


const provcode = reactive<Provcode>({
      isShowCode: true,
      image: "",
      isLoadImage: false,
      authCodeKey: ""
    })

const checkedForm: LoginStatus = reactive({
  automatically: false,
  remember: false,
})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}



const passwordType = ref<string> ('password')

const showPassword = () => {
  passwordType.value = passwordType.value === 'text'? 'password': 'text'
}
</script>
<template>
<el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    class="loginForm"
    :size="formSize"
    status-icon
  >
    <el-form-item prop="username">
        <el-input size="small" v-model="ruleForm.username" ref="username" clearable placeholder="请输入用户名">
        <template #prefix class="userLoginIcon">
          <img src="@/assets/login/images/userIcon.png" alt="用户名" />
        </template>
      </el-input>
    </el-form-item>
     <el-form-item prop="password" class="reverse-icon"> 
      <el-input size="small" clearable :type="passwordType" v-model="ruleForm.password" placeholder="请输入密码">
        <template class="el-icon-view el-input__icon" #suffix >
           <el-icon :size="20" @click="showPassword">
            <View v-if="passwordType === 'password'"/>
            <Hide v-else/>
           </el-icon>
        </template>
        <template #prefix  >
          <img src="@/assets/login/images/passwordIcon.png" alt="密码" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="authCode" class="login-code" v-show="provcode.isShowCode">
      <el-input size="small" clearable v-model="ruleForm.authCode" placeholder="请输入验证码" class="authCode">
        <template #prefix class="userLoginIcon">
          <img src="@/assets/login/images/codeIcon.png" alt="">
        </template>
      </el-input>
      <img :src="provcode.image" class="login-code-iner" alt="验证码" />
    </el-form-item>
    <el-form-item>
      <div class="forgetPassword">
        <div>
          <el-checkbox v-model="checkedForm.automatically" >自动登录</el-checkbox>
          <el-checkbox v-model="checkedForm.remember" >记住密码</el-checkbox>
        </div>
        <span>忘记密码?</span>
      </div>
    </el-form-item>
      <el-form-item class="loginButton">
      <el-button type="primary" ref="submitForm" :disabled="Boolean(loading)" :loading="Boolean(loading)" size="small"  class="login-submit">登录</el-button>
    </el-form-item>
    
  </el-form>
</template>




<style lang="scss" scoped>
.reverse-icon {
  ::v-deep.el-input__suffix {
    display: flex;
    flex-flow: row-reverse;
  }
}

::v-deep .login-code .el-form-item__content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  .el-input {
    display: block;
    margin-right: 10px;
    padding: 0;

    .el-input__inner {
      padding-right: 30px !important;
    }
  }

  .login-code-iner {
    width: 130px;
    height: 48px;
  }
}

::v-deep .icon-jiazaizhong {
  &::before {
    font-size: 40px;
  }
}
</style>
