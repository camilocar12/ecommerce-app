<script setup lang="ts">
import type { Product } from '@/types/product';
import { useToast } from 'vuestic-ui'

const { id } = useRoute().params
const { notify } = useToast()

const { data: product, pending, error } = await useAsyncData<Product>(
  'product',
  () => $fetch(`/api/products/${id}`)
)

if (error.value) {
  notify({
    title: 'Error',
    message: 'Error al cargar el producto',
    color: 'danger',
  })
}
</script>

<template>
  <div v-if="pending" class="progress-container">
    <VaProgressCircle indeterminate :thickness="0.4" color="#A2D5C6"/>
  </div>
  <div v-else class="product-details-container">
    {{product}}
  </div>
</template>

<style scoped>.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-details-container{
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>