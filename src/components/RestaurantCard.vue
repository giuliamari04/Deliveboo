<template>
    <div class="card">
        <img :src="`${store.imgUrl}${restaurant.image}`" class="card-img-top" :alt="restaurant.name">
        <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <p class="card-text">{{ restaurant.description }}</p>
            <router-link :to="{name:'single-restaurant', params: {slug: restaurant.slug}}" class="btn btn-primary">View</router-link>
        </div>
    </div>
</template>

<script>
import {store} from "../store.js";
    export default {
        name: 'RestaurantCard',
        props: ['restaurant'],
        data(){
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>