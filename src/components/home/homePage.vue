<template>
  <div class="dl_content">
    <div class="header_container"></div>
    <nav-list class="nav" ref="dlnav"></nav-list>
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
    .nav{
        width: 100%;
    }
}

</style>