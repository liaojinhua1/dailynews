<template>
 <div class="container">
    <div class="close">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <div class="inputs">
        <!-- 因为是input标签所以不需要接收  placeholder 和type也可以自动接收-->
        <!-- <myinput type="text" :value="user.username" @input="handerinput" placeholder="请输入用户名/手机号"></myinput> -->
        <!-- v-model---实现数据的双向绑定 -->
        <myinput type="text" v-model="users.username"  placeholder="请输入用户名/手机号"
        :rules='/^1\d{10}$/'
        msg_err="请输入正确的11位手机号码"></myinput>
        <myinput type="password" v-model="users.password"  placeholder="请输入密码"></myinput>
    </div>
    <p class="tips">
      没有账号？
      <a href="#/register" class>去注册</a>
    </p>
    <mybutton :text='text' @click="login"></mybutton>
    </div>
</template>

<script>
// 引入按钮
import mybutton from '@/components/dialynews_button.vue'
// 引入输入框
import myinput from '@/components/dailynews_input.vue'
// 引入api方法
import { userLogin } from '@/api/users.js'
export default {
  data () {
    return {
      text: '登录',
      users: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login (event) {
      // console.log(this.users)
      userLogin(this.users)
        .then(res => {
          console.log(res.data)
          if (res.data.message === '登录成功') {
            // 将当前的token存储，本地存储
            window.localStorage.setItem('user_token', res.data.data.token)
            // 如果登录成功，则跳转页面---当前id的用户信息详情页
            this.$router.push({ path: `/Personal/${this.data.data.user.id}` })
          } else {
            // 如果登录不成功，则提示错误信息
            this.$toast.fail(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
          this.$toast.fail('登录失败，请重试')
        })
    }
    // handerinput () {
    //   console.log(event.target.value)
    //   this.user.username = event.target.value
    // }
  },
  components: {
    mybutton, myinput
  }
}
</script>

<style lang='less' scoped>
.container {
  padding: 20px;
  background-color: rgb(241, 241, 241);
  height: 100vh;
}
.close {
  span {
    font-size: 27 / 360 * 100vw;
  }
}
.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}
.tips{
    padding: 10px 0;
    text-align: right;
}
.inputs {
  input {
    margin-bottom: 20px;
  }
}
</style>
