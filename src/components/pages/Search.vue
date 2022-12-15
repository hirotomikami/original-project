<script setup>
import Footer from "./footer/Footer.vue"
</script>

<template>
  <div class="blur">
    <main>
      <div class="form-area">
        <form class="form-search" action="サイトＵＲＬ" method="get">
          <input class="search-input" type="search" name="search" placeholder="キーワードを入力">
        </form>
      </div>
      <i class="fa-solid fa-magnifying-glass"></i>
    </main>
  </div>
  <Footer />
</template>

<style scoped>
 .blur {
 background: url(src/img/haikei.jpg) no-repeat center;
  background-size: cover;
  position: relative;
  z-index: -1;
  overflow: hidden;
}

.blur:before {
  content: '';
  background: inherit;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -2;
}

header {
  width: 100%;
  height: 300px;
}

main {
  width: 100%;
  height: 800px;
}

.form-search {
  width: 200px;
  margin: 50px auto;
}

.search-input {
  margin: 0px auto;
  width: 100%;
  height: 40px;
  border-radius: 100px;
  font-size: 15px;
  text-align: center;
  background-color: rgba(255,255,255,0.1);
  font-weight: bold;
  border: solid 2px grey;
}

.search-input::placeholder {
  color: snow;
}

.fa-magnifying-glass {
  position: absolute;
  top: 50px;
  right: 2px;
  color: snow;
  font-size: 30px;
}
</style>