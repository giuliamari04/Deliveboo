<template>
    <div class="d-flex justify-content-between align-items-center my-3">
        <h1>Restaurants List</h1>
    </div>

    <div class="row">
        <div class="col-12 col-md-4 col-lg-3" v-for="restaurant in store.restaurants" :key="restaurant.id">
            <RestaurantCard :restaurant="restaurant"/>
        </div>
    </div>
</template>

<script>
import {store} from "../store.js";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard.vue";
    export default {
        name: "AppRestaurants",
        components: {
            RestaurantCard
        },
        data(){
            return{
                store
            }
        },
        methods: {
            getAllRestaurants(){
                axios.get(`${this.store.apiUrl}restaurants`).then((res)=> {
                    this.store.restaurants = res.data.results;
                    this.store.cuisines = res.data.results2;
                }).catch((err)=>{
                    console.log('error', err);
                })
            },
            // getAllCuisines(){
            //     axios.get(`${this.store.apiUrl}cuisines`).then((res)=> {
            //         console.log(res.data);
            //     })
            // }
        },
        created(){
            this.getAllRestaurants();
            // this.getAllCuisines();
        }
    }
</script>

<style lang="scss" scoped>

</style>