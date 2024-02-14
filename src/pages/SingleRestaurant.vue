<template>
    <div v-if="restaurant">
        <h1>{{ restaurant.name }}</h1>
        <img :src="`${store.imgUrl}${restaurant.image}`" :alt="restaurant.name">
    </div>
    <router-link class="nav-link active" :to="{name: 'single-restaurant', params: {slug: ''}}"></router-link>
</template>

<script>
import {store} from "../store.js";
import axios from "axios";
    export default {
        name: 'SingleRestaurant',
        data(){
            return{
                store,
                restaurant: null
            }
        },
        methods: {
            getRestaurantData(){
                console.log(this.$route);
                axios.get(this.store.apiUrl + 'restaurants/' + this.$route.params.slug).then((res)=>{
                    console.log(res.data)
                    if(res.data.results){
                        this.restaurant = res.data.results
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                   
                }).catch((err)=>{
                    console.log('error', err);
                })
            }
        },
        created(){
            this.getRestaurantData();
        }
    }
</script>

<style lang="scss" scoped>

</style>