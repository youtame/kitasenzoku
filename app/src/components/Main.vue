<script setup lang="ts">
import { ref, onMounted } from 'vue'
import mainphoto from '@/assets/photo/main.jpg'

const show = ref(false)

onMounted(() => {
    setTimeout(() => {
        show.value = true
    }, 150)
})
</script>

<template>
    <Transition name="slide-up" appear>
        <h1 v-if="show">Anything we imagine<br>we create</h1>
    </Transition>

    <Transition name="slide-up" appear>
        <img v-if="show" :src="mainphoto" alt="main photo" />
    </Transition>
</template>

<style lang="css" scoped>

h1 {
    margin: auto;
    padding: 50px;
    line-height: 100px;
    text-align: center;
    font-size: 80px;
    max-width: 1050px;
}

img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 1050px;
    border-radius: 25px;
}

.slide-up-enter-active {
    transition: all 0.8s ease;
}
.slide-up-enter-from {
    transform: translateY(50px);
    opacity: 0;
}
.slide-up-enter-to {
    transform: translateY(0);
    opacity: 1;
}

@media (max-width: 600px) {
    h1 {
        margin: auto;
        padding: 0px;
        padding-bottom: 20px;
        line-height: 50px;
        text-align: center;
        font-size: 35px;
    }

    img {
        width: 90%;
        border-radius: 15px;
    }
}

.dark h1 {
    color: inherit;
}

</style>
