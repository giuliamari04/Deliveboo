<template>
    <!-- carrello -->
    <div v-if="store.cart.length > 0" class="col-4 pt-5 position-relative">
        <div class="bg-light rounded-5 d-flex flex-column p-5 cart" id="cacca">
            <h2>Il tuo ordine</h2>
            <div class=" overflow-y-auto overflow-x-hidden py-4">
                <div v-for="(cart, index) in store.cart" class="row my-bt-border  py-2">
                    <div class="col">
                        <h5>{{ cart.name }}</h5>
                        <span>{{ cart.ingredients }}</span>
                    </div>
                    <div class="col-4">
                        <button @click=" minusQuantity(cart, cart.id)" class="btn btn-carrello"><i
                                class="fa-solid fa-circle-minus"></i></button>
                        <span class="px-2">{{ cart.quantity }}</span>
                        <button class="btn btn-carrello " @click="plusQuantity(cart)"><i
                                class="fa-solid fa-circle-plus"></i></button>


                        <br>
                        <span>{{ plusPrice(cart) }}€</span>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center py-3 ">
                <h2>Totale</h2>
                <span class=" fw-medium  fs-5">{{ totalPrice(store.cart) }}€</span>
            </div>
            <div class="pt-3">
               <router-link :to="{ name: 'check-out' }" > 
                 <button class="btn bg-lightgreen text-light w-100 py-2 fs-5 fw-bold "> Vai al
                    Pagamento</button>
               </router-link>
            </div>
           

        </div>
    </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";

export default {
    name: 'CartComponent',
   
    data(){
        return {
          store,
          name:'',
          email:'',
          address:''
        }
      },
    methods: {
        // calcola il prezzo dei prodotti a seconda della quantità
        plusPrice(item) {
            const priceAsNumber = parseFloat(item.price);

            if (item.quantity === 1) {
                return item.price;
            }
            if (item.quantity > 1) {
                // Moltiplica il prezzo per la quantità
                const totalPrice = priceAsNumber * item.quantity;
                return totalPrice.toFixed(2);

            } else {
                console.error("Il prezzo non è un numero valido.");
            }
        },

        //calcola il conto totale del carrello
        totalPrice(item) {
            let total = 0;
            item.forEach(item => {
                const priceAsNumber = parseFloat(item.price);
                total += priceAsNumber * item.quantity
            });
            localStorage.setItem('cart', JSON.stringify(this.store.cart));
            return total.toFixed(2);

        },

        // Svuota il carrello
        clearCart() {
            this.store.cart = [];
            // Aggiorna il localStorage
            localStorage.removeItem('cart');
        },

        //aumenta quantità prodotto
        plusQuantity(item) {
            item.quantity++;
            console.log(item)
            localStorage.setItem('cart', JSON.stringify(this.store.cart));
            const savedCart = localStorage.getItem('cart');

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

        },

        //diminuisce quantità prodotto
        minusQuantity(item, index) {
            if (item.quantity > 0) {
                item.quantity--;
            }
            if (item.quantity === 0) {
                this.store.cart = this.store.cart.filter(cartItem => cartItem.id !== item.id);
            }
            console.log(item)
            localStorage.setItem('cart', JSON.stringify(this.store.cart));

        }
    },
    created() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
            this.store.cart = this.cart
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/variables';

#cacca {
    position: sticky;
    top: 0px;
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
</style>