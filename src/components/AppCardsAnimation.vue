<template>
   <div class="cards-container">
    <div class=" img-container" 
    :style="{ backgroundImage : `url('${dynamicBackground}')` }"
    > 
        <div class="position-absolute img-content ">
        
         <router-link :to="{ name: 'single-post', params: { slug: post.slug || ''} }" >
          <h3 class=" p-3"> {{ post.title }}</h3></router-link>
        </div>
    </div>
  
   </div>
</template>

<script>
import {store} from '../store.js';

export default {
  name:"AppCardsAnimation",

  props:['post'],
    data () {
        return {
          store,
        }
    },
    computed: {
    dynamicBackground() {
      return `${this.store.imgPath}images/${this.post.title}.png`;
    }
  },
  mounted() {
        console.log('Slug:', this.post.slug);
      },

}
</script>

<style lang="scss" scoped>
.img-container {
  width: 950px;
  height: 100px;
  position: relative;
  overflow: hidden;
  //background-image: url("../assets/images/Mee.png");
  background-position:top;
  background-size: cover;
  filter: grayscale(80%);
  filter: brightness(60%);
  transition: 1s;
}

.img-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 //background-image: url("../assets/images/Mee.png");
  background-position: center;
  background-size: contain;
  transition: 1s;
}

.img-container:hover::before {
  filter: grayscale(0%);
  filter: brightness(0%);
}

.img-container:hover{
  height:350px;
  filter: grayscale(0%);
  box-shadow:0px 0px 20px white;
  border:3px solid white;
  transition: 1s;
  .img-content{
    opacity: 1;
  }
}
.img-content{
  opacity: 1;
  width:auto;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
color: black;
 

 transition: 1s;
h3{
  background-color:rgba(64, 43, 142, 0.8);
  color: white;
  border-radius: 20px;
  font-size: 1.2em;
  text-align: center;
  transition: 1s;
}

h3:hover{
  background-color:rgba(0, 0, 0, 1);
  cursor: pointer;
}
}
</style>