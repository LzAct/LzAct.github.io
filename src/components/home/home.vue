<template>
  <div class="home">
    <carousel></carousel>
  </div>
</template>

<script>
import Carousel from './carousel';

  export default {
    name:'',
    props:[''],
    data () {
      return {
          logoUrl: '../../assets/logo.png'
      };
    },

    components: {
        Carousel
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
    .home{
        height: 30px;
        width: 100%;
        color: black;
    }
</style>