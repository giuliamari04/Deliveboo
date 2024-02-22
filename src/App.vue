<template>
  <AppHeader></AppHeader>
  <div>
    <router-view :key="$route.path"></router-view>
    <CartComponent v-if="store.cartOpen" class="pe-4" />
  </div>

  <AppFooter></AppFooter>
</template>

<script>
import CartComponent from './components/CartComponent.vue';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppHomepage from './pages/AppHomepage.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store.js';
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
    AppFooter,
    CartComponent

  },

  methods: {

  },


};

</script>

<style lang="scss" scoped>
// @use "./styles/partials/variables" as *;
</style>