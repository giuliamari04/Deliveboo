<template>
    <!-- carrello -->
    <div v-if="store.cart.length > 0" class="col-4 pt-5 ">
        <div class="bg-light h-100 rounded-5 d-flex flex-column p-5 cart">
            <h2>Il tuo ordine</h2>
            <div class=" overflow-y-auto overflow-x-hidden h-100 py-4">
                <div v-for="(cart, index) in store.cart" class="row my-bt-border  py-2">
                    <div class="col">
                        <h5>{{ cart.name }}</h5>
                        <span>{{ cart.ingredients }}</span>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-carrello " @click="plusQuantity(cart)"><i
                                class="fa-solid fa-circle-plus"></i></button>
                        <span class="px-2">{{ cart.quantity }}</span>
                        <button @click=" minusQuantity(cart, cart.id)" class="btn btn-carrello"><i
                                class="fa-solid fa-circle-minus"></i></button>
                        <br>
                        <span>{{ plusPrice(cart) }}$</span>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center py-3 ">
                <h2>Totale</h2>
                <span class=" fw-medium  fs-5">{{ totalPrice(store.cart) }}$</span>
            </div>
            <div class="pt-3">
                <button class="btn bg-lightgreen text-light w-100 py-2 fs-5 fw-bold "> Vai al
                    Carrello</button>
            </div>
            <PaymentForm />


        </div>
    </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";
import PaymentForm from "../components/PaymentForm.vue"
export default {
    name: 'CartComponent',
    components: {
        PaymentForm
    },
    data() {
        return {
            store
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

<style lang="scss" scoped></style>