<script setup lang="ts">
interface Product {
  productId: string;
  productName: string;
  unitPrice: number;
}

const { data: productsResponse, pending } = await useLazyFetch<{
  items: Product[];
}>("/api/products");
const products = computed(() => productsResponse.value?.items ?? []);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
};
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">商品一覧</h1>
    <div v-if="pending" class="text-center py-4">Loading...</div>
    <div v-else class="overflow-x-auto">
      <table class="min-w-full border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="border p-2 text-left">ID</th>
            <th class="border p-2 text-left">商品名</th>
            <th class="border p-2 text-right">単価</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in products"
            :key="product.productId"
            class="hover:bg-gray-50"
          >
            <td class="border p-2">{{ product.productId }}</td>
            <td class="border p-2">{{ product.productName }}</td>
            <td class="border p-2 text-right">
              {{ formatPrice(product.unitPrice) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
