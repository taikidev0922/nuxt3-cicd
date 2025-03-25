<script setup lang="ts">
interface Customer {
  customerId: string;
  customerName: string;
  address: string;
}

const { data: customersResponse, pending } = await useLazyFetch<{
  items: Customer[];
}>("/api/customers");
const customers = computed(() => customersResponse.value?.items ?? []);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">得意先一覧</h1>
    <div v-if="pending" class="text-center py-4">Loading...</div>
    <div v-else class="overflow-x-auto">
      <table class="min-w-full border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="border p-2 text-left">ID</th>
            <th class="border p-2 text-left">得意先名</th>
            <th class="border p-2 text-left">住所</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="customer in customers"
            :key="customer.customerId"
            class="hover:bg-gray-50"
          >
            <td class="border p-2">{{ customer.customerId }}</td>
            <td class="border p-2">{{ customer.customerName }}</td>
            <td class="border p-2">{{ customer.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
