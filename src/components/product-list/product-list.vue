<style scoped lang="scss">
            @use './product-list';
</style>


<template>
    <div class="productList">
        <div class="card" v-if="products.length > 0" v-for="product in products" :key="product.name">
          <div class="product-img">
           <img :src="product.image" alt="" width="100%" height="200px">
          </div>
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
  import { inject, ref, type Ref } from 'vue'
  type Product = {
      brand: string;
      name: string;
      type: "GPU" | "CPU" | "RAM" | "SSD" | "HDD" | "PSU" | "CASE" | "COOLER" | "motherboard";
      socket?:  "J100" | "ML2" | string;
      price: number;
      description: string;
      image: string; 
  }
  const products = inject<Ref<Product[]>>('products', ref([]))
</script>