<template>
    <div id="hero">
        <div class="hero-img"></div>
        <div class="hero-content">
            <h1>I piatti dei ristoranti che ami e la spesa, a domicilio</h1>
        </div>

        <div class="container scroll-carousel">
        <div class="scroll" style="--t:70s">
            <div>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
            </div>
            <div>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
            </div>
        </div>
        <div class="scroll" style="--t:60s">
            <div>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
            </div>
            <div>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
                <span>Deliveboo</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
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
        background-image: url('/public/img/hero.jpeg');
        background-size: cover;
        background-position: center;
        filter: blur(3px); 
    }

    .hero-content {
        max-width: 600px;
        margin: 0 auto;
        z-index: 10;
    }

    .hero-content h1 {
        font-size: 4rem;
        margin-bottom: 20px;
        color: black; 
    }

    .scroll{
        position: relative;
        display: flex;
        width: 100%;
        overflow: hidden;
        -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
        align-content: center;
    }
    .scroll div{
        white-space: nowrap;
        animation: animate var(--t) linear infinite;
        animation-delay: calc(var(--t) * -1);
        margin-bottom: 20px;
    }
    .scroll div:nth-child(2){
        animation: animate2 var(--t) linear infinite;
        animation-delay: calc(var(--t) / -2);
    }
    @keyframes animate{
        0%
        {
            transform: translateX(100%);
        }
        100%
        {
            transform: translateX(-100%);
        }
    }
    @keyframes animate2{
        0%
        {
            transform: translateX(0);
        }
        100%
        {
            transform: translateX(-200%);
        }
    }
    .scroll div span{
        display: inline-flex;
        margin: 10px;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        background-color: $lightgreen;
        opacity: 0.5;
        color: white;
        padding: 5px 10px;
        border: 2px solid $darkgreen;
        border-radius: 5px;
    }
    .scroll div span:hover{
        background-color: $lightgreen;
        cursor: pointer; 
    }

</style>