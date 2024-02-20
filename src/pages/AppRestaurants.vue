<template>
    <div class="wrapper">
        <!-- main content -->
        <div class="container my-container">
            <h1>Lista Ristoranti</h1>
            <div class="alert alert-danger" v-if="store.isLoaded === true && store.restaurants.length <= 0">Non ci sono
                ristoranti
                con queste tipologie
            </div>
            <div class="menu">
                <ul class="list-unstyled">
                    <li>
                        <span>Esplora le cucine</span>
                    </li>
                    <li class="d-flex flex-wrap">
                        <div v-for="(cuisine, index) in store.cuisines" :key="index" class="d-flex flex-nowrap">
                            <input type="checkbox" class="custom-checkbox" :id="cuisine.id" :value="cuisine.name"
                                v-model="selectedCuisines" @change="getAllRestaurantsFiltered(selectedCuisines)">
                            <label :for="'cuisine' + index" class="mx-2">{{ cuisine.name }}</label>
                        </div>
                    </li>
                </ul>
            </div>




            <div v-if="selectedCuisines">
                <div class="badge text-bg-success" v-if="Array.isArray(cuisineBadges)" v-for="cuisine in cuisineBadges">
                    {{ cuisine }}
                </div>
                <div class="badge text-bg-success" v-else>{{ cuisineBadges }}</div>
            </div>
            <div class="row g-4">
                <div class="col-12 col-md-4 col-lg-3" v-for="restaurant in store.restaurants" :key="restaurant.id">
                    <RestaurantCard :restaurant="restaurant" />
                </div>
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
            }).finally(() => {
                store.isLoaded = true;
            });
        },
        getAllRestaurantsFiltered(selectedCuisines) {
            this.cuisineBadges = ""
            let params = {};

            if (selectedCuisines.length > 0) {
                params.cuisines = selectedCuisines;
            }

            axios.get(this.store.apiUrl + 'restaurants', { params })
                .then((res) => {
                    this.store.restaurants = res.data.results;
                    this.store.cuisines = res.data.results2;
                })
                .catch((err) => {
                    console.log('error', err);
                }).finally(() => {
                    store.isLoaded = true;
                });;
            this.cuisineBadges = selectedCuisines;
            this.$router.push({ query: { cuisines: selectedCuisines } });
        },
    },
    created() {
        if (this.$route.query.cuisines) {
            this.getAllRestaurantsFiltered(this.$route.query.cuisines);
        } else {
            this.getAllRestaurants();
        }
        store.cartOpen = true;
        store.isLoaded = false;
        // this.getAllCuisines();
    },
    mounted() {


    }
}
</script>
    
<style lang="scss" scoped>
@import '../assets/style/partials/variables';

.wrapper {
    width: 100%;
    min-height: 100vh;
}

.title,
.menu {
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.menu {
    border: 1px solid $lightgreen;
    border-radius: 10px;
}

.name {
    font-weight: 500;
}

.menu ul li {
    list-style: none;
    margin-bottom: 5px;
}

.menu ul li {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    padding: 12px 8px;
    border-radius: 8px;
}

span,
.btn-lightgreen {
    color: $lightgreen;
}

.btn-lightgreen {
    border: 1px solid $lightgreen;
    margin-left: 8px;
}

.btn-lightgreen:hover {
    background-color: $lightgreen;
    color: white;
}

.custom-checkbox input[type="checkbox"] {
    display: none;
}

.custom-checkbox label {
    display: inline-block;
    position: relative;
    padding-left: 25px;
    margin-right: 10px;
    cursor: pointer;
}

.custom-checkbox label:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    border: 2px solid #aaa;
    background-color: #fff;
}

.custom-checkbox input[type="checkbox"]:checked+label:before {
    background-color: $lightgreen;
}

.custom-checkbox input[type="checkbox"]:checked+label:after {
    content: '\2713';
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 4px;
    color: #fff;
}

.my-container {
    width: 100%;
}
</style>