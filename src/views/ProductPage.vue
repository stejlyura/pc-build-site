<template>
    <VueHeader />
    <div v-if="product">
        <h1>{{ product }}</h1>
        <div>
            <img :src="product.image" alt="">
        </div>















    </div>
    <div v-else>
        <h1>Oh no no no</h1>
    </div>
</template>

<script setup lang="ts">
    import VueHeader from '@/components/Header/vueHeader.vue';
import { inject, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router'

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

    const route = useRoute()
    const productId = Number(route.params.id)
    const product = ref(products.value.find(p => p.id === productId))



</script>