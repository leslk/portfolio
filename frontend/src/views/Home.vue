<script setup>
import Home from '../components/Home.vue';
import Profil from '../components/Profil.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Form from '../components/Form.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

const goToSection = (name) => {
  let element = document.querySelector(`#${name}`);
  element.scrollIntoView({behavior: 'smooth'});
}

</script>

<template>
    <Header @go-to-section="goToSection"/>
    <Home/>
    <Profil/>
    <Skills/>
    <Projects/>
    <Form/>
    <Footer/>
</template>