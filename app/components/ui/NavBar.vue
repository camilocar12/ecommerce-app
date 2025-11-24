<template>
  <VaNavbar
    color="#FF5555"
    class="mb-3"
  >
    <template #left>
      <VaNavbarItem class="tack-sans-notch-font title">
        Ecommerce App
      </VaNavbarItem>
    </template>
    <template #right>
      <VaNavbarItem class="hidden sm:block">
        Dashboard
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block">
        Reports
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block">
        Users
      </VaNavbarItem>
      <VaNavbarItem>
        <VaIcon
          name="favorite"
        />
      </VaNavbarItem>
      <VaNavbarItem>
        <VaIcon
          name="search"
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
</style>