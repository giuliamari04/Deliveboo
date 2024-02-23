<template>
    <div class="wrapper">
        <!-- sfere -->
        <div class="ball1"></div>
        <div class="ball2"></div>

    <div>
         <Hero/> 
    </div> 
        <!-- main content -->

        <div class="container py-5 my-container">
            <h1>Lista Ristoranti</h1>
            <div class="alert alert-danger" v-if="store.isLoaded === true && store.restaurants.length <= 0">Non ci sono
                ristoranti
                con queste tipologie
            </div>
            <div class="menu bg-light px-3">
                <ul class="list-unstyled">
                    <li>
                        <span>Esplora le cucine</span>
                    </li>
                    <li>
                        <div class="row">
                            <div v-for="(cuisine, index) in store.cuisines" :key="index" class="col-6 col-md-2 d-flex flex-row">
                            <input type="checkbox" class="custom-checkbox" :id="cuisine.id" :value="cuisine.name"
                                v-model="store.selectedCuisines"
                                @change="getAllRestaurantsFiltered(store.selectedCuisines)">
                            <label :for="'cuisine' + index" class="mx-2 d-flex align-items-center text-truncate ">{{ cuisine.name }}</label>
                        </div>
                        </div>
                        
                    </li>
                </ul>
            </div>


            <div v-if="store.selectedCuisines.length > 0">
                <div class="badge text-bg-success" v-if="Array.isArray(cuisineBadges)" v-for="cuisine in cuisineBadges">
                    {{ cuisine }}
                </div>
                <div class="badge text-bg-success" v-else>{{ cuisineBadges }}</div>
            </div>
            <div class="row py-3 g-4">
                <div class="colCard col-12 col-md-4 col-lg-3 h-100" v-for="restaurant in store.restaurants" :key="restaurant.id">
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
import Hero from "@/components/Hero.vue";
export default {
    name: "AppRestaurants",
    components: {
        RestaurantCard,
        Hero
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
            this.store.selectedCuisines = selectedCuisines
            this.cuisineBadges = selectedCuisines;
            this.$router.push({ query: { cuisines: selectedCuisines } });
        },
    },
    created() {
        if (this.$route.query.cuisines) {
            this.store.selectedCuisines = this.$route.query.cuisines
            this.getAllRestaurantsFiltered(this.store.selectedCuisines);
        } else {
            this.getAllRestaurants();
        }
        store.cartOpen = true;
        store.isLoaded = false;
        // this.getAllCuisines();
    },
    mounted() {
        store.cartOpen = false;
        window.scrollTo(0, 0);

    }
}
</script>
    
<style lang="scss" scoped>
@import '../assets/style/partials/variables';

.wrapper { 
    margin-top: -10px;
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    h1{
        color:$lightgreen;
        text-shadow: 0px 0px 5px white;
    }
}
.ball1{
    position: absolute;
    width: 900px;
    height: 900px;
    background-color:$lightgreen;
    opacity: 0.2;
    border-radius: 50%;
    z-index: -1;
    top: 10%;
    animation: rotate 10s linear infinite;
}

.ball2{
    position: absolute;
    width: 900px;
    height: 900px;
    background-color:$lightgreen;
    opacity: 0.2;
    border-radius: 50%;
    z-index: -1;
    bottom: -70%;
    right: -50%;
    animation: rotate 10s linear infinite;
}
.title,
.menu {
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.menu {
    border: 3px solid $lightgreen;
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

span{
    color: $lightgreen;
    font-size: large;
    width: 100%;
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

@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg) translate(100px) rotate(0deg);
        border-radius: 47% 53% 46% 54% / 51% 48% 52% 49% ;
      }
    30%{
        border-radius:33% 67% 33% 67% / 57% 41% 59% 43% ;
    }
    60%{
        border-radius:39% 61% 32% 68% / 68% 26% 74% 32% ;
    }
      100% {
        transform: translate(-50%, -50%) rotate(360deg) translate(100px) rotate(-360deg);
        border-radius: 47% 53% 46% 54% / 51% 48% 52% 49% ;
        
      }
}
</style>