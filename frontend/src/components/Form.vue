<template>
    <section id="contact" class="contact">
            <div style="text-align: center; max-width: 700px; margin: auto;">
              <h2 class="form-title">Pour plus d'informations, vous pouvez me contacter via ce formulaire </h2>
            </div>
            <el-form :model="form" class="form" label-position="top" :rules="rules" ref="contactForm">
                <el-form-item class="input-label" label="Nom" prop="lastName">
                    <el-input class="input" v-model="form.lastName" prop="lastName"/>
                </el-form-item>
                <el-form-item class="input-label" label="Prénom" prop="firstName">
                    <el-input class="input" v-model="form.firstName" prop="firstName"/>
                </el-form-item>
                <el-form-item class="input-label" label="Email" prop="email">
                    <el-input class="input" v-model="form.email" prop="email"/>
                </el-form-item>
                <el-form-item class="input-label" label="Message" prop="message">
                    <el-input type="textarea" v-model="form.message" rows="5" cols="33"/>
                </el-form-item>
              <div class="button-container">
                  <Button 
                        button-text="Envoyer"
                        @click="handleForm"
                        v-loading.fullscreen.lock="fullscreenLoading"
                   />
              </div>
            </el-form>
    </section>
</template>

<script setup>
    import Title from "./title/Title.vue";
    import Input from "./input/Input.vue";
    import { ElMessageBox } from "element-plus";
    import Button from './button/Button.vue';
    import { reactive, ref } from 'vue';
    import axios from "axios";

    const contactForm = ref()
    const form = reactive({
    lastName: '',
    firstName: '',
    email: '',
    message: '',
    });

    const fullscreenLoading = ref(false)

    const rules = {
        lastName: [
            { required: true, message: 'Veuillez renseigner un nom', trigger: 'blur' },
        ],
        firstName: [
        { required: true, message: 'Veuillez renseigner un prénom', trigger: 'blur' }
        ],
        email: [
        { required: true, message: 'Veuillez renseigner un e-mail', trigger: 'blur' },
        {
          type: 'email', message: 'Veuillez entrer un e-mail valide', trigger: ['blur', 'change']}
        ],
        message: [
        { required: true, message: 'Veuillez saisir un message', trigger: 'blur' }
        ],
        }

    const handleForm = (e) => {
        contactForm.value.validate((valid) => {
            if (valid) {
                e.preventDefault();
                fullscreenLoading.value = true;
                axios.post(
                    `${import.meta.env.VITE_API_URL}/api/email`,
                    form
                )
                .then(async (res) => {
                    if (res.status === 200) {
                        if(contactForm) {
                            contactForm.value.resetFields();
                            fullscreenLoading.value = false;
                            ElMessageBox.alert(
                                "Votre message à bien été envoyé",
                                {
                                    confirmButtonText: 'OK',
                                    type: "primary",
                                    customClass: "msg-box",
                                    showClose: false
                                }
                            )
                        }
                    }
                })
                .catch((err) => {
                    contactForm.value.resetFields();
                    fullscreenLoading.value = false;
                    ElMessageBox.alert(
                                "Une erreur est survenue, Veuillez reéssayer utlérieurement",
                                {
                                    confirmButtonText: 'OK',
                                    type: "primary",
                                    customClass: "msg-box",
                                    showClose: false
                                }
                            )
                });
            } else {
                return false;
            }

        })
    }

</script>

<style lang="scss">
    .msg-box {
        padding: 20px;
    }

    .input.el-input {
        padding: 5px;
        font-size: 16px;
        font-weight: 200;
        border-width: 0;
        border-style: none;
        outline: none;
        color: white;
        width: 100%;
    }

    .contact {
        color: white;
        width: 100%; 
        background-color: rgba($color: black, $alpha: 0.6);
    }

    .form {
        max-width: 500px; 
        margin: auto
    }

    .form-title {
        font-size: 1.5rem;
        margin: 50px;
    }

    .button-container {
        margin: 50px;
        display: flex;
        justify-content: center;
    }

</style>