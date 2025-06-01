<style scoped lang="scss">
            @use './product-list';
</style>


<template>
  <h1>{{ products }}</h1>
    <div class="productList">
        <div class="card" v-if="products.length > 0" v-for="product in products" :key="product.name">
          <div class="discription">
            <h1>{{ products[0].brand + ' ' + products[0].name}}</h1>
            <h2>{{ products[0].price }}</h2>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref, onMounted} from 'vue'
    
    type Product = {  //check products in data
    brand: "Montory";
    name: string;
    price: number;
    description: string;
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
console.log(products)
</script>