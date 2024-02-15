<template>
    <div class="container-fluid">
        <div>
            <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Cuisines</button>
                <div class="dropdown-menu">
                    <div v-for="(cuisine, index) in store.cuisines" :key="index">
                        <input type="checkbox" :id="cuisine.id" :value="cuisine.name" v-model="selectedCuisines">
                        <label :for="'cuisine' + index">{{ cuisine.name }}</label>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" @click="getAllRestaurantsFiltered()">Invia</button>
        </div>
        <div class="d-flex justify-content-between align-items-center my-3">
            <h1>Restaurants List</h1>
        </div>
        <div v-if="selectedCuisines">
            <div class="badge text-bg-success" v-for="cuisine in cuisineBadges">
                {{ cuisine }}
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4 col-lg-3" v-for="restaurant in store.restaurants" :key="restaurant.id">
                <RestaurantCard :restaurant="restaurant" />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard.vue";
export default {
    name: "AppRestaurants",
    components: {
        RestaurantCard
    },
    data() {
        return {
            store,
            selectedCuisines: [],
            cuisineBadges: []
        }
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
        getAllRestaurantsFiltered() {
            this.cuisineBadges = ""
            let params = {};

            if (this.selectedCuisines.length > 0) {
                params.cuisines = this.selectedCuisines;
            }

            axios.get(this.store.apiUrl + 'restaurants', { params })
                .then((res) => {
                    this.store.restaurants = res.data.results;
                    this.store.cuisines = res.data.results2;
                })
                .catch((err) => {
                    console.log('error', err);
                });
            this.cuisineBadges = this.selectedCuisines;
            this.$router.push({ query: { cuisines: this.selectedCuisines } });
        },
        // getAllCuisines(){
        //     axios.get(`${this.store.apiUrl}cuisines`).then((res)=> {
        //         console.log(res.data);
        //     })
        // }
    },
    created() {
        this.getAllRestaurants();
        // this.getAllCuisines();
    }
}
</script>

<style lang="scss" scoped></style>