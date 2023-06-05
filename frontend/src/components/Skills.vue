<template>
    <section id="skills" class="skills">
        <Title title="MES COMPÉTENCES"/>
        <el-row class="skills-container" justify="center" :gutter="20">
            <el-col
                :xs="24" 
                :sm="10" 
                :md="8" 
                :lg="8" 
                v-for="skill in skills" :key="skill.name">
                <div class="skills-container">
                    <Skill :skill-icon="skill.icon" :skill-name="skill.name" :skill-tool="skill.tools"/>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script setup>
    import Skill from "./skill/Skill.vue";
    import Title from "./title/Title.vue";

    const skills = [

        {
            icon: 'fas-solid fa-gear',
            name: "Backend",
            tools: ["Nodejs", "Express", "MongoDB", "Nodemailer", "Firebase"],
        },
        {
            icon: 'fas-solid fa-code',
            name: "Frontend",
            tools: ["HTML", "CSS", "Javascript","Dart", "Vuejs", "Reactjs", "Flutter", "Bootstrap", "Typescript"],
        },
        {
            icon: 'fas-solid fa-code-fork',
            name: "Autres",
            tools: ["Git", "Github", "Azure", "Trello"],
        }
    ]

</script>

<style lang="scss" scoped>

    .skills-container {
        margin-bottom: 50px;
    }

    .skills {
        color: white !important;
        background-color: rgba($color: black, $alpha: 0.6);
    }

    .skills-container {
        padding: 20px;
        text-align: center;
    }
</style>