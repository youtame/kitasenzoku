<template>
    <footer class="site-footer">
        <p>&copy; 2025&nbsp;102℃</p>
    </footer>
</template>
<style scoped>

.site-footer {
    margin: 80px auto 0;
    padding: 20px 20px;
    width: 80%;
    max-width: 1050px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.site-footer p {
    font-size: 24px;
    letter-spacing: 2px;
}

.dark .site-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.dark .site-footer p {
    color: #aaa;
}

</style>