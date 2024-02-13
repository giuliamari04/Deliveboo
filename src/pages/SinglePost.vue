<template>
  <div class="color-1">
    <div class="container">
      <h1 class="text-light display-5 py-3 py-3">{{ post.title }}</h1>
      <div class="mb-3">
        <!-- <div v-if="count(post.category)>0">
          <span class="badge bg-primary text-decoration-none me-1 ">{{ post.category.name}}</span>
        </div>-->
        <!-- <div v-if="count(post.technology)>0"> -->
        
        </div> 
    
      <!-- </div> -->
      <div class="row py-4">
        <div class="col">
           <img :src="`${store.imgPath}images/${post.title}.png`" :alt="post.title"> 
        </div> 
        <div class="col">
          <h3 class="text-light">Descriprion</h3>
          <p class="text-light">
             {{ post.body }}
          </p>
          <h3 class="text-light py-2">Technologies</h3>
          <div>
            <span  v-for="technology in post.technologies" class="badge bg-secondary mx-1 p-2">
              {{ technology.name}}
            </span>
          </div>
     
    </div>
      </div>
   
    
    </div>
  </div>
    
  </template>
  
  <script>
  import axios from 'axios';
  import {store} from '../store.js';
    export default {
      name: "SinglePost",
      data(){
        return {
          store,
          post: null,
          technologies: null
        }
      },
      methods: {
        getPostData(){
          axios.get (this.store.apiUrl + 'posts/' + this.$route.params.slug).then((res) => {
            console.log(res.data);
            this.post = res.data.results;
          }).catch((err) => {
            console.log(err);
          })
        }
      },
      created(){
        console.log('Created Slug:', this.$route.params.slug);
        this.getPostData()
      },
      mounted() {
  console.log('Mounted Slug:', this.$route.params.slug);
},

    }
  </script>
  
  <style lang="scss" scoped>
  img{
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 5px 5px 40px rgb(215, 154, 255);
  }
  .container{
    height: 83vh;
  }
  .row{
    height: 69.4vh;
  }
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