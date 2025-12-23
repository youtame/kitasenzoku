<script setup lang="ts">
import aboutphoto from '@/assets/photo/about.jpg'
</script>

<template>
    <h1 id="about">About</h1>

    <div class="about-main">
        <p>102℃ is a website developed by a team of front-end developers and passionate coders. It also brings together many other creative professionals who contribute to building unique web experiences.</p>
        <img :src="aboutphoto" alt="about photo" />
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

.about-main {
    display: flex;       
    align-items: center;  
    justify-content: space-between;
    max-width: 1050px;
    border-radius: 25px;
    margin: auto;
    gap: 20px;
    box-shadow: var(--shadow-B);              
}

.about-main p {
    width: 50%;     
    max-width: 500px; 
    font-size: 30px;
    text-align: justify;
    line-height: 2; 
    margin: 30px 0px 30px 30px;
}

.about-main img {
    margin: 30px 30px 30px 0px;
    width: 40%;              
    max-width: 500px;   
    border-radius: 25px;
}

@media (max-width: 1079px) {
    h1 {
        padding: 25px;
        font-size: 65px;
    }

    .about-main {
        margin: 20px;
        flex-direction: column;
        align-items: center;
    }

    .about-main img {
        width: 90%;
        max-width: 600px;
        height: 450px;
        object-fit: cover;
        object-position: center;
        margin: 10px 0px 10px 0px;
    }

    .about-main p {
        width: 90%;
        font-size: 25px;
        margin: 20px 0px 10px 0px;
    }
}

@media (max-width: 680px) {
    h1 {
        padding: 10px;
        font-size: 45px;
    }

    .about-main {
        margin: 20px;
        flex-direction: column;
        align-items: center;
    }

    .about-main img {
        width: 90%;
        max-width: 600px;
        height: 450px;
        object-fit: cover;
        object-position: center;
        margin: 10px 0px 10px 0px;
    }

    .about-main p {
        width: 90%;
        font-size: 19px;
        margin: 20px 0px 10px 0px;
    }
}

.dark .about-main  {
    box-shadow: none;
    outline: 2px solid;
}
</style>
