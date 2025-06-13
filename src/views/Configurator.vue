<style scoped lang="scss">
    @use "_configurator.scss";
</style>

<template>
    <VueHeader />
    <div class="confugurator-body">
       <div class="pc">
        <h3>CPU</h3>
        <div class="dropdown" @click="CPU_isOpen = !CPU_isOpen "></div>
       </div> 
       <div class="c2">.</div>
       <div class="c3">.</div>
       <div class="c4">.</div>
       <div class="c5">.</div>
       <div class="c6">.</div>
       <div class="c7">.</div>
       <div class="c8">.</div>
       <div class="c9">.</div>
       <div class="c10">.</div>
       <div class="c11">.</div>
       <div class="c12">.</div>
       <div class="c13">.</div>
    </div>
    
</template>

<script setup lang="ts">
    import VueHeader from '@/components/Header/vueHeader.vue';
    import { inject, ref, type Ref } from 'vue';

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

    const CPU_selectedItem = ref<null | typeof products>(null)
    const CPU_isOpen = ref(false)
</script>