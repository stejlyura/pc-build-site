<style scoped lang="scss">
    @use "_configurator.scss";
</style>

<template>
    <VueHeader />
    <div class="confugurator-body">
       <div class="CPU">
            <h3>CPU</h3>
            <DropDown 
                :items = "products"
                type="CPU"
                label="Select CPU"
                @select="CPU_selectedItem = $event"
            />
       </div> 
       <div class="GPU">
            <h3>GPU</h3>
            <DropDown 
                :items = "products"
                type="GPU"
                label="Select GPU"
                @select="GPU_selectedItem = $event"
            />
       </div>
       <div class="RAM">
            <h3>RAM</h3>
            <DropDown 
                :items = "products"
                type="RAM"
                label="Select RAM"
                @select="RAM_selectedItem = $event"
            />
       </div>
       <div class="SSD">
            <h3>SSD</h3>
            <DropDown 
                :items = "products"
                type="SSD"
                label="Select SSD"
                @select="SSD_selectedItem = $event"
            />
       </div>
       <div class="c5">
            <h3>PSU</h3>
            <DropDown 
                :items = "products"
                type="PSU"
                label="Select PSU"
                @select="PSU_selectedItem = $event"
            />
       </div>
       <div class="c6">
        <!-- empty for pc -->
       </div>
       <div class="c7">
        <h3>Motherboard</h3>
            <DropDown 
                :items = "products"
                type="motherboard"
                label="Select Motherboard"
                @select="motherboard_selectedItem = $event"
            />
       </div>
       <div class="c8">
       </div>
       <div class="c9">.</div>
       <div class="c10">.</div>
       <div class="c11">.</div>
       <div class="c12">
        <h3>CASE</h3>
            <DropDown 
                :items = "products"
                type="CASE"
                label="Select CASE"
                @select="CASE_selectedItem = $event"
            />
       </div>
       <div class="c13">
            <h3>COOLER</h3>
            <DropDown 
                :items = "products"
                type="COOLER"
                label="Select COOLER"
                @select= "COOLER_selectedItem = $event"
            />
       </div>
    </div>
    
</template>

<script setup lang="ts">
    import VueHeader from '@/components/Header/vueHeader.vue';
    import DropDown from '@/components/dropDown/dropDown.vue';
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
    const CPU_selectedItem = ref<Product | null>(null)
    const GPU_selectedItem = ref<Product | null>(null)
    const RAM_selectedItem = ref<Product | null>(null)
    const SSD_selectedItem = ref<Product | null>(null)
    const PSU_selectedItem = ref<Product | null>(null)
    const CASE_selectedItem = ref<Product | null>(null)
    const COOLER_selectedItem = ref<Product | null>(null)
    const motherboard_selectedItem = ref<Product | null>(null)

</script>