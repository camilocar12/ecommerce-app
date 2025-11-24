<script setup lang="ts">
import type { Product } from '@/types/product';
import { useToast } from 'vuestic-ui'

import NavBar from '@/components/ui/NavBar.vue';

const { notify } = useToast()

// Carga SSR
const { data: products, pending, error } = await useAsyncData<Product[]>(
  'products',
  () => $fetch('/api/products/list')
)

if (error.value) {
  notify({
    title: 'Error',
    message: 'Error al cargar los productos',
    color: 'danger',
  })
}
</script>

<template>
  <NavBar />
  <div v-if="pending" class="progress-container">
    <VaProgressCircle indeterminate :thickness="0.4" color="#A2D5C6"/>
  </div>
  <div v-else>
    <div v-for="product in products" :key="product.id">
      <h1>{{ product.title }}</h1>
    </div>
  </div>

</template>

<style scoped>
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>