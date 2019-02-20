<template>
  <div class="dl_content">
    <div class="header_container"></div>
    <div class="nav_container">
        <div class="logo_box">
            <img :src="logoImgSrc">
        </div>
        <nav-list class="nav" ref="dlnav"></nav-list>
    </div>
    <!-- <nav-list class="nav" ref="dlnav"></nav-list> -->
    <div class="main_container">
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import navList from '@/components/nav/nav.vue';

  export default {
    name:'',
    props:[''],
    data () {
      return {
          logoImgSrc: require('../../assets/images/banner/dl_logo.png')
      };
    },

    components: {
        navList
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
@import '@/assets/style/mixin.scss';

.dl_content{
    .nav_container{
        position: relative;
        padding: 0 0 0 50%;
        border-bottom: 1px solid #cccccc;
        .logo_box{
            position: absolute;
            left: 80px;
            top: 10px;
            cursor: pointer;
            img{
                width: 150px;
                height: 40px;
            }
        }
    }
    .main_container{
        padding: 0 10%;
    }
}

</style>