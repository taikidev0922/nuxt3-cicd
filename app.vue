<script setup lang="ts"></script>
<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex gap-4">
        <NuxtLink to="/" class="text-white hover:text-gray-300"
          >トップ</NuxtLink
        >
        <NuxtLink to="/customer" class="text-white hover:text-gray-300"
          >得意先一覧</NuxtLink
        >
        <NuxtLink to="/product" class="text-white hover:text-gray-300"
          >商品一覧</NuxtLink
        >
      </div>
    </nav>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>
