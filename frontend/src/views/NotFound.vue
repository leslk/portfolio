<template>
    <div class="not-found-container">
        <div class="text-container">
            <h2 class="not-found-number">404</h2>
            <h1 class="not-found-text">La page recherchée est introuvable</h1>
            <RouterLink to="/">
                <Button button-text="Retour à l'accueil"/>
            </RouterLink>
        </div>
    </div>
    
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import Button from '../components/button/Button.vue';
</script>

<style lang="scss" scpoed>

.not-found-number {
    font-size: 5rem;
}
.not-found-text {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.text-container {
    background-color: rgba($color: white, $alpha: 0.6);
    margin: 20px;
    padding: 30px;
    width: 70%;
    height: 50vh;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.not-found-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>