<template>
    <div class="card d-flex justify-content-between border-0 p-1 bg-transparent  ">
      <img :src="`${store.imgPath}images/${post.title}.png`" :alt="post.title" class="card-top"> 
      <p class="card-text text-light ">{{ post.body.substring(0, 80) + '...' }}</p>
      <router-link :to="{ name: 'single-post', params: { slug: post.slug || ''} }" class="btn btn-light my-1">
        {{ post.title }}</router-link>
  
    </div>
  </template>
  
  <script>
  import {store} from '../store.js';
    export default {
      name: "AppCard",
      props: ['post'],
      data(){
        return {
          store
        }
      },
      mounted() {
        console.log('Slug:', this.post.slug);
      },
    }
  </script>
  
  <style lang="scss" scoped>
  .card{
    height: 100%;
  }
  .card-top{
    width: 100%;
    height: 200px;
  }
  
  </style>