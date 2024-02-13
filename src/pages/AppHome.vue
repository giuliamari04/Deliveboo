<template>
  <div>
    <!-- primo video -->
    <div class="video-background">
      <video autoplay muted loop id="video-background1" class="filter-video">
        <source
          src="/src/assets/images/Isometric Apps Development Background video _ Footage _ Screensaver.mp4"
          type="video/mp4"
        />
        Il tuo browser non supporta il tag video.
      </video>
      <div class="content content-overlay">
        <div
          class="d-flex justify-content-center align-items-center align-content-center h-100"
        >
          <div class="container h-100">
            <div class="row h-100">
              <div
                class="col-8 d-flex justify-content-center flex-column text-center text-light"
              >
                <h2 class="display-5 fw-semibold">Giulia Mariano</h2>
                <h1 class="display-1">MyPortfolio</h1>
                <h3 class="display-5">webdeveloper</h3>
              </div>
              <div class="col d-flex align-items-center">
                <div class="profile-picture overflow-hidden">
                  <img
                    src="/src/assets/images/Mee.png"
                    alt="my-image"
                    class="w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- sfondo-colore -->
    <div class="video-background color-1">
      <div class="content content-overlay">
        <div id="background-wrap">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div>
        <div class="h-100 container">
          <div class="row w-100 d-flex justify-content-center align-content-center align-items-center  h-100 ">
            <div class="col-4">
                <h2 class="text-light display-4 fw-medium   ">
            Tecnologie con cui lavoro
          </h2>
            </div>
            <div class="col-5">
              
          <div class="d-flex flex-wrap  mt-5 w-100 h-100">
            <div class="d-flex flex-wrap ">
              <div
                v-for="technology in store.technologies"
                :key="technology.id"
                class="my-icon m-4"
              >
                <img
                  :src="`${store.imgPath}image/${technology.name}.png`"
                  :alt="technology.name"
                  class="d-block w-100 "
                  :class="{
                    'invert-img':
                      technology.name === 'GitHub' || technology.name === 'PHP',
                  }"
                />
                 <span class="name-icon d-flex justify-content-center ">{{ technology.name }}</span>
              </div>
            </div>
          </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>

    <!-- secondo video -->
    <div class="video-background">
      <video autoplay muted loop id="video-background2" class="filter-video">
        <source
          src="/src/assets/images/Hud Futuristic Interface Background video _ Footage _ Screensaver.mp4"
          type="video/mp4"
        />
      </video>
      <div class="content content-overlay">
        <div
          class=" h-100"
        >
        <h2 class="text-light py-5 text-center display-4">Sono una sviluppatrice <span class="fw-medium">FullStack</span></h2> 
        <div class="div-1 border-fluid">
          <h3>Frontend</h3>
          <p>
            sono in grado si sviluppare pagine lato frontend, utilizzando linguaggi come html, css e javascript. Utilizzo vue.js e bootstrap
          </p>
        </div>
        <div class="div-2 border-fluid">
          <h3>Backend</h3>
          <p>
            sono in grado si sviluppare anche pagine lato backend utilizzando linguaggio php su Larvale
          </p>
        </div>
         
        </div>
      </div>
    </div>

    <!-- sfondo-colore -->
    <div class="video-background2 color-1">
      <div class="content content-overlay ">
       <h2 class="display-4 mt-5 text-center py-5">Progetti</h2>
        <div
          class="d-flex flex-column  align-items-center align-content-center card-container"
        >
        
        <div v-for="post in store.posts" :key="post.id">
            <AppCardsAnimation :post="post"></AppCardsAnimation>
        </div>
       
        </div>
      </div>
    </div>

    <!-- terzo video -->
    <div class="video-background">
      <video autoplay muted loop id="video-background3" class="filter-video">
        <source
          src="/src/assets/images/Graph Background video _ Footage _ Screensaver.mp4"
          type="video/mp4"
        />
        Il tuo browser non supporta il tag video.
      </video>
      <div class="content content-overlay">
        <div
          class="d-flex justify-content-center align-items-center flex-column  align-content-center h-100"
        >
        <h2 class=" display-3 ">Scopri di più sui miei progetti su </h2>
        
        <a href="https://github.com/giuliamari04" class="text-light text-decoration-none fs-1 d-flex py-5">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          </div> github.com/giuliamari04 
         </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "../store.js";
import axios from "axios";
import AppCardsAnimation from "../components/AppCardsAnimation.vue";

export default {
  name: "AppHome",

  components:{
    AppCardsAnimation,
},
  data() {
    return {
      store,
      currentPage: 1,
      totalPages: 0,
    };
  },
  methods: {
    getAllTechnologies() {
      axios.get(this.store.apiUrl + "technologies").then((res) => {
        console.log(res.data);
        this.store.technologies = res.data.results;
      });
    },
    getAllPosts(page) {
      axios.get(this.store.apiUrl + "posts?page=" + page).then((res) => {
        console.log(res.data);
        this.store.posts = this.store.posts.concat(res.data.results.data);
        this.store.pagination = res.data.results; // Assume che il backend restituisca i dati della paginazione

        if (res.data.results.next_page_url) {
          this.getAllPosts(page + 1);
        }
      });
    },
  },
  created() {
    this.getAllTechnologies();
    this.getAllPosts(1);
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/style/partials/bubble" as *;
@use "../assets/style//partials/borderfluid" as *;
.video-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.video-background2{
  position: relative;
  width: 100%;
  height:210vh;
  overflow: hidden;
}
.filter-video {
  filter: grayscale(20%) brightness(50%);
}

#video-background1,
#video-background2,
#video-background3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  color: white;

  .col-8 {
    h1,
    h2,
    h3 {
      text-shadow: 0px 0px 20px black;
    }
  }
}
.icon{
 filter: invert(1);
  svg{
    height: 40px;
    padding-right: 20px;
  }
}
.profile-picture {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 8px solid rgba(64, 43, 142, 0.59);
  -webkit-box-shadow: 0px 0px 186px 27px rgba(64, 43, 142, 0.59);
  -moz-box-shadow: 0px 0px 186px 27px rgba(64, 43, 142, 0.59);
  box-shadow: 0px 0px 186px 27px rgba(64, 43, 142, 0.59);
}
.content-overlay {
  background: rgba(0, 0, 0, 0.3); /* Aggiungi una sfumatura in overlay */
}
.invert-img {
  filter: invert(1);
}
div{
  .my-icon{
    transition: 0.5s;
    z-index: 2;
  }
  .my-icon:hover {
    transform: scale(1.4);
    cursor: pointer;

    .name-icon{
      opacity: 1;
    }
  }

  .name-icon{
    opacity: 0;
    transition: 0.5s;
  }

  .div-1{
    background-color:rgb(34, 15, 73);
    width: 30%;
    position: absolute;
    top: 30%;
    left: 10%;
    padding: 60px;
  }

  .div-2{
    background-color: rgba(0, 0, 0, 0.5);
    width: 30%;
    position: absolute;
    bottom: 30%;
    right: 10%;
    padding: 60px;
    z-index: 2;
  }

}
</style>
