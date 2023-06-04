<script setup>
import Header from './components/Header.vue';
import Profil from './components/Profil.vue';
import Projects from './components/Projects.vue';
import Home from './components/Home.vue';
import Skills from "./components/Skills.vue";
import Form from './components/Form.vue';
import Footer from './components/Footer.vue';


</script>

<template>
      <div class="parallax-container"></div>
      <Header/>
      <Home/>
      <Profil/>
      <Skills/>
      <Projects/>
      <Form/>
      <Footer/>
</template>

<style lang="scss" scoped>

.parallax-container {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    height: 100vh;
    width: 100vw;
    max-width: 100vw;
    overflow: hidden;
    z-index: -1;
    background: rgba($color: #000000, $alpha: 0.8) url("./assets/background.jpeg") center no-repeat;
    background-color: white;
    -webkit-animation: scaling 40s ease-in-out infinite alternate;
    animation: scaling 40s ease-in-out infinite alternate; 
    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-color: rgba(0,0,0,0.25);
    }
  }
    
  @keyframes scaling {
    0% {transform: scale(1.2);}
    50% { transform: scale(1)}
    100% {transform: scale(1.2)}
  }
</style>