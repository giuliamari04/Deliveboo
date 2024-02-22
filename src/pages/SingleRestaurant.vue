<template>
    <div class="container-fluid position-relative  overflow-hidden ">
        <div v-if="restaurant">

            <!-- Presentazione e descrizione ristorante -->
            <section>
                <div class="menu-mobile d-flex justify-content-between px-5" v-if="!store.cartOpen"  @click="store.cartOpen = !store.cartOpen">
                       <span class="fs-5 text-lightgreen">Prodotti nel tuo carrello:</span>
                       <span class="fs-5 text-lightgreen">
                        + {{ this.store.cart.length }}
                       </span>  
                    </div>
                <div class="container p-5 rounded-top-5 ">

                    
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <img :src="`${store.imgUrl}${restaurant.image}`" :alt="restaurant.name"
                                class="w-100 rounded-2 shadow  ">
                        </div>
                        <div class="col d-flex flex-column justify-content-center px-5 ">
                            <p>
                            <h1 class="display-4 fw-medium ">{{ restaurant.name }}</h1>
                            <ul class="list-unstyled ">
                                <li class="d-flex flex-wrap  ">
                                    <h5>Cucine:</h5>
                                    <span v-for="cuisine in restaurant.cuisines" :key="cuisine.id"
                                        class="badge bg-green m-1 text-light py-2">{{ cuisine.name }}</span>
                                </li>

                                <li class="d-flex flex-wrap ">
                                    <h5>Indirizzo:</h5>
                                    <span class="px-2">{{ restaurant.address }}</span>
                                </li>
                                <li class="d-flex flex-wrap ">
                                    <h5>Numero di telefono:</h5>
                                    <span class="px-2"> {{ restaurant.phone_number }}</span>
                                </li>
                                <li class="d-flex flex-wrap ">
                                    <h5>Descrizione</h5>
                                    <span class="px-2"> {{ restaurant.description }}</span>
                                </li>
                            </ul>

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- contenitore menù ristorante e carrello -->
            <section>
                <div class="container rounded-bottom-5 mb-5 px-5">
                    <div class="row py-4">

                        <!-- lista prodotti  menù  -->
                        <div class=" col-md col-12 px-4">
                            <h2>Lista piatti:</h2>
                            <!-- <div class="py-4">
                                 <div id="my-warning">
                            </div>
                            </div> -->
                            <!-- Modal -->
                            <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Attenzione!</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Se aggiungi un prodotto da un altro ristorante si svuoterà il carrello che hai
                                            riempito.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" @click="clearCart(newProduct)" class="btn btn-primary"
                                                data-bs-dismiss="modal">Ok, ho
                                                capito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-for="(product, index) in restaurant.products" :key="index">

                                <!-- lista prodotti disponibili -->
                                <div v-if="(product.availability >= 1)" class="row d-flex flex-wrap my-card my-3">
                                    <div class="col-12 col-md-8 d-flex flex-column justify-content-center px-5 bg-light py-2  ">
                                        <h5> {{ product.name }}</h5>
                                        <span>{{ product.ingredients }}</span>
                                        <h5>{{ product.price }}€</h5>
                                    </div>
                                    <div class="col-12 col-md-3 p-0">
                                        <img :src="`${store.imgUrl}${product.image}`" :alt="product.name"
                                            class="w-100 h-100 ">
                                    </div>
                                    <div class="col-md-1 d-flex flex-column justify-content-between p-0 align-items-center">


                                        <button class="btn btn-light h-100 w-100 text-lightgreen fs-2 "
                                            @click="addToCart(store.cart, product)">+</button>
                                        <!-- <button class="btn btn-light h-50 w-100 text-lightgreen fs-2 "
                                            @click="removeFromCart(product, product.id)">-</button> -->


                                    </div>
                                </div>

                                <!-- lista prodotti NON disponibili -->
                                <div v-if="(product.availability <= 0)" class="row my-card my-3 position-relative ">

                                    <div class="col-8 d-flex flex-column justify-content-center bg-light  px-5 blur">
                                        <h5> {{ product.name }}</h5>
                                        <span>{{ product.ingredients }}</span>
                                        <h5>{{ product.price }} €</h5>
                                    </div>
                                    <div class="col p-0 blur">
                                        <img :src="`${store.imgUrl}${product.image}`" :alt="product.name"
                                            class="w-100 h-100">
                                    </div>
                                    <div
                                        class="overlay d-flex justify-content-center align-items-center align-content-center text-danger fs-2 fw-bold  ">
                                        prodotto non disponibile</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




            </section>


        </div>
    </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";
