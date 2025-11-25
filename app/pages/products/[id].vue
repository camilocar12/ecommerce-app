<script setup lang="ts">
import type { Product } from '@/types/product';
import { useToast } from 'vuestic-ui'
import { useCartStore } from '@/stores/cart'

const { id } = useRoute().params
const { notify } = useToast()
const { isSignedIn } = useUser()
const cartStore = useCartStore()

const imageIndex = ref(0)

const { data: product, pending, error } = await useAsyncData<Product>(
  'product',
  () => $fetch(`/api/products/${id}`)
)

if (error.value) {
  notify({
    title: 'Error',
    message: 'Error al cargar el producto',
    color: 'danger',
    position: 'bottom-right',
  })
}

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
    notify({
      title: 'Success',
      message: 'Product added to cart',
      color: 'success',
      position: 'bottom-right',
    })
  }
}

const memberDiscount= (basePrice: number) => {
  return basePrice * 0.85
}


</script>

<template>
  <div v-if="pending" class="progress-container">
    <VaProgressCircle indeterminate :thickness="0.4" color="#A2D5C6"/>
  </div>
  <div v-else class="product-details-container">
    <VaCarousel
      v-model="imageIndex"
      :items="product?.images || []"
      color="black"
      indicators
      height="50vh"
      style="width: 50vw !important"
    />
    <div class="product-details">
      <div class="product-details-text">
        <p class="product-title tack-sans-notch-font">{{ product?.title }}</p>
        <p class="product-description">{{ product?.description }}</p>
        <p class="product-category">{{ product?.category.name }}</p>
        <p class="product-price tack-sans-notch-font" :style="{ textDecoration: isSignedIn ? 'line-through' : 'none' }">$ {{ product?.price }}</p>
        <p v-if="isSignedIn" class="product-price tack-sans-notch-font">$ {{ memberDiscount(product?.price || 0) }} (Member Discount)</p>

      </div>
      <VaButton class="product-add-to-cart-button" size="large" icon="shopping_cart" color="#A2D5C6" @click="addToCart()">Add to Cart</VaButton>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  display: flex;
  justify-content: center;
  align-items: start;
}

.product-details-container{
  padding: 20px;
  display: flex;
  gap: 20px;
}

.product-details{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-details-text{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-image{
  width:50vw;
  height: 50vh;
  object-fit: cover;
  border-radius: 15px;
}

.product-title{
  font-size: 3rem;
  font-weight: 700;
}

.product-description{
  font-size: 1.5rem;
  font-weight: 400;
}

.product-price{
  font-size: 1.5rem;
  font-weight: 700;
  color: #A2D5C6;
}

.product-add-to-cart-button{
  width: fit-content;
}


</style>