<template>
    <font-awesome-icon :icon="skillIcon" size="3x" class="skill-icon"/>
    <h3 class="skill-title">{{skillName}}</h3>
    <el-row justify="center" :gutter="0">
        <el-col
            style="align-items: center;"
            :xs="12" 
            :sm="12" 
            :md="12" 
            :lg="10" 
            v-for="tool in skillTool" :key="tool">
            <div class="skill-tool">
                <p>{{tool}}</p>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
defineProps({
    skillIcon: String,
    skillName: String,
    skillTool: Array
})
</script>

<style lang="scss">

    .skill-icon {
        color: #597DFF;
        margin: 10px;
    }

    .skill-tool {
        background-color: rgba(#7f7f7f, 0.8);
        color: white;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
    }

    .skill-title {
        font-size: 1.5rem;
        margin: 20px;
        text-align: center;
    }

</style>