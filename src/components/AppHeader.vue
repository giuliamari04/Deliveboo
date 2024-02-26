<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light h-100 py-2">
      <div class="container-fluid">
        <!-- logo -->
        <router-link to="/" class="navbar-brand fs-2 fw-bold text-lightgreen mb-3" href="#">
          <span
            @click="getAllRestaurantsFiltered(store.selectedCuisines), store.selectedCuisines = []" id="logo-box">
            <img id="logo" src="/public/img/logo-deliveboo.png" alt="logo">
          </span></router-link>


        <!-- button for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- buttons -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item mt-1" @click="store.cartOpen = !store.cartOpen">
              <button class="nav-link mx-3 text-black  px-3 cart">
                <i class="fa-solid fa-cart-shopping"></i>
                Carrello
              </button>

            </li>
            <li class="nav-item mt-1">
              <button class="nav-link mx-3 cart px-3">
                <a href="http://localhost:8000" class=" text-decoration-none text-black  "><i class="fa-solid fa-house-chimney"></i>Registrazione
                o
                Login</a>
              </button>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
import { store } from '../store';
export default {
  name: "AppHeader",
  data() {
    return {
      store
    }
  },
  methods: {
    getAllRestaurantsFiltered(selectedCuisines) {
      selectedCuisines = []
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
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/variables';

header{
  position: sticky;
  top:0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 3000;
  height: 80px;
}
#logo-box{
  position: relative;
}
#logo {
  position: absolute;
  width: 100px; 
  top: -40px;
  left: 0;
  overflow: hidden;
}

.navbar-brand {
  position: relative;
}
.search {
  border: 1px solid rgb(201, 199, 199);
  border-radius: 5px;
  background-color: white;
  position: relative;
  width: 40%;
  display: block;
}
.cart {
  &:hover {
    cursor: pointer;
  }
}

.search:hover {
  box-shadow: 0px 0px 5px $lightgreen;
}

.search:focus-within {
  border: none;
  box-shadow: 0px 0px 5px $lightgreen;
}

.search .btn:hover {
  border: none;
}

.nav-link {
  border: 1px solid rgb(201, 199, 199);
  border-radius: 5px;

  i {
    color: $lightgreen;
    padding: 5px;
  }
}

.nav-link:hover {
  border: 1px solid $lightgreen;
  box-shadow: 0px 0px 5px $lightgreen;
}

.text-lightgreen {
  color: $lightgreen;
}

input:focus {
  outline: none;
  border: 0;
  box-shadow: none;
}
</style>
