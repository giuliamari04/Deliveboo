<template>
    <div class="card">
        <router-link :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }"><img :src="`${store.imgUrl}${restaurant.image}`" class="card-img-top" :alt="restaurant.name"></router-link>
        <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <p class="card-text">{{ restaurant.description }}</p>
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

<style lang="scss" scoped></style>