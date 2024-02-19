<template>
    <div class="container-fluid">
        <div v-if="restaurant">

            <!-- Presentazione e descrizione ristorante -->
            <section>
                <div class="container p-5 rounded-top-5  ">
                    <div class="row">
                        <div class="col-4">
                            <img :src="`${store.imgUrl}${restaurant.image}`" :alt="restaurant.name"
                                class="w-100 rounded-2 shadow  ">
                        </div>
                        <div class="col d-flex flex-column justify-content-center px-5 ">
                            <p>
                            <h1 class="display-4 fw-medium ">{{ restaurant.name }}</h1>
                            <ul class="list-unstyled ">
                                <li class="d-flex ">
                                    <h5>Cucine:</h5>
                                    <span v-for="cuisine in restaurant.cuisines" :key="cuisine.id"
                                        class="badge bg-green mx-1 text-light py-2">{{ cuisine.name }}</span>
                                </li>

                                <li class="d-flex">
                                    <h5>Indirizzo:</h5>
                                    <span class="px-2">{{ restaurant.address }}</span>
                                </li>
                                <li class="d-flex">
                                    <h5>Numero di telefono:</h5>
                                    <span class="px-2"> {{ restaurant.phone_number }}</span>
                                </li>
                                <li class="d-flex">
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
                        <div class="col px-4">
                            <h2>Lista piatti:</h2>
                            <div class="py-4">
                                 <div id="my-warning">
                            </div>
                            </div>
                           
                            <div v-for="(product, index) in restaurant.products" :key="index">

                                <!-- lista prodotti disponibili -->
                                <div v-if="(product.availability >= 1)" class="row my-card my-3">
                                    <div class="col-8 d-flex flex-column justify-content-center px-5 bg-light  ">
                                        <h5> {{ product.name }}</h5>
                                        <span>{{ product.ingredients }}</span>
                                        <h5>{{ product.price }}€</h5>
                                    </div>
                                    <div class="col p-0">
                                        <img :src="`${store.imgUrl}${product.image}`" :alt="product.name"
                                            class="w-100 h-100 ">
                                    </div>
                                    <div class="col-1 d-flex flex-column justify-content-between p-0 align-items-center">

                                        
                                        <button class="btn btn-light h-50 w-100 text-lightgreen fs-2 "
                                            @click="addToCart(product), checkCart(store.cart, product)">+</button>
                                        <button class="btn btn-light h-50 w-100 text-lightgreen fs-2 "
                                            @click="removeFromCart(product, product.id)">-</button>

                                       
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
            showModal: false,
            c:0,
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
        addToCart(item) {
            this.store.cartOpen = true
            if (this.restaurant && this.restaurant.products) {
                const existingItem = this.store.cart.find(cartItem => cartItem.id === item.id);

                if (existingItem) {
                    existingItem.quantity++;

                } else {
                    this.store.cart.push({ ...item, quantity: 1 });
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

        checkCart(cart, item) {
            const myElement = document.getElementById('my-warning');
            if (cart[0].restaurant_id !== this.restaurant.id) {
               if(this.c===1){
                this.store.cart = [];
                // Aggiorna il localStorage
                
                localStorage.clear();
                this.store.cart.push({ ...item, quantity: 1 });
                localStorage.setItem('cart', JSON.stringify(this.store.cart));
                myElement.innerHTML ='<span></span>';
               }if(this.c===0){
                

                // Inserisci del testo nell'elemento
                myElement.innerHTML ='<span class="alert alert-danger">Attenzione se clicci di nuovo il più di un prodotto, di un nuovo ristorante si svuoterà il carrello che hai riempito </span>';
                this.removeFromCart(item, item.id);
                this.c++;
               }

            }
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
        store.cartOpen = true
        // Recupera il carrello dal localStorage quando il componente viene creato
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/variables';

.container {
    background-color: rgb(243, 243, 243);
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

    .col {
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

 
</style>