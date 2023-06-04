
<template>
    <el-form-item class="input-label" :label="label">
        <input class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
    </el-form-item>
</template>

<script setup>
defineProps({
    label: String,
    modelValue: String
});

defineEmits(['update:modelValue']);
</script>

<style lang="scss">
    .el-form-item__label {
        color: white !important;
        font-size: 20px !important;
    }

    .input, input:active, input:focus, input:hover, input:focus-visible {
        padding: 5px;
        font-size: 16px;
        font-weight: 200;
        border-width: 0;
        border-style: none;
        outline: none;
        color: white;
        width: 100%;
        background-color: transparent !important;
        box-shadow: none !important;
        border-bottom: 1px solid white;
        border-radius: 0 !important;
    }

    .el-input__Inner {
        color: white !important;
    }
</style>