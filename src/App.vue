<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import {store} from './store.js';
export default {
  
    name: "App",
    data() {
      return {
        store,
      }

    },
    components: {
    
      AppHeader,
      AppFooter

    },
    
    methods: {
      getApiTest() {
        axios.get(this.store.apiUrl + 'posts').then((res) => {
          console.log(res.data);
          
        });
      },
    },
    mounted() {
      this.getApiTest();
    },

};

</script>

<style lang="scss" scoped>
// @use "./styles/partials/variables" as *;

</style>