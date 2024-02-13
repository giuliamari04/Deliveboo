<template>
    <form class="container" @submit.prevent="submitForm">
      <div class="mb-3">
      <label for="name" class="form-label">Your name</label>
      <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
      <div id="nameHelp" class="form-text">Insert your name</div>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">Your address</label>
      <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
      <div id="addressHelp" class="form-text">Insert your address</div>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Your message</label>
      <textarea name="message" id="message" class="form-control" cols="30" rows="10" v-model="message"></textarea>
      <div id="messageHelp" class="form-text">Insert your message</div>
    </div>
    
    <button type="submit" class="btn btn-primary me-3">Submit</button>
    <button type="reset" class="btn btn-secondary">Reset</button>
  
  </form>
  </template>
  
  <script>
  import {store} from '../store.js';
  import axios from 'axios';
    export default {
      name: "ContactForm",
      data(){
        return {
          store,
          name:'',
          email:'',
          address:'',
          message:''
        }
      },
      methods:{
        submitForm(){
          const data = {
            name: this.name,
            email: this.email,
            address: this.address,
            message: this.message
          }
          axios.post(this.store.apiUrl + 'contacts', data).then((res) => {
            console.log(res.data);
            this.name = '';
            this.email = '';
            this.address = '';
            this.message = '';
          }).catch((err) => {
            console.log(err);
            console.log(err.response.data);

          })
        }
      }
    }
  </script>
  
  <style lang="scss" scoped>
   .container{
    height: 83vh;
  }
  label{
    color: white;
  }
  .form-text{
    color: white;
  }
  </style>