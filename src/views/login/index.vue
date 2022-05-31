<template>
  <div>
    <div>
      <el-form :rules="rules" ref="form" :model="form" class="loging" @keydown.enter.native="onSubmit">
        <h3 class="loging-title">登录</h3>
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="code">
          <el-input
            type="text"
            v-model="form.code"
            placeholder="验证码"
            style="width: 45%"
          ></el-input>
          <el-image :src="myurl" class="captcha" style="float: right;"/>
        </el-form-item> -->
        <el-checkbox v-model="checked" class="logingCheck">记住账号</el-checkbox>
        <el-form-item style="margin-top: 10px">
          <el-button v-loading="loading" type="primary" @click="onSubmit" class="log"
            >登录</el-button
          >
          <el-button class="access">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login/request.js'
import store from '@/store/index.js'
// import axios from 'axios'
// Vue.prototype.$axios=axios

export default {
  name: "Loging",
  data() {
    return {
      myurl: '',
      form: {
        username: '',
        password: '',
        // code: "",
      },
      checked: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        // code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      loading: false
    };
  },
  created() {
    // this.myurl = captcha()
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
        //   this.$axios({
        //     method: 'post',
        //     url: '/api/v1/test/login',
        //     data: this.form
        // })
        //   .then((res)=>{
        //     console.log(res)
        //   })
          login(this.form).then((res)=>{
            console.log(res)
            if (res.code === 0) {
              // this.$router.push(
              // '/home'
              // )
              store.setMessageAction(res.data)
              console.log(this.$store.state.message)
            }
          })
          .catch((err) => {
            console.log(err)
            
            // this.$message.error(err.data.message)
          })
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style>
.loging {
  border-radius: 20px;
  background-clip: padding-box;
  margin: 150px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  box-shadow: 0 0 30px rgb(0, 0, 0);
}
.loging-title {
  margin: 20px 140px 20px 140px;
  text-align: center;
}
.loging-check {
  margin: 0 0 0 0;
  padding: 0 0 10px 0;
}
.log {
  width: 45%;
}
.access {
  width: 45%;
}
.captcha {
  width: 45%
}
</style>