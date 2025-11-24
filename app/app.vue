<script setup lang="ts">
import NavBar from '@/components/ui/NavBar.vue';

const search = ref('');

const searchProducts = (value: string) => {
  search.value = value
}

provide('search', search)
</script>

<template>
  <NavBar @search="searchProducts" />
  <NuxtPage />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap');

* {
  margin: 0;
  padding: 0;
}

.tack-sans-notch-font {
  font-family: 'Stack Sans Notch', sans-serif;
}

</style>