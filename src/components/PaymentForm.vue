<template>
  <div>
    <div id="dropin-container"></div>
    <button @click="processPayment">Paga</button>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "@/store";
export default {
  data() {
    return {
      store,
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
    }
  }
};
</script>
