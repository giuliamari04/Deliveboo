<template>
  <footer
    class="text-center d-flex justify-content-center align-items-center flex-column"
  >
  <div class="container-fluid ">
    <div class="row justify-content-center  pt-5">
      <section class="col-12 col-md-2 mx-2 py-3">
        <ul>
          <h5>Scopri DeliveBoo</h5>
          <li>
            <a href="#">Investitori</a>
          </li>
          <li>
            <a href="#">Chi siamo</a>
          </li>
          <li>
            <a href="#">Ristoranti</a>
          </li>
          <li>
            <a href="#">Altro</a>
          </li>
          <li>
            <a href="#">Pressroom</a>
          </li>
          <li>
            <a href="#">Programmazione</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Lavora con noi</a>
          </li>
          <li>
            <a href="#">Diventa nostro partner</a>
          </li>
        </ul>
      </section>
      <section class="col-12 col-md-2 mx-2 py-3">
        <ul>
          <h5>Note legali</h5>
          <li>
            <a href="#">Termini & Condizioni</a>
          </li>
          <li>
            <a href="#">Informazioni sulla privacy</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li>
            <a href="#">Richiesta da parte delle Autorità Pubbliche</a>
          </li>
        </ul>
      </section>
      <section class="col-12 col-md-2 mx-2 py-3">
        <ul>
          <h5>Aiuto</h5>
          <li>
            <a href="#">Contatti</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Tipi di cucina</a>
          </li>
        </ul>
      </section>
      <section class="my-col mx-2 py-3">
        <ul>
          <h5>Porta DeliveBoo con te</h5>
          <div class="py-2">
            <a href="#"><span class="ccl-adc3fa3abc4cc903 ccl-ab1fd26be7392370"
              >Scarica la app di DeliveBoo sull'App Store</span
            ></a>
          </div>
          <div>
            <a href="#"> <span class="ccl-33a3b69a297be724"
              ><span class="ccl-adc3fa3abc4cc903 ccl-4e322aac86952a9e"
                >Scarica la app di DeliveBoo sull'App Store</span
              ></span></a>
          </div>
        </ul>
      </section>
    </div>
    <div class="text-light w-100 text-start icon py-3">
      <span><a href="#"><i class="fa-brands fa-facebook"></i></a></span>
      <span><a href="#"><i class="fa-brands fa-twitter"></i></a></span>
      <span><a href="#"><i class="fa-brands fa-instagram"></i></a></span>
    </div>
  </div>
   
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;
footer {
 
  background-color: $darkgrey;
}
section {
  background-color: $grey;
  color: white;
  text-align: start;
  ul {
    h5 {
      font-weight: 600;
    }
    li {
      list-style: none;
      a {
        color: white;
        text-decoration: none;
        font-size: 0.9em;
      }
      a:hover {
        color: $lightgreen;
      }
    }
  }
}
.my-col{
  width: 16.66666667%;
}
.ccl-adc3fa3abc4cc903:lang(it) {
  background-image: url(https://consumer-component-library.roocdn.com/27.1.19/static/images/app-store-badges-it.svg);
}
.ccl-ab1fd26be7392370 {
  background-position: 0 0;
}
.ccl-ab1fd26be7392370 {
  background-position: 0 0;
}
.ccl-4e322aac86952a9e {
  background-position: -135px 0;
}
.ccl-adc3fa3abc4cc903 {
  width: 135px;
  height: 40px;
  display: inline-block;
  text-indent: -9999px;
  background-repeat: no-repeat;
  background-size: 270px 40px;
  background-image: url(https://consumer-component-library.roocdn.com/27.1.19/static/images/app-store-badges-it.svg);
}

.icon{
  padding-left: 14%;
  a{
    color: white;
  }
  i{
    padding-left: 10px;
    font-size: 1.3em;
  }
  a:hover{
    color:$lightgreen;
  }
}

@media screen and (max-width:1200px){
 .my-col{
  width: 53%;
  margin-top: 15px;
 }
 .icon{
  padding-left: 45%;
 }
}

@media screen and (max-width:769px){
 .my-col{
  width: 100%;
 }
}
</style>
