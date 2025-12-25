<template>
    <header>
        <h1>102℃</h1>
        <nav class="right">
            <a href="#about">About</a>
            <a href="#application">App</a>
            <button class="mode" @click="toggleTheme" aria-label="Toggle theme">
                <template v-if="theme === 'light'">
                    <p>Dark</p>
                </template>
                <template v-else>
                    <p>Light</p>
                </template>
            </button>
        </nav>
    </header>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>

<style scoped>

header {
    padding: 0 30px;
    width: 100%;
    max-width: 1050px;
    display: flex;
    align-items: center;
}

h1 {
    font-size: 40px;
}

.right {
    margin-left: auto;
    display: flex;
    gap: 30px;
}

button {
    background: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    font: inherit;
}

a, button{
    color: var(--text-main);
    padding: 14px 28px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 600;
    box-shadow: var(--shadow-A);
    transition: var(--transition);
}
a:hover, button:hover {
    box-shadow: var(--shadow-A-hover);
    transform: translateY(-2px);
}

@media (max-width: 600px) {
    header {
        flex-direction: column;
        text-align: center;    
        gap: 15px;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    h1 {
        font-size: 45px;
    }

    .right {
        margin: auto;
        justify-content: flex-start;
    }

    a {
        padding: 10px 23px;
        border-radius: 15px;
        font-size: 17px;
    }

}

.dark a, .dark button {
    box-shadow: none;
    outline: 2px solid;
}

.dark a:hover, button:hover {
    box-shadow: none;
}
</style>