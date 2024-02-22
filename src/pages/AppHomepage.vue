<template>
  <AppRestaurants />
</template>

<script>
import { store } from '../store.js';
import AppRestaurants from '../pages/AppRestaurants.vue';
import axios from "axios";
export default {
  name: "AppHomepage",
  components: {
    AppRestaurants
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getAllRestaurants() {
      axios.get(`${this.store.apiUrl}restaurants`).then((res) => {
        this.store.restaurants = res.data.results;
        this.store.cuisines = res.data.results2;
      }).catch((err) => {
        console.log('error', err);
      })
    },
  },
  created() {

  }

};

</script>
<style lang="scss" scoped></style>
