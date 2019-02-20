<template>
  <div class="nav">
      <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#ffffff"
      text-color="#000000"
      active-text-color="#409EFF"
      >
        <el-menu-item v-for="(item, index) in navList" :key="index" :index="item.path">{{item.name}}</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
import * as utils from '@/config/mUtils';

  export default {
    data () {
      return {
          navList: [
            {
                name:'首页',
                path: '/home',
            },
            {
                name: '技术支持&服务',
                path: '/support',
                child: [
                    {
                        name: '汽车装潢',
                        path: '/support/car'
                    },
                    {
                        name: '监控安装',
                        path: '/support/monitor'
                    }
                ]
            },
            {
                name: '商品展示',
                path: '/goods'
            },
            {
                name: '公司文化',
                path: '/company'
            },
            {
                name: '联系我们',
                path: '/contact'
            }
          ],
          activeIndex: '/home',
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        handleSelect(key, keyPath){
            console.log(key, keyPath);
            if(key !== '/home'){
                this.$confim('info', '正在开发中...')
            }else{
                this.$router.push({path: '/home'});
            }

            // if(key === '/support') {
            //     return
            // }else if(key === '/support') {
            //     this.$confim('info', '正在开发中...')
            // }else if(key === '/goods') {
            //     this.$confim('info', '正在开发中...')
            // }else if(key === '/company') {
            //     this.$confim('info', '正在开发中...')
            // }else if(key === '/contact') {
            //     this.$confim('info', '正在开发中...')
            // }
        }
    },

    watch: {}

  }
</script>
<style lang='scss' scoped>
@import '@/assets/style/mixin.scss';
.nav{
    display: flex;
    .el-menu-demo{
        width: 100%;
        li{
            flex: 1;
            text-align: center;
            font-weight: 500;
        }
    }
}
</style>