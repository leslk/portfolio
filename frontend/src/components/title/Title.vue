<template>
    <div class="title-container">
        <h2 class="title">{{title}}</h2>
    </div>
</template>

<script setup>
    defineProps({
        title: String
    })
</script>

<style lang="scss">
    .title-container {
        max-width: 700px;
        margin: auto;
    }

    .title {
        font-size: 2rem;
        margin: 50px;
        text-align: center;
    }
</style>