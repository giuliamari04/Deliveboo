<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light h-100 my-2">
      <div class="container-fluid">
        <!-- logo -->
        <router-link to="/" class="navbar-brand fs-2 fw-bold text-lightgreen mb-3" href="#">Deliveboo</router-link>


        <!-- button for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- buttons -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/cart" class="nav-link mx-3"><i class="fa-solid fa-cart-shopping"></i>
                Carrello</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link mx-3"><i class="fa-solid fa-house-chimney"></i>Registration or
                Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/account" class="nav-link mx-3"><i class="fa-solid fa-user"></i>Account</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/variables';


.search {
  border: 1px solid rgb(201, 199, 199);
  border-radius: 5px;
  background-color: white;
  position: relative;
  width: 40%;
  display: block;
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
}</style>
