<template>
    <section class="w-100 overflow-hidden ">
        <div class="position-relative">
            <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div class="ocean2">
                <div class="wave"></div>
                <div class="wave"></div>
            </div>  
            <div class="mobile py-5 ">
                <div class="container bg-light w-75 my-5 py-4 position-relative z-3 rounded-5 p-5 cart">
                <PaymentForm/>
            </div>  
            </div>
          
        </div>
    </section>
</template>

<script>
import {store} from '../store.js';
import axios from 'axios';
import PaymentForm from '@/components/PaymentForm.vue';
export default {
    name: "AppCheckOut",
    components:{
        PaymentForm
    },
    data(){
        return {
            store,
        }
    },
    methods:{
    },
    mounted(){
        const handleMediaQueryChange = (mediaQueryList) => {
            if (mediaQueryList.matches) {
                this.store.cartOpen = false;
                // La larghezza dello schermo è inferiore a 697px
                console.log('La larghezza dello schermo è inferiore a 697px');
                // Esegui qui le azioni che desideri
            } else {
                this.store.cartOpen = true;
                // La larghezza dello schermo è superiore a 697px
                console.log('La larghezza dello schermo è superiore a 697px');
                // Esegui qui le azioni che desideri
            }
        };
        const mediaQueryList = window.matchMedia('(max-width: 697px)');
        mediaQueryList.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQueryList);
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/partials/variables';
section{
    background-color: $darkgreen;
    .container{
        z-index: 5;
       
    }
}

.ocean { 
    height: 10%;
    width:100%;
    position:absolute;
    bottom:- 5%;
    left:0;
    background: #015871;
}
.mobile{
    padding-right: 20%;
}
.ocean2 { 
    height: 10%;
    width:100%;
    position:absolute;
    top:- 5%;
    left:0;
    background: #015871;
    transform: rotate(180deg);
}

.wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x; 
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 1;
}

@media screen and (max-width:767px) {
.mobile{
    padding-right:0% ;
}
}

@keyframes wave {
    0% {
        margin-left: 0;
    }
    100% {
        margin-left: -1600px;
    }
}

@keyframes swell {
    0%, 100% {
        transform: translate3d(0,-25px,0);
    }
    50% {
        transform: translate3d(0,5px,0);
    }
}
</style>