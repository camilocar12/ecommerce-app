<script setup lang="ts">
import type { Product } from '@/types/product';

const props = defineProps<{
  product: Product;
}>()


</script>

<template>
  <div class="card" @click="navigateTo(`/products/${product.id}`)">
    <div class="card-image">
      <NuxtImg :src="product.images[0]" alt="product image" class="card-image" placeholder="./fallback.png"/>
    </div>
    <div class="card-content">
      <h3 class="card-title tack-sans-notch-font">{{ product.title }}</h3>
      <p class="card-price tack-sans-notch-font">$ {{ product.price }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background: #F6F6F6;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}

img.card-image {
  border-radius: 15px 15px 0 0;
}

.card-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  height: 150px;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
}

.card-price {
  font-size: 1.8rem;
  font-weight: 700;
  color: #A2D5C6;
}

</style>