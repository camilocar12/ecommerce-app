import type { Product } from '@/types/product';
import type { CartItem } from '@/types/cart';

defineStore('cart', () => {
  const cart = ref<CartItem[]>([])

  //Mutations
  async function addToCart(product: Product) {
    //Añadir un producto (incrementando la cantidad si ya está en el carrito, oagregándole por primera vez).
    const item = cart.value.find((item: CartItem) => item.product.id === product.id)
    if (item) {
      item.quantity++
    } else {
      cart.value.push({ product, quantity: 1 })
    }
  }

  async function removeFromCart(product: Product) {
    //Eliminar un producto del carrito
    const index = cart.value.findIndex((item: CartItem) => item.product.id === product.id)
    if (index !== -1) {
      cart.value.splice(index, 1)
    }
  }

  async function clearCart() {
    //Vaciar el carrito
    cart.value = []
  }

  //Getters
  async function getTotalUniqueProducts() {
    return cart.value.length
  }

  async function getTotalQuantity() {
    return cart.value.reduce((total: number, item: CartItem) => total + item.quantity, 0)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  }
})