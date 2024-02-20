<template>
  <div class="py-2">
    <form class=" myform " @submit.prevent="submitForm">
      <div class="mb-3">
      <label for="name" class="form-label">Il tuo nome*</label>
      <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
      <div id="nameHelp" class="form-text">Inserisci il tuo nome</div>
    </div>
    <div class="mb-3">
      <label for="surname" class="form-label">Il tuo cognome*</label>
      <input type="text" class="form-control" id="surname" aria-describedby="surnameHelp" v-model="surname">
      <div id="surnameHelp" class="form-text">Inserisci il tuo cognome</div>
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">Il tuo indirizzo*</label>
      <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
      <div id="addressHelp" class="form-text">Inserisci il tuo indirizzo di consegna</div>
    </div>  
    <div class="mb-3">
      <label for="phonenumber" class="form-label">Il tuo numero di telefono*</label>
      <input type="text" class="form-control" id="phonenumber" aria-describedby="phonenumberHelp" v-model="phonenumber">
      <div id="phonenumberHelp" class="form-text">Inserisci il tuo numero di telefono</div>
    </div> 
    <div class="mb-3">
      <label for="email" class="form-label">Email*</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
      <div id="emailHelp" class="form-text">Inserisci la tua mail</div>
    </div>
    
    
   <div>
    <div id="dropin-container"></div>
    <button type="submit" class="btn btn-carrello me-3" @click="processPayment">Paga</button>
    <button type="reset" class="btn btn-secondary">Reset</button>
  </div>

 
  </form>
  </div>
    
 
</template>

<script>
import axios from "axios";
import { store } from "@/store";
import CartComponent from "./CartComponent.vue";
export default {
  name:'PaymentForm',
  components:{
    CartComponent,
  },
  data() {
    return {
     
      store,
      name:'',
      surname:'',
      email:'',
      phonenumber:'',
      address:'', 
    };
  },
  mounted() {
    this.setupBraintreeDropIn();
  },
  methods: {
    setupBraintreeDropIn() {
      const braintree = window.braintree;
      if (!braintree) {
        console.error('Braintree non è stato caricato correttamente.');
        return;
      }

      braintree.dropin.create({
        authorization: 'sandbox_9qzpc7sk_5pbryjzfb6jtngmk',
        container: '#dropin-container'
      }, (error, instance) => {
        if (error) {
          console.error('Errore durante l\'inizializzazione di Braintree Drop-in:', error);
          return;
        }
        this.braintreeInstance = instance;
      });
    },
    processPayment() {
      if (!this.braintreeInstance) {
        console.error('Braintree Drop-in non è stato inizializzato correttamente.');
        return;
      }

      this.braintreeInstance.requestPaymentMethod((error, payload) => {
        if (error) {
          console.error('Errore durante il processo di pagamento:', error);
          return;
        }

        // Invia payload al backend per l'elaborazione del pagamento
        axios.post(this.store.apiUrl + 'process-payment', { paymentMethodNonce: payload.nonce })
          .then(response => {
            console.log(response);
            if (response.data.success) {
              alert('Pagamento completato con successo!');
            } else {
              alert('Errore durante il processo di pagamento.');
            }
          })
          .catch(error => {
            console.error('Errore durante il processo di pagamento:', error);
            alert('Errore durante il processo di pagamento.');
          });
      });
    },
    submitForm(){
          const data = {
            name: this.name,
            surname:this.surname,
            email: this.email,
            phonenumber:this.phonenumber,
            address: this.address,
            products: this.store.cart,
            restaurant_id: this.store.cart[0].restaurant_id,
          }
          axios.post(this.store.apiUrl + 'checkout', data).then((res) => {
            console.log(res.data);
            this.name = '';
            this.surname ='';
            this.email = '';
            this.phonenumber='';
            this.address = '';
          }).catch((err) => {
            console.log(err);
            console.log(err.response.data);


          })
        }
  },
  created(){
    const savedCart = localStorage.getItem("cart");
    this.store.cart = JSON.parse(savedCart);
    console.log( this.store.cart
            );
          console.log( this.store.cart[0].restaurant_id);
  }

};
</script>
<style lang="scss" scoped>
@import '../assets/style/partials/variables';
input{
  border: 1px solid $lightgreen;
}
input:focus{
  border: 1px solid $lightgreen;
  box-shadow: 0px 0px 10px $lightgreen;
}
.myform{
  label{
     color: $darkgreen !important;
  }
 .mb-3{
  div{
    color: $grey;
  }
 }
}

.btn-carrello {
    background-color: $darkgreen;
    color: white;
}

.btn-carrello:hover {
    background-color: white;
    color: $darkgreen;
    border: 1px solid $darkgreen;
}
.container-fluid{
  z-index: 3;
  background-color: black;
}

</style>