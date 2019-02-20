<template>
  <div class="nav">
      <el-menu
      :default-active="activeIndex"
      router
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
                path: '/support'
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
            // let path = this.navList[key].path;
            console.log(key, keyPath);
            // this.$router.push({name: path})
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
            // position: relative;
            // &::after{
            //     position: absolute;
            //     content: '';
            //     height: 40px;
            //     width: 1px;
            //     background: red;
            // }
            // width: 120px;
        }
    }
}
</style>