<script setup lang="ts">
const emit = defineEmits(['search'])

const search = ref('')

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
      <VaNavbarItem class="tack-sans-notch-font title navbar-text-color">
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
        />
      </div>
    </template>
    <template #right>
      <VaNavbarItem style="cursor: pointer;">
        <VaIcon
          color="#CFFFE2"
          name="shopping_cart"
        />
      </VaNavbarItem>
      <VaNavbarItem style="cursor: pointer;">
        <VaIcon
          color="#CFFFE2"
          name="person"
        />
      </VaNavbarItem>
    </template>
  </VaNavbar>
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
</style>