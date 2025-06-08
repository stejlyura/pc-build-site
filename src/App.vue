<script setup lang="ts">
  import { reactive, provide, ref, onMounted} from 'vue'

    type Product = {
    id: number;
    brand: string;
    name: string;
    type: "GPU" | "CPU" | "RAM" | "SSD" | "HDD" | "PSU" | "CASE" | "COOLER" | "motherboard";
    socket?: string | "J100"| "ML2";
    price: number;
    description: string;
    image: string; 
}

const products = ref<Product[]>([])
const isLoading = ref(true)
const error = ref<null | string>(null)

onMounted(async () => {
    try {
    const response = await fetch('/data/products.json');
    if (!response.ok) throw new Error('Cant find data');
    const data = await response.json();
    products.value = data;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
})
//console.log(products)

    provide('products', products)


</script>

<template>
<div id="app">
    <router-view />
  </div>
</template>

<style scoped lang="sass">

</style>