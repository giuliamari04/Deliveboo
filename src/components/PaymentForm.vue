<template>
  <!-- LOADER -->
  <LoaderComponent v-if="store.isLoading" />

  <div v-if="!store.isLoading" class="py-2">
    <!-- FORM -->
    <form class=" myform " @submit.prevent="validateForm()">
      <div class="mb-3">
        <label for="name" class="form-label">Nome*</label>
        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
        <div v-if="!nameValid" class="text-danger small">Inserisci un nome valido</div>
        
      </div>
      <div class="mb-3">
        <label for="surname" class="form-label">Cognome*</label>
        <input type="text" class="form-control" id="surname" aria-describedby="surnameHelp" v-model="surname">
        <div v-if="!surnameValid" class="text-danger small">Inserisci un cognome valido</div>
        
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Indirizzo di consegna*</label>
        <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
        <div v-if="!addressValid" class="text-danger small">Inserisci un indirizzo valido.</div>
        
      </div>
      <div class="mb-3">
        <label for="phonenumber" class="form-label">Telefono*</label>
        <input type="text" class="form-control" id="phonenumber" aria-describedby="phonenumberHelp" v-model="phonenumber" >
        <div v-if="!phoneNumberValid" class="text-danger small">Il numero di telefono non è valido o non ha almeno 10
          cifre.</div>
        
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email*</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" >
        <div v-if="!emailValid" class="text-danger small">Il formato dell'e-mail non è valido</div>
        
      </div>
      <p class="small my-3">
          Il campo (*) è obbligatorio
      </p>


      <div>
        <div id="dropin-container"></div>
        <button type="submit" class="btn btn-carrello me-3">Paga</button>
        <button type="reset" @click="reset()" class="btn btn-secondary">Ripristina</button>
      </div>

    </form>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "@/store";
import CartComponent from "./CartComponent.vue";
import LoaderComponent from "./LoaderComponent.vue";
export default {
  name: 'PaymentForm',
  components: {
    CartComponent,
    LoaderComponent,
  },
  data() {
    return {

      store,
      name: '',
      surname: '',
      email: '',
      phonenumber: '',
      address: '',
      phoneNumberValid: true,
      nameValid: true,
      surnameValid: true,
      addressValid: true,
      emailValid: true,
    };
  },
  mounted() {
    this.setupBraintreeDropIn();
    store.cartOpen = false;
    window.scrollTo(0, 0);
  },
  methods: {
    reset() {
      this.name = ''
      this.surname = ''
      this.email = ''
      this.phonenumber = ''
      this.address = ''
    },
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
    validateForm() {
      // Validazione dei campi

      this.phoneNumberValid = true;
      this.nameValid = true;
      this.surnameValid = true;
      this.addressValid = true;
      this.emailValid = true;

      if (!this.validateName()) {
        this.nameValid = false;
        return;
      }

      if (!this.validateSurname()) {
        this.surnameValid = false;
        return;
      }

      if (!this.validateAddress()) {
        this.addressValid = false;
        return;
      }

      if (!this.validatePhoneNumber()) {
        this.phoneNumberValid = false;
        return;
      }

      if (!this.validateEmail()) {
        this.emailValid = false;
        return;
      }
      this.processPayment();
    },
    validatePhoneNumber() {
      // Numero di telefono deve essere un numero positivo di almeno 10 cifre
      return /^[0-9]{10,}$/.test(this.phonenumber.trim()) && parseInt(this.phonenumber.trim()) > 0;
    },
    validateName() {
      // Il nome deve essere una stringa con almeno 2 caratteri
      return typeof this.name === 'string' && this.name.trim().length >= 2;
    },

    validateSurname() {
      // Il cognome deve essere una stringa con almeno 2 caratteri
      return typeof this.surname === 'string' && this.surname.trim().length >= 2;
    },

    validateAddress() {
      // L'indirizzo deve essere una stringa con almeno 10 caratteri
      return typeof this.address === 'string' && this.address.trim().length >= 10;
    },

    validateEmail() {
      // L'email deve essere una stringa con un formato valido
      return typeof this.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim());
    },

    async processPayment() {
      try {
        const payload = await new Promise((resolve, reject) => {
          this.braintreeInstance.requestPaymentMethod((error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });

        const response = await axios.post(this.store.apiUrl + 'process-payment', { paymentMethodNonce: payload.nonce });

        if (response.data.success) {
          this.store.cartOpen = false;
          this.store.isLoading = true;
          await this.submitForm(); // Attendiamo il completamento del submitForm prima di procedere

        } else {

        }
      } catch (error) {
        console.error('Errore durante il processo di pagamento:', error);
      }
    },
    async submitForm() {
      try {
        const data = {
          // dati del form
          name: this.name,
          surname: this.surname,
          email: this.email,
          phone_number: this.phonenumber,
          address: this.address,
          products: this.store.cart,
          restaurant_id: this.store.cart[0].restaurant_id,
          amount: this.store.totalPrice,
        };
        const res = await axios.post(this.store.apiUrl + 'order', data);
        if (res.data.success) {
          localStorage.clear();
          this.store.cart = [];
          this.store.isLoading = false;
          this.changeRoute();
        }
      } catch (err) {
        console.error('Errore durante l\'invio del form dell\'ordine:', err);
      }
    },
    changeRoute() {
      localStorage.clear();
      // this.store.isLoading = false;
      this.$router.push('/thankyou');
    }
  },
  created() {
    const savedCart = localStorage.getItem("cart");
    this.store.cart = JSON.parse(savedCart);
    const savedAmount = localStorage.getItem("amount");
    this.store.totalPrice = JSON.parse(savedAmount);
  }

};
</script>
<style lang="scss" scoped>
@import '../assets/style/partials/variables';

input {
  border: 1px solid $lightgreen;
}

input:focus {
  border: 1px solid $lightgreen;
  box-shadow: 0px 0px 10px $lightgreen;
}

.myform {
  label {
    color: $darkgreen !important;
  }

  .mb-3 {
    div {
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

.container-fluid {
  z-index: 3;
  background-color: black;
}
</style>