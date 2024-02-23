<template>
    <div class="card">
        <router-link :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }"><img :src="`${store.imgUrl}${restaurant.image}`" class="card-img-top" :alt="restaurant.name"></router-link>
        <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <p class="card-text">{{ restaurant.description.substring(0, 80) + '...'  }}</p>
        </div>
    </div>
</template>

<script>
import { store } from "../store.js";
export default {
    name: 'RestaurantCard',
    props: ['restaurant'],
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/variables';
.card{
  border-radius: 10px !important;
  border: 3px solid $lightgreen ;
  height: 100%;
  box-shadow: 3px 3px 30px grey;
  transition: 0.5s;
}
.card:hover{
    box-shadow: 0px 0px 20px $lightgreen;
}
.card-img-top{
    height: 200px;
    object-fit: cover;
}
</style>