<template>
    <div>
        <div id="hero">
            <div class="hero-img"></div>
            <div class="hero-content">
                <h1>Deliveboo, dove ogni tuo desiderio è un ordine!</h1>
            </div>
        </div>
        <div class="scroller">
            <ul class="tag-list scroller_inner">
                <li v-for="(restaurant, index) in store.allRestaurants" :key="index">
                    <img :src= "`${store.imgUrl}${restaurant.image}`" :alt="restaurant.name">
                </li>
                <li v-for="(restaurant, index) in store.allRestaurants" :key="index">
                    <img :src= "`${store.imgUrl}${restaurant.image}`" :alt="restaurant.name">
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'Hero',
    data(){
        return{
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/variables';

    #hero {
        position: relative;
        height: 100vh;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/public/img/hero2.jpeg');
        background-size: cover;
        background-position: center;
        // filter: blur(3px); 
    }

    .hero-content {
        max-width: 600px;
        margin: 0 auto;
        z-index: 10;
    }

    .hero-content h1 {
        font-size: 4rem;
        margin-bottom: 20px;
        color: white; 
        text-shadow: 3px 3px 5px $lightgreen;
    }
    .tag-list{
        margin: 0;
        padding-inline: 0;
        list-style: none;
    }
    .tag-list li{
        width: 120px;
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid white;
        box-shadow: 0 0.5rem 1rem -0.25rem $darkgrey;
    }
    .tag-list li:hover{
        border: 2px solid white;
    }
    .scroller{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        max-width: 900px;
        margin: -20px auto;
        overflow: hidden;
        -webkit-mask: linear-gradient(
            90deg,
            transparent, 
            white 20%,
            white 80%,
            transparent
            );

            mask: linear-gradient(
            90deg,
            transparent, 
            white 20%,
            white 80%,
            transparent
            );
    }
    .scroller_inner{
        padding-block: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
    .scroller .scroller_inner{
        width: max-content;
        flex-wrap: nowrap;
        animation: scroll 70s linear infinite;
    }
    @keyframes scroll{
        to {
            transform: translate(calc(-50% - 0.5rem));
        }
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
    }
    @media screen and (max-width:697px) {
        .hero-content h1 {
        font-size: 3rem;
        margin-bottom: 10px;
        color: white; 
    }
    }
</style>