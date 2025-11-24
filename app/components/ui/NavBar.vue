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
    <template #right>
      <VaNavbarItem class="hidden sm:block navbar-text-color">
        Dashboard
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block navbar-text-color">
        Reports
      </VaNavbarItem>
      <VaNavbarItem class="hidden sm:block navbar-text-color">
        Users
      </VaNavbarItem>
      <VaNavbarItem style="cursor: pointer;">
        <VaIcon
          color="#CFFFE2"
          name="shopping_cart"
        />
      </VaNavbarItem>
      <VaNavbarItem style="cursor: pointer;">
        <VaIcon
          color="#CFFFE2"
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

.navbar-text-color{
  color: #F6F6F6;
}
</style>