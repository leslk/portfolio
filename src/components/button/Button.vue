<template>
    <el-button
        type="primary"
        class="header-contact-button"
        size="large"
    >
        {{ buttonText }}
    </el-button>
</template>

<script setup>
defineProps({
    buttonText: String
})
</script>