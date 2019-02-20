<template>
  <div class="carousel">
    <el-carousel indicator-position="inside">
        <el-carousel-item v-for="item in imageList" :key="item.index" ref="carouselHeight">
            <h3>{{item.index}}</h3>
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
                  url: '../../assets/images/icon/icon_login_success.png'
              },
              {
                  index: 2,
                  url: '../../assets/images/icon/icon_login_success.png'
              },
              {
                  index: 3,
                  url: '../../assets/images/icon/icon_login_success.png'
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
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
}
</style>