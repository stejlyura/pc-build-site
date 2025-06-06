<style scoped lang="scss">
            @use './product-list';
</style>


<template>
    <div class="productList">
        <div class="card" v-if="products.length > 0" v-for="product in products" :key="product.name">
          <img :src="product.image" alt="" width="100%" height="200px">
          <div class="disc-button">
            <div class="discription">
              <h1>{{ product.brand + ' ' + product.name}}</h1>
              <h2>{{ product.price }}</h2>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref, onMounted} from 'vue'
    
  type Product = {
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
</script>