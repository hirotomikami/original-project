<script setup>
import Footer from "../footer/Footer.vue"
</script>

<template>
  <body>
    <div class="blur">
      <div class="top-element">
        <header>
          <div class="text">
            <h1>FAV S/S</h1>
          </div>
        </header>
      </div>
      <div class="main-visual">
        <div class="main-visual-text-erea">
          <h3 class="main-visual-text">
            お気に入りを共有する、見つける。
          </h3>
        </div>
      </div>
    </div>
    <div class="blur2">
      <main>
        <div class="main-text">
          <span>
            「これ、他の誰かにも共有<br>したいなぁ。」<br>
          </span>
          <span class="main-text-2">
            それ、世界中に共有しませんか？
          </span>
        </div>
        <div class="main-text">
          <span>
            「なにか良いモノないかな。」<br>
          </span>
          <span class="main-text-2">
            それ、世界中で探しましょう。
          </span>
        </div>
        <div class="main-text">
          <span>
            FAV S/Sならお気に入りを<br>広く共有し<br>
            見つけることができます。
          </span>
        </div>
        <div class="main-text">
          <span>
            映画やドラマ、音楽、洋服<br>雑貨、料理・・・<br>
          </span>
          <span class="main-text-2">
            ジャンルは無限大です。
          </span>
        </div>
        <div class="main-text">
          <span>
            さぁ、さっそくお気に入りを<br>
            投稿・検索してみましょう‼
          </span>
        </div>
      </main>
    </div>
    <Footer />
  </body>
</template>

<style scoped>
.blur {
  background: url(../../assets/img/haikei.jpg) no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 0;
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
  z-index: -1;
}

header {
  width: 100%;
}

header .text h1 {
  text-align: center;
  line-height: 150px;
  font-size: 60px;
  color: snow;
  padding-top: 20px;
  z-index: 1;
}

text {
  font-family:'Courier New', Courier, monospace;
}

.main-visual-text {
  font-size: 25px;
  color: snow;
  text-align: center;
  line-height: 100px;
}

.blur2 {
  background: url(../../assets/img/haikei2.jpg) no-repeat center;
  background-size: cover;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.blur2:before {
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

main {
  width: 100%;
}

.main-text {
  font-size: 15px;
  color: snow;
  background-color: rgba(255,255,255,0.4);
  border-radius: 150px;
  width: 300px;
  text-align: center;
  margin: 80px auto 50px;
  padding: 80px 20px;
  line-break: auto;
}

.main-text-2 {
  display: block;
  margin-top: 0.5em;
}
</style>