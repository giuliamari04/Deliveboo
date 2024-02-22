<template>
  <div class="py-2">
    <!-- FORM -->
    <form class=" myform " @submit.prevent="validateForm()">
      <div class="mb-3">
        <label for="name" class="form-label">Il tuo nome*</label>
        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
        <div v-if="!nameValid" class="text-danger small">Il nome deve essere almeno 2 caratteri</div>
        <div id="nameHelp" class="form-text">Inserisci il tuo nome</div>
      </div>
      <div class="mb-3">
        <label for="surname" class="form-label">Il tuo cognome*</label>
        <input type="text" class="form-control" id="surname" aria-describedby="surnameHelp" v-model="surname">
        <div v-if="!surnameValid" class="text-danger small">Il cognome deve essere almeno 2 caratteri</div>
        <div id="surnameHelp" class="form-text">Inserisci il tuo cognome</div>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Il tuo indirizzo*</label>
        <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
        <div v-if="!addressValid" class="text-danger small">L'indirizzo deve essere almeno 10 caratteri.</div>
        <div id="addressHelp" class="form-text">Inserisci il tuo indirizzo di consegna</div>
      </div>
      <div class="mb-3">
        <label for="phonenumber" class="form-label">Il tuo numero di telefono*</label>
        <input type="text" class="form-control" id="phonenumber" aria-describedby="phonenumberHelp" v-model="phonenumber">
        <div v-if="!phoneNumberValid" class="text-danger small">Il numero di telefono non è valido o non ha almeno 10
          cifre.</div>
        <div id="phonenumberHelp" class="form-text">Inserisci il tuo numero di telefono</div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email*</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
        <div v-if="!emailValid" class="text-danger small">L'email non è valida.</div>
        <div id="emailHelp" class="form-text">Inserisci la tua mail</div>
      </div>


      <div>
        <div id="dropin-container"></div>
        <button type="submit" class="btn btn-carrello me-3">Paga</button>
        <button type="reset" @click="reset()" class="btn btn-secondary">Reset</button>
      </div>


    </form>
    <!-- LOADER -->

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

    processPayment() {
      if (!this.braintreeInstance) {
        console.error('Braintree Drop-in non è stato inizializzato correttamente.');
        return;
      }

      this.braintreeInstance.requestPaymentMethod((error, payload) => {
        if (error) {
          console.error('1Errore durante il processo di pagamento:', error);
          return;
        }

        // Invia payload al backend per l'elaborazione del pagamento
        axios.post(this.store.apiUrl + 'process-payment', { paymentMethodNonce: payload.nonce })
          .then(response => {
            console.log(response.data.success);
            this.store.isLoading = true
            if (response.data.success) {
            } else {
              alert('2Errore durante il processo di pagamento.');
            }
          })
          .catch(error => {
            console.error('Errore durante il processo di pagamento:', error);
            alert('3Errore durante il processo di pagamento.');
          }).finally(() => {

            this.submitForm()
          });

      });
    },
    submitForm() {
      const data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone_number: this.phonenumber,
        address: this.address,
        products: this.store.cart,
        restaurant_id: this.store.cart[0].restaurant_id,
        amount: this.store.totalPrice,
      }
      console.log(data);
      axios.post(this.store.apiUrl + 'order', data).then((res) => {
        console.log(res.data);

        this.name = '';
        this.surname = '';
        this.email = '';
        this.phonenumber = '';
        this.address = '';
        this.store.cart = [];
        if (res.data.success) {
          if (res.data.redirect) {
            console.log('miao miao');
            this.$router.push(res.data.redirect)
          }
        }
        // Aggiorna il localStorage
      }).catch((err) => {
        console.log(err);
        console.log(err.response.data);
      }).finally(() => {
        localStorage.clear();
        this.changeRoute()
      })

    },
    changeRoute() {
      this.$router.push('/thankyou');
    }
  },
  created() {
    const savedCart = localStorage.getItem("cart");
    this.store.cart = JSON.parse(savedCart);
    const savedAmount = localStorage.getItem("amount");
    this.store.totalPrice = JSON.parse(savedAmount);
    console.log(this.store.cart
    );
    console.log(this.store.cart[0].restaurant_id);
    console.log(this.store.totalPrice);
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