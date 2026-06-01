import { ref, computed } from "vue";

export function useTheme() {
    const theme = ref("light");

    const isDark = computed(() => theme.value === "dark");

    const toggleTheme = () => {
        theme.value = theme.value === "light" ? "dark" : "light";
    };

    return {
        theme,
        toggleTheme,
        isDark,
    };
}
