<template>
  <div>
    <AppHeader></AppHeader>
    <div>
      <router-view :key="$route.path"></router-view>
      <CartComponent v-if="store.cartOpen" class="pe-4" />
    </div>

    <AppFooter></AppFooter>
  </div>
</template>

<script>
import CartComponent from './components/CartComponent.vue';
import AppHeader from './components/AppHeader.vue';
import AppHomepage from './pages/AppHomepage.vue';
import AppFooter from './components/AppFooter.vue';
import ThankYou from './pages/ThankYou.vue';
import LoaderComponent from './components/LoaderComponent.vue';
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
    CartComponent,
    ThankYou,
    LoaderComponent
  },

  methods: {
  
  },

  created(){
    console.log(store.cartOpen);
  }


};

</script>

<style lang="scss" scoped>
// @use "./styles/partials/variables" as *;
</style>