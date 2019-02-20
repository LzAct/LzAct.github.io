<template>
  <div class="carousel">
    <el-carousel indicator-position="inside" :interval="3000">
        <el-carousel-item v-for="item in imageList" :key="item.index" ref="carouselHeight">
            <img :src="item.url">
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
          imageList: [
              {
                  index: 1,
                  url: require('../../assets/images/banner/banner_01.jpg')
              },
              {
                  index: 2,
                  url: require('../../assets/images/banner/banner_02.jpg')
              },
              {
                  index: 3,
                  url: require('../../assets/images/icon/icon_login_success.png')
              }
          ]
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
        this.getHeight();
    },

    methods: {
        getHeight() {
            console.log(this.$refs.carouselHeight);
        }
    },

    watch: {}

  }

</script>
<style lang='scss' scoped>
@import '@/assets/style/mixin.scss';

.carousel {
    .el-carousel{
        height: 100%;
    }
    .el-carousel__item{
        height: 100%;
    }
    .el-carousel__item h3{
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    .el-carousel__item img{
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
}
</style>