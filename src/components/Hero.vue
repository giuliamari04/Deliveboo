<template>
    <div id="hero">
        <div class="hero-content">
            <h1>I piatti dei ristoranti che ami e la spesa, a domicilio</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Hero'
    }
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables";

    #hero{
        position: relative;
        height: 100vh;
        background-image: url('/public/img/hero.jpeg');
        background-size: cover;
        background-position: center;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hero-content{
        max-width: 600px;
        margin: 0 auto;
    }
    .hero-content h1{
        font-size: 3rem;
        margin-bottom: 20px;
        color: black;
    }
</style>