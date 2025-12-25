<script setup lang="ts">
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Applications from './components/Applications.vue'
import Footer from './components/Footer.vue'
import { useTheme } from './composables/useTheme'

const { isDark } = useTheme()
</script>

<template>
  <div :class="{ dark: isDark }">
    <div class="header-wrapper">
      <Header />
    </div>
    <div class="main-wrapper">
      <Main />
    </div>
    <div class="about-wrapper">
      <About />
    </div>
    <div class="application-wrapper">
      <Applications />
    </div>
    <div class="footer-wrapper">
      <Footer />
    </div>
  </div>
</template>

<style scoped>

.header-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
}

.main-wrapper {
  justify-content: center;
  align-items: center;
  min-height: 150px;
}

.application-wrapper {
  justify-content: center;
  align-items: center;
  min-height: 150px;
}

.footer-wrapper {
  justify-content: center;
  align-items: center;
  min-height: 100px;
}
</style>