<style scoped lang="scss">
            @use './product-list';
</style>


<template>
    <div class="productList">
        <div class="card" v-if="products.length > 0" v-for="product in products" :key="product.id">
          <div class="product-img" @click="goToProduct(product.id)">
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
  import { useRouter } from 'vue-router'
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
  const products = inject<Ref<Product[]>>('products', ref([]))

  const router = useRouter()
  function goToProduct(id: number) {
  router.push({ name: 'ProductPage', params: { id } })
}
</script>