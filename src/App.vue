<template>
  <div>
    <AppHeader></AppHeader>
    <div class="d-flex">
      <router-view :key="$route.path"></router-view>
      <CartComponent v-if="store.cartOpen" class="pe-4 myposition " />
      <CartComponent v-if="store.cartOpen" class="myposition2 position-fixed " />
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
// posizione versione desktop
.myposition{
 
  display: block;
  top:0%;
  right:0;
  opacity: 1;
}

// posizione versione mobile
.myposition2{
  display: none;
  opacity: 0;
  position: fixed;
  top:8%;
  z-index: 100;
  right:0;
  opacity: 1;
}
 @media screen and  (max-width:769px) {
   .myposition{
    display: none;
     opacity: 0;
   }
   .myposition2{
    display: block;
    opacity: 1;
    height: 100vh;
    overflow-y: scroll;
   }
  
 }
</style>