export default {
    name: 'SingleRestaurant',
    data() {
        return {
            store,
            restaurant: null,
            newProduct: null,
            showModal: false,
            countItem:null,
            c: 0,
        }
    },
    methods: {
        getRestaurantData() {
            console.log(this.$route);
            axios.get(this.store.apiUrl + 'restaurants/' + this.$route.params.slug).then((res) => {
                console.log(res.data)
                if (res.data.results) {
                    this.restaurant = res.data.results
                    console.log(this.restaurant);
                } else {
                    this.$router.push({ name: 'not-found' })
                }

            }).catch((err) => {
                console.log('error', err);
            })
        },

        checkCart(cart, item) {
            if (cart.length > 0) {
                if (cart[0].restaurant_id !== this.restaurant.id) {

                    // Mostra la modale
                    const modal = new bootstrap.Modal(document.getElementById('myModal'));
                    modal.show();
                    this.newProduct = item;
                    console.log(this.newProduct.restaurant_id)
                }
            } else {
                return
            }

        },

        addToCart(cart, item) {
            this.checkCart(cart, item)
           
                this.store.cartOpen = true;
            

            if (this.restaurant && this.restaurant.products) {
                const existingItem = this.store.cart.find(cartItem => cartItem.id === item.id);

                if (existingItem) {
                    existingItem.quantity++;

                } else {
                    if (this.newProduct && this.newProduct.restaurant_id !== cart[0].restaurant_id) {
                        return
                    }
                    else {
                        this.store.cart.push({ ...item, quantity: 1 });
                    }
                }
                localStorage.setItem('cart', JSON.stringify(this.store.cart));
                const savedCart = localStorage.getItem('cart');

                // Controlla se ci sono dati salvati nel localStorage
                if (savedCart) {
                    try {
                        const parsedCart = JSON.parse(savedCart);
                        this.store.cart = parsedCart;

                    } catch (error) {
                        console.error('Errore nel parsing della stringa JSON:', error);
                    }
                } else {
                    console.error("Impossibile aggiungere l'articolo al carrello: il ristorante o i prodotti non sono stati inizializzati correttamente.");
                }
            }
        },

        clearCart(item) {
            this.store.cart = [];
            // Aggiorna il localStorage
            localStorage.clear();
            this.store.cart.push({ ...item, quantity: 1 });
            localStorage.setItem('cart', JSON.stringify(this.store.cart));

        },


        //rimuove elemnto dal carrello
        removeFromCart(item, index) {
            this.store.cartOpen = true
            const existingItem = this.store.cart.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                if (existingItem.quantity > 0) {
                    existingItem.quantity--;
                }
                // Rimuovi l'elemento dal carrello se la quantità è 0
                if (existingItem.quantity === 0) {
                    this.store.cart = this.store.cart.filter(cartItem => cartItem.id !== item.id);
                }
            }

            // Salva il carrello aggiornato nello localStorage
            localStorage.setItem('cart', JSON.stringify(this.store.cart));
        },


    },
    created() {
        this.getRestaurantData();
        window.scrollTo(0, 0);
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/variables';

.container {
    background-color: rgb(243, 243, 243);
}
.menu-mobile{
    display: none;
    opacity: 0;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.404);
}

.blur {
    filter: blur(10px);
}

li {
    h5 {
        font-size: medium;
        margin-top: 3px;
    }
}

.my-card {
    border: 1px solid rgba(0, 0, 0, 0.384);
    border-radius: 20px;
    height: 200px;
    overflow: hidden;
    transition: 0.2s;

    .col-8 {
        height: inherit;
    }

    .col-md-3 {
        height: inherit;
    }

    img {
        object-fit: cover;
    }
}

.my-card:hover {
    box-shadow: 0px 0px 10px $lightgreen;
    border: 1px solid $lightgreen;
}

.text-lightgreen {
    color: $lightgreen !important;
}

.bg-green {
    background-color: $green;
    border-radius: 20px;
}

.bg-lightgreen {
    background-color: $lightgreen;
}

.bg-lightgreen:hover {
    filter: brightness(95%);
    box-shadow: 0px 0px 10px $lightgreen;

}

.btn-carrello {
    font-size: 1.2em;
    padding: 0;
    color: $lightgreen;
    border: 0;

}

.btn-carrello:hover {
    transform: scale(1.3);
}

.my-bt-border {
    border-bottom: 1px solid black;
}

.cart {
    border: 1px solid rgba(0, 0, 0, 0.384);
}

@media screen and (max-width:767px) {

    .row{
        height:100%;
    }

    .menu-mobile{
        opacity: 1;
        display: block;
        position: fixed;
        width: 95%;
        bottom: 20px;
        padding: 10px;
        border-radius: 30px;
        background-color: white;
        border: 3px solid $lightgreen;
    }
}
</style>