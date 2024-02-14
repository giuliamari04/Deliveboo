<template>
  <AppHeader></AppHeader>
  <router-view :key="$route.path"></router-view>
  <AppFooter></AppFooter>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppHomepage from './pages/AppHomepage.vue';
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
    AppHomepage,
    AppFooter
    
},
    
    methods: {
     
    },
  

};

</script>

<style lang="scss" scoped>
// @use "./styles/partials/variables" as *;

</style>