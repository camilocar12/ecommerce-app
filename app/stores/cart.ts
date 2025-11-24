import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '@/types/product'
import type { CartItem } from '@/types/cart'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([])

  // ============ Mutations ============

  function addToCart(product: Product) {
    const existing = cart.value.find((item) => item.product.id === product.id)

    if (existing) {
      existing.quantity++
    } else {
      cart.value.push({
        product,
        quantity: 1,
      })
    }
  }

  function removeFromCart(productId: number) {
    const existing = cart.value.find((item) => item.product.id === productId)
    if (existing) {
      existing.quantity--
    }
    if (existing?.quantity === 0) {
      cart.value = cart.value.filter((item) => item.product.id !== productId)
    }
  }

  function clearCart() {
    cart.value = []
  }

  // ============ Getters ============

  const totalUniqueProducts = computed(() => cart.value.length)

  const totalQuantity = computed(() =>
    cart.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    cart.value.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    )
  )

  return {
    cart,

    addToCart,
    removeFromCart,
    clearCart,

    totalUniqueProducts,
    totalQuantity,
    totalPrice,
  }
})
