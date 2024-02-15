<template>
    <div>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Choose your delivery options
        </button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"         aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Deliveboo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

                <!-- delivery + pick-up checkboxes -->
            <!-- <div class="offcanvas-body">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck1">Delivery</label>

                <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck2">Pick Up</label>
            </div> -->

                <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Cuisines</button>
                    <div class="dropdown-menu">
                        <div v-for="(cuisine, index) in store.cuisines" :key="index">
                            <input type="checkbox" :id="cuisine.id" :value="cuisine.name" v-model="selectedCuisines">
                            <label :for="'cuisine' + index">{{ cuisine.name }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import {store} from "../store.js";
    export default {
        name: 'SideBar',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>