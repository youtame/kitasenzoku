
import { ref, watchEffect } from 'vue'

const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const theme = ref(systemPrefersDark ? 'dark' : 'light')

function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}

watchEffect(() => {
    document.body.className = theme.value
})

export function useTheme() {
    return {
        theme,
        toggleTheme
    }
}