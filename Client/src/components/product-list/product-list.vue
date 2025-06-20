<style scoped lang="scss">
  @use './product-list';
</style>


<template>
    <div class="productList">
        <div class="card" v-if="products.length > 0" v-for="product in products" :key="product.id">
          <div class="product-img" @click="goToProduct(product.id)">
    <img :src="product.image" alt="" />
  </div>
  <div class="disc-button">
    <div class="description">
      <h2>{{ product.brand }}</h2>
      <h3>{{ product.name }}</h3>
      <p class="price">${{ product.price }}</p>
    </div>
    <button class="add-to-cart">Add to cart</button>
  </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  import { computed, inject, ref, type Ref } from 'vue'
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
  const imgsUrl = inject<string[]>('imgUrl', [])

  const fullImage = computed(() => {
  if (!imgsUrl) return null;

  const filename = products.value.length > 0 ? products.value[0].image.split('/').pop() || '' : ''; // например "1.png"
  const match = imgsUrl.find(url => url.endsWith(filename)); // ищем совпадение

  return match ? 'http://localhost:3000/' + match : null;

  });

  const router = useRouter()
  function goToProduct(id: number) {
  router.push({ name: 'ProductPage', params: { id } })
}
</script>