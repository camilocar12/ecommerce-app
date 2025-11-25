<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const { user , isSignedIn } = useUser()
const emit = defineEmits(['search'])

const search = ref('')
const showCart = ref(false)

const cartItems = computed(() => cartStore.cart)

watch(search, (newVal) => {
  emit('search', newVal)
})
</script>

<template>
  <VaNavbar
    color="#000000"
    class="mb-3"
  >
    <template #left>
      <VaNavbarItem class="tack-sans-notch-font title navbar-text-color" @click="navigateTo('/')" style="cursor: pointer;">
        Ecommerce App
      </VaNavbarItem>
    </template>
    <template #center>
      <div class="search-container">
        <VaIcon
          color="#CFFFE2"
          name="search"
          size="large"
        />
      <VaInput
        v-model="search"
        placeholder="Search your products"
        class="tack-sans-notch-font"
        color="#CFFFE2"
        clearable
        />
      </div>
    </template>
    <template #right>
      
      <VaNavbarItem style="cursor: pointer;" @click="showCart = true">
        <VaBadge
          :text="cartStore.totalQuantity"
          overlap
          class="mr-6"
          :offset="[-2,1]"
          style="--va-badge-text-wrapper-border-radius: 50%;"
        >
        <VaIcon
          color="#CFFFE2"
          name="shopping_cart"
        />
        </VaBadge>
      </VaNavbarItem>
      <VaNavbarItem style="display: flex; align-items: center; gap: 10px;">
        <VaIcon
          color="#CFFFE2"
          name="person"
        />
        <p v-if="user">Hi {{ user.firstName }}</p>
        <VaBadge
          v-if="isSignedIn"
          text="Member"
          color="#CFFFE2"
          class="mr-2"
        />
        <SignInButton v-if="!isSignedIn" afterSignInUrl="/" class="clerk-button"/>
        <SignOutButton v-else afterSignOutUrl="/" class="clerk-button"/>
      </VaNavbarItem>
    </template>
  </VaNavbar>
  <VaModal
    v-model="showCart"
    hide-default-actions
    overlay-opacity="0.2"
  >
    <template #header>
      <p class="tack-sans-notch-font title">Cart</p>
    </template>
    <div v-for="item in cartItems" :key="item.product.id">
      <div class="cart-item">
        <div>
          <p class="tack-sans-notch-font">{{ item.product.title }} x {{ item.quantity }}</p>
          <p>Unit Price:  $ {{ item.product.price }}</p>
          <p>Total:  $ {{ item.product.price * item.quantity }}</p>
        </div>
        <div class="cart-item-buttons">
          <VaButton color="#A2D5C6" size="small" icon="add" @click="cartStore.addToCart(item.product)"/>
          <p>{{ item.quantity }}</p>
          <VaButton color="#A2D5C6" size="small" icon="remove" @click="cartStore.removeFromCart(item.product.id)"/> 
        </div>
      </div>
    </div>
    <div v-if="cartItems.length === 0">
      <p class="tack-sans-notch-font">No items in cart</p>
    </div>
    <template #footer>
      <div class="cart-total-container">
        <div class="cart-total">
          <p>Total Price:  $ {{ cartStore.totalPrice }}</p>
        </div>
        <VaButton color="#A2D5C6" size="large" :disabled="cartItems.length === 0">Checkout</VaButton>
      </div>
    </template>
  </VaModal>
</template>

<style scoped>
.title{
  font-size: 24px;
  font-weight: 700;
}

.search-container{
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar-text-color{
  color: #F6F6F6;
}

.cart-item{
  margin-block: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-item-buttons{
  display: flex;
  align-items: center;
  gap: 10px;
}
.cart-total-container{
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-total{
  font-size: 18px;
  font-weight: 700;
}

.login-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.clerk-button{
  background: #A2D5C6;
  color: #000000;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>