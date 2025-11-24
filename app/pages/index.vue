<script setup lang="ts">
import type { Product } from '@/types/product';
import { useToast } from 'vuestic-ui'

import Card from '@/components/ui/Card.vue';

const { notify } = useToast()

const search = inject<Ref<string>>('search', ref(''))

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

const filteredProducts = computed(() => {
  if (search.value) {
    return products.value?.filter((product: Product) => {
      return product.title.toLowerCase().includes(search.value.toLowerCase())
    })
  }
  return products.value
})
</script>

<template>
  <div v-if="pending" class="progress-container">
    <VaProgressCircle indeterminate :thickness="0.4" color="#A2D5C6"/>
  </div>
  <div v-else class="product-container">
    <Card v-for="product in filteredProducts" :key="product.id" :product="product"/>
  </div>

</template>

<style scoped>
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>