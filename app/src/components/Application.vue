<template>
    <a :href="url" class="service-link" target="_blank" rel="noopener noreferrer">
        {{ label }}
    </a>
</template>

<script setup>
const props = defineProps({
    label: { type: String, required: true },
    url: { type: String, required: true }
})
</script>

<style lang="css" scoped>

.service-link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: var(--text-main);
    border-radius: 20px;
    text-decoration: none;
    font-weight: 600;
    box-shadow: var(--shadow-A);
    transition: var(--transition);
}

.service-link:hover {
    box-shadow: var(--shadow-A-hover);
    transform: translateY(-5px);
}

.service-link:hover {
    box-shadow: var(--shadow-A-hover);
}

.dark .service-link  {
    box-shadow: none;
    outline: 2px solid;
    transition: var(--transition);
}
</style>