<script setup>
</script>

<template>
  <footer>
    <router-link to="/post"><i class="fa-solid fa-plus"></i></router-link>
    <router-link to="/postList"><i class="fa-solid fa-list-ul"></i></router-link>
    <router-link to="/search"><i class="fa-solid fa-magnifying-glass"></i></router-link>
  </footer>
</template>

<style>
footer {
  width: 100%;
  background-color: grey;
  text-align: center;
}

.fa-solid {
  font-size: 30px;
  margin: 5px 45px;
  color: whitesmoke;
}

@media screen and (min-width:768px) {
  html {
    margin: 0px 20%;
  }
}

</style>