<template>
  <div class="login">
    <div class="form_group">
        <h1>LOGIN</h1>
        <div class="form_group_item">
            <span class="login_account_label">账号：</span>
            <el-input placeholder="account" v-model="account"></el-input>
        </div>
        <div class="form_group_item">
            <span class="login_account_label">密码：</span>
            <el-input placeholder="password" v-model="password" type="password"></el-input>
        </div>
        <div class="form_group_item">
            <el-button type="primary" @click="login">登陆</el-button>
        </div>
    </div>
  </div>
</template>

<script>
import * as utils from '@/config/mUtils';

  export default {
    name:'login',
    props:[''],
    data () {
      return {
          account: 'admin',
          password: 'admin'
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        login() {
            if(this.account === 'admin' && this.password === 'admin'){
                // console.log(this);
                this.$confim('success', '登陆成功');
                this.$router.push({path: '/home'});
            }else{
                this.$confim('error', '账号密码错误');
            }
        }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
@import '@/assets/style/mixin.scss';
.login{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #cccccc;
    h1{
        color: red;
        cursor: pointer;
        text-align: center;
    }
    .form_group{
        @include center;
        padding: 20px;
        width: 500px;
        height: 300px;
        background: white;
        color: $lightgray;
        border-radius: 10px;
        box-shadow: 0px 0px 40px 0px rgba(#cecece, 1);;
        .form_group_item {
            display: flex;
            align-items: center;
            margin: 20px 0;
            .login_account_label {
                width: 55px;
            }

            &:last-child{
                justify-content: center;
                .el-button{
                    min-width: 200px;
                }
            }
        }
    }
}

</style>