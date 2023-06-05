<template>
    <section id="home" class="home">
        <div class="home-container">
            <h1 class="home-presentation">{{ typeValue }}<span class="cursor">|</span></h1>
            <p :class="presentationInfoStyle">{{presentationInfo}}</p>
        </div>
    </section>
</template>

<script setup>
    import { onMounted, ref } from "vue";

    const sentence =  "Bonjour,\nJe suis Leslie EL KATTOUSSI\nDéveloppeuse Web Junior";
    const presentationInfo = ref(null);
    const presentationInfoStyle = ref(null);
    const typeValue = ref("");
    let charIndex = 0;

    const typeEffect = () => {
        if (charIndex < sentence.length) {
            typeValue.value += sentence.charAt(charIndex);
            charIndex += 1;
            setTimeout(typeEffect, Math.floor(Math.random() * (100 - 6) + 6));
        } 
        if (charIndex === sentence.length) {
            presentationInfo.value = "28 ans, CAEN (14000)";
            presentationInfoStyle.value = "home-presentation-info";
        }

    }
    onMounted(() => {
        setTimeout(typeEffect, 2000);
    });
</script>

<style lang="scss" scoped>

    .cursor {
        color: white;
        animation: fade 1s steps(1) infinite;
        font-size: 1.5rem;
    }

    .home {
        background: transparent !important;
        max-width: 800px;
        height: 100vh; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
    }

    .home-container {
        display: flex;
        height: 30vh;
        margin-top: auto;
        margin-bottom: auto;
        flex-direction: column;
        justify-content: start;
        padding: 3rem;
    }

    .home-presentation {
        color: white;
        white-space: pre-wrap;
        font-size: 1.5rem;
    }

    .home-presentation-info {
        font-size: 1rem;
        margin-top: 20px;
        animation: fade 3s linear forwards;
        
    }

    .home {
        position: relative;
        z-index: -1;
        min-height: 250px;
    }

    @media only screen and (min-width: 768px) {
        .home-presentation, .cursor {
            font-size: 2rem;
        }
        .home {
            max-width: 800px;
        }

    }

    @keyframes fade {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }

</style>