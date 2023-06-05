<template>
    <footer class="footer">
        <el-row justify="center" :gutter="0">
            <el-col 
                :xs="24" 
                :sm="10" 
                :md="8" 
                :lg="8" 
            >
                <div class="social-network-container">
                    <a href="https://github.com/leslk" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-square-github" size="2x" class="skill-icon"/>
                    </a>
                    <a href="https://fr.linkedin.com/in/leslie-el-kattoussi-9851a31bb" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" class="skill-icon"/>
                    </a>
                </div>
            </el-col>
            <el-col
                :xs="12" 
                :sm="12" 
                :md="12" 
                :lg="12"
            >
                <div class="contacts-container">
                    <div class="contact-container">
                        <font-awesome-icon icon="fa-solid fa-at" size="1x" class="skill-icon"/>
                        <a href="mailto:Leslieelkattoussi@gmail.com"><p>Leslieelkattoussi@gmail.com</p></a>
                    </div>
                    <div class="contact-container">
                        <font-awesome-icon icon="fa-solid fa-phone" size="1x" class="skill-icon"/>
                        <p>+33 06 10 31 64 02</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <div class="info-container">
                    <p class="copyright">Copyright 2023 - Leslie EL KATTOUSSI - Tous droits réservés</p>
                </div>
            </el-col>
        </el-row>

    </footer>
</template>

<style lang="scss">
    .footer {
        background-color: white;
    }

    .social-network-container, .contacts-container, .info-container {
        padding: 20px;
        text-align: center;
        p {
        font-size: 16px;
        }
    }
    .contact-container, .info-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .copyright {
        color: #597dff;
        padding: 10px;
        border-top: 1px solid #597dff;
        &::before {
            content: "© ";
        }
    }
</style>