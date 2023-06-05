<template>
    <section id="projects">
        <Title title="MES PROJETS"/>
        <div class="projects-container">
            <vueper-slides
                fade
                class="no-shadow"
                style="margin-left: 20px, margin-right: 20px;"
                :visible-slides="2"
                slide-multiple
                :arrows-outside="false"
                :dragging-distance="70"
                :gap="5"
                :slideImageInside="true"
                :breakpoints="{ 998: { visibleSlides: 1, slideMultiple: 1 } }"
            >
                <vueper-slide v-for="projectsItem in projects" :key="projectsItem.name" :image="projectsItem.src" :content="projectsItem.content" :link="projectsItem.link" target="_blank" @mouseover="hoverItem = projectsItem.name;" @mouseleave="hoverItem = null;"/>
            </vueper-slides>
        </div>
    </section>
</template>

    <script setup>
    import { ref } from "vue";
    import Bombers from "../assets/bombers.png";
    import portfolio from "../assets/portfolio.png";
    import Title from "./title/Title.vue";
    import { VueperSlides, VueperSlide } from 'vueperslides';
    import 'vueperslides/dist/vueperslides.css'

    const hoverItem = ref(null);
    const projects = [

                {
                    name: "BOMBERS",
                    src: Bombers,
                    link: "https://bombers-original-partenariats.com/home"
                },
                {
                    name: "PORTFOLIO",
                    src: portfolio,
                    link: "titi"

                }
    ]

</script>

<style lang="scss">
    .vueperslide__content {
        color: white;
        margin-top: 70px;
    }

    .vueperslides__parallax-wrapper {
        height: 300px !important;
        padding-bottom: 0 !important;
    }

    .vueperslide__image {
        border: 4px solid white;
    }

    .vueperslides__arrow svg {
       width: 3rem; 
    }

    .projects-container {
        margin-bottom: 50px;
    }

    .projects-image-container {
        padding-bottom: 20px;
        //position: relative;
        //z-index: 0;
    }

    .projects-image {
        width: 100%;
        border: 4px solid white;
    }

    .projects-button {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
          

    @media only screen and (min-width: 768px) {
        .vueperslides__parallax-wrapper {
            height: 400px !important;
        }
        .projects-container {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            justify-content: center;
            align-items: center;
            gap: 40px;
            flex-wrap: wrap;
        }
    }
    @media only screen and (min-width: 998px) {
        .vueperslides__parallax-wrapper {
            height: 350px !important;
        }
        .vueperslides {
            max-width: 1000px;
            margin: auto;
        }
    }
</style>
