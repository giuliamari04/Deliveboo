<template>
    <AppRestaurants />
</template>

<script>
import {store} from '../store.js';
import AppRestaurants from './AppRestaurants.vue';
export default {
  name: "AppHomepage",
  components: {
    AppRestaurants,
},
  data() {
    return {
      store
    };
  },
  methods: {
  
  },
  
};

</script>
<style lang="scss" scoped>
  
</style>
