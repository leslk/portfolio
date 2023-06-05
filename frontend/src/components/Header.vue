<template>
    <div class="header-container">
        <header :class="showNavbar">
            <RouterLink to="/">
            <img
                :src="logo"
                alt="Element Plus"
                class="header-logo"
            />
            </RouterLink>

            <nav class="header-nav__desktop">
                <ul class="header-nav-items__desktop">
                    <template v-for="menuItem in menuItems">
                        <li
                            :class="menuItemStyle"
                            @click="$emit('goToSection', menuItem.name)"
                        >
                            {{ menuItem.title }}
                        </li>
                    </template>
                    <Button 
                        :button-text="contactItem.title" 
                        @click="$emit('goToSection', contactItem.name)"
                    />
                </ul>
            </nav>

            <nav class="header-nav__tab">
            <el-drawer v-model="drawer" class="drawer" :show-close="false">
                <template #header>
                    <h1 style="color: black">LEK</h1>
                    <el-icon @click="drawer = false" class="close-icon" color="black"><Close /></el-icon>
                </template>
                <ul class="header-nav-items__tab">
                    <template v-for="menuItem in menuItems">
                        <li
                            class="header-nav__tab-links"
                            @click="drawer = false; $emit('goToSection', menuItem.name)"
                        >
                            {{ menuItem.title }}
                        </li>
                    </template>
                    <Button 
                        :button-text="contactItem.title"
                        @click="drawer = false; $emit('goToSection', contactItem.name)"
                    />
                </ul>
            </el-drawer>
            </nav>
            <div :class="toggleStyle" @click="drawer = true">
                <font-awesome-icon icon="fa-solid fa-bars" size="2x"/>
            </div>
      </header>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import Button from './button/Button.vue';
    import logo from '../assets/logo.png';
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    defineEmits(['goToSection']);
    const route = useRoute();
    console.log(route.path);

    const drawer = ref(false);
    const menuItems = [
        {
            title: "Accueil",
            name: "home"
        },
        {
            title: "Profil",
            name: "profil"
        }
        ,{
            title: "Compétences",
            name: "skills"
        },
        {
            title: "Projets",
            name: "projects"
        }
    ];

    const contactItem =  {
            title: "Contact",
            name: "contact"
        }

    let scrollValue = ref(0);
    let lastScrollPosition = ref(0);
    let showNavbar = ref('header');
    let menuItemStyle = ref("header-nav__desktop-links menu-item-white");
    let toggleStyle = ref("toggle toggle-white");

    const updateScrollPosition = () => {
        scrollValue.value = window.pageYOffset || document.documentElement.scrollTop;
        if (window.pageYOffset < 0) {
            return
        }
        if (Math.abs(scrollValue - lastScrollPosition) < 30) {
            return
        }
        if (scrollValue.value > lastScrollPosition.value && scrollValue.value > 70) {
            showNavbar.value = "header header-fadeout";
        }
        if (scrollValue.value < lastScrollPosition.value && scrollValue.value < 70) {
            showNavbar.value = "header bg-fadeout";
            menuItemStyle.value = "menu-item-white";
            toggleStyle.value = "toggle toggle-white";
        }
        if (scrollValue.value - lastScrollPosition.value < -2) {
            if (scrollValue.value > 70) {
                showNavbar.value = "header bg-and-header-fadein";
                menuItemStyle.value = "menu-item-black";
                toggleStyle.value = "toggle toggle-black";

            }
        }
        if (scrollValue.value > lastScrollPosition.value) {
            showNavbar.value = "header bg-and-header-fadeout";
        }
        lastScrollPosition.value = scrollValue.value;
    }

    onMounted(() => {
        window.addEventListener("scroll", updateScrollPosition)
    })
</script>

<style lang="scss">

    .toggle-white {
        cursor: pointer;
        color: white;
    }

    .toggle-black {
        cursor: pointer;
        color: black;
    }

    .drawer.el-drawer {
        width: 50% !important;
        background-color: rgba($color: white, $alpha: 0.8);
        color: black;
    }

    .drawer.el-drawer .el-drawer__body {
        padding: 40px;
    }

    .header-nav__desktop {
        display: none;
    }

    .header-logo {
        width: 80px;
    }

    .bg-and-header-fadein{
       animation: fadein-bg 500ms ease-out forwards, fadein 500ms ease-out forwards;
    }

    .bg-and-header-fadeout{
        animation: fadeout-bg 500ms ease-out forwards, fadeout 500ms ease-out forwards;
     }

    .bg-fadeout {
        animation: fadeout-bg 500ms ease-out forwards;
    }

    .header-fadeout {
       animation: fadeout 500ms ease-out forwards;
    }

    .header-nav__tab.el-overlay {
        background-color: transparent !important;
    }

    .header-container {
        position: absolute;
        width: 100vw;
        top: 0;
    }
    .header {
        z-index: 2;
        padding-right: 50px;
        padding-left: 50px;
        position: fixed;
        width: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu-item-white {
        cursor: pointer;
        color: white;
        font-size: 20px;
    }

    .menu-item-black {
        cursor: pointer;
        color: black;
        font-size: 20px;
    }

    li {
        list-style-type: none;
    }

    .toggle, .header-nav__tab {
        cursor: pointer;
        display: flex;
    }

    .header-nav-items__tab {
        color: black;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: auto;
        gap: 20px;
    }

    @media only screen and (min-width: 768px) {
        .drawer.el-drawer {
            width: 35% !important;
        }
    }

    @media only screen and (min-width: 998px) {
        .toggle, .header-nav__tab {
            display: none;
        }
    
        .header-nav__desktop {
            display: flex;
        }

        li {
            display: flex;
            align-items: center;
        }
    
        .header-nav-items__desktop {
            align-items: center;
            align-items: center;
            display: flex;
            gap: 20px;
        }
    } 
    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeout-bg {
        from {
            background-color: rgba($color: white, $alpha: 0.9);
        }
        to {
            background-color: transparent;
        }
    }

    @keyframes fadein-bg {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba($color: white, $alpha: 0.9);
        }
    }

</style>