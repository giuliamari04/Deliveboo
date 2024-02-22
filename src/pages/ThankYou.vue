<template>
  <div class="container text-center my-5">

    <div>
      <h1 class="mb-5">Grazie per il tuo ordine! <i class="fa-solid fa-circle-check"></i></h1>

      <p>Il tuo ordine è stato inviato con successo.</p>
      <p>Ti abbiamo inviato una mail di conferma, controlla nella tua posta elettronica.</p>
    </div>

    <div class="my-5">
      <p>Torna alla <router-link :to="{ name: 'home' }" class="text-decoration-none"><span
            class="home">Homepage</span></router-link></p>
    </div>

  </div>
</template>

<script>
import { store } from '@/store';
export default {
  name: 'ThankYou',
  data() {
    return {
      store
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/variables';

h1 {
  color: $lightgreen;
}

.home {
  color: $lightgreen;
}
</style>