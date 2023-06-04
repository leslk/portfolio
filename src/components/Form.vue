<template>
    <section class="form-container">
            <div style="text-align: center;">
              <Title class="form-title" title="Formulaire de contact"/>
            </div>
            <el-form :model="form" class="form" label-position="top">
                <Input v-model="form.name" label="Nom"/>
                <Input v-model="form.firstName" label="Prénom"/>
                <Input v-model="form.email" label="Email"/>
              <el-form-item v-model="form.message" label="Message">
                <textarea class="textarea" rows="5" cols="33"/>
              </el-form-item>
              <div class="button-container">
                  <Button button-text="Envoyer"/>
              </div>
            </el-form>
    </section>
</template>

<script setup>
    import Title from "./title/Title.vue";
    import Input from "./input/Input.vue";
    import Button from './button/Button.vue';
    import { reactive } from 'vue';

    const form = reactive({
    name: '',
    firstName: '',
    email: '',
    message: '',
    });
</script>

<style lang="scss">
    .textarea {
        font-size: 16px;
        font-weight: 200;
        padding: 10px;
        border-width: 0;
        border-style: none;
        outline: none;
        color: white;
        width: 100%;
        background-color: transparent !important;
        box-shadow: none !important;
        border: 1px solid white;
        border-radius: 5px;
    }

    .form-container {
        color: white;
        width: 100%; 
        background-color: rgba($color: black, $alpha: 0.6);
    }

    .form {
        max-width: 500px; 
        margin: auto
    }

    .form-title {
        font-size: 30px !important;
    }

    .button-container {
        margin: 50px;
        display: flex;
        justify-content: center;
    }

    .el-textarea__inner {
        background-color: transparent !important;
        box-shadow: none !important;
        border: 1px solid white !important;
        border-radius: 0 !important;
    }
</style>