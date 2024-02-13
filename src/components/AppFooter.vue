<template>
    <footer class="text-center d-flex justify-content-center align-items-center ">
    <p>Giulia's portfolio</p>
    </footer>
  </template>
  
  <script>
    export default {
      name: "AppFooter",
      data(){
        return {
          
        }
      }
    }
  </script>
  
  <style lang="scss" scoped>
  footer{
    margin: 0;
    height:10vh;
    color: white;
    background: rgb(34, 15, 73);
    background: linear-gradient(
      200deg,
      rgba(34, 15, 73, 1) 27%,
      rgba(15, 7, 39, 1) 57%,
      rgba(2, 1, 12, 1) 100%
    );
  }
  
  </style>