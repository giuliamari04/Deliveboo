<template>
  <div class="color-1">
 <div class="container">
     <h1 class="text-light display-3">Contact us</h1>
    <ContactForm ></ContactForm>
  </div>
  </div>
 
   
  
  </template>
  
  <script>
  import ContactForm from '../components/ContactForm.vue'
    export default {
      name: "AppContact",
      components: {
        ContactForm
      }
    }
  </script>
  
  <style lang="scss" scoped>
  .color-1 {
  background: rgb(34, 15, 73);
  background: linear-gradient(
    200deg,
    rgba(34, 15, 73, 1) 27%,
    rgba(15, 7, 39, 1) 57%,
    rgba(2, 1, 12, 1) 100%
  );
}
  </style>