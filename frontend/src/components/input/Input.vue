
<template>
    <el-form-item class="input-label" :label="label" :prop="prop">
        <el-input class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
    </el-form-item>
</template>

<script setup>
defineProps({
    label: String,
    modelValue: String,
    prop: String
});

const dispatchValue = (e) => {
    modelValue = e,
    $emit(input, e)
}

defineEmits(['update:modelValue']);
</script>

<style lang="scss">
    
</style>