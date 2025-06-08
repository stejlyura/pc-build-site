<script setup lang="ts">
  import { reactive, provide, ref, onMounted} from 'vue'
  import VueHeader from '@/components/Header/vueHeader.vue';
  import firstScreen from '@/components/firstScreen/firstScreen.vue';
  import productList from '@/components/product-list/product-list.vue';




    type Product = {
      brand: string;
      name: string;
      type: "GPU" | "CPU" | "RAM" | "SSD" | "HDD" | "PSU" | "CASE" | "COOLER" | "motherboard";
      socket?:  "J100" | "ML2" | string;
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
  <VueHeader />
  <firstScreen />
  <productList />
</template>

<style scoped lang="sass">

</style>