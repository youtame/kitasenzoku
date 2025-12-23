<script setup lang="ts">
import Application from './Application.vue'
</script>

<template>
    <h1 id="application">Application</h1>
    <div class="service-links">
        <Application label="TASM" url="https://lozdo.com/tasm"/>
        <Application label="Clock" url="https://lozdo.com/clock"/>
        <Application label="Site for Train" url="https://youtame.github.io/enzan/"/>
        <Application label="Template" url="https://lozdo.com/template"/>
        <Application label="retration" url="https://lozdo.com/retration"/>
    </div>
</template>

<style lang="css" scoped>
h1 {
    margin: auto;
    padding: 50px;
    line-height: 100px;
    text-align: center;
    font-size: 60px;
    max-width: 1050px;
}

.service-links {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    max-width: 1050px;
    justify-content: center;
    margin: auto;
}

@media (max-width: 1079px) {
    h1 {
        padding: 25px;
        font-size: 65px;
    }
}

@media (max-width: 680px) {
    h1 {
        padding: 10px;
        font-size: 45px;
    }
}
</style>