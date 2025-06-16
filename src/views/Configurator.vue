<style scoped lang="scss">
    @mixin confDesign {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

}

.hidden {
    display: none;
}

.dropdown {
        width: 100%;
        height: 30px;
        background-color: white;
    }

.confugurator-body {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

}

.CPU { 
    grid-area: 1 / 1 / 3 / 3; 
    background-color: lightblue;
    @include confDesign;
}
.GPU { 
    grid-area: 1 / 3 / 3 / 5;
    background-color: lightgreen;
    @include confDesign; 
}

.RAM { 
    grid-area: 1 / 5 / 3 / 7; 
    background-color: lightcoral;
    @include confDesign;
}

.SSD { grid-area: 1 / 7 / 3 / 9; 
    background-color: lightgoldenrodyellow;
    @include confDesign;
}

.c5 { grid-area: 3 / 7 / 5 / 9; 
    background-color: lightpink;
    @include confDesign;
}

.c6 { grid-area: 3 / 3 / 7 / 7; 
    background-color: lightgray;
    @include confDesign;
}

.c7 { grid-area: 5 / 7 / 7 / 9; 
    background-color: lightcyan;
    @include confDesign;
}

.c8 { grid-area: 7 / 7 / 9 / 9; 
    background-color: lightseagreen;
    @include confDesign;
}

.c9 { grid-area: 7 / 5 / 9 / 7; 
    background-color: lightsteelblue;
    @include confDesign;
}

.c10 { grid-area: 7 / 3 / 9 / 5; 
    background-color: lightyellow;
    @include confDesign;
}

.c11 { grid-area: 7 / 1 / 9 / 3; 
    background-color: lightcoral;
    @include confDesign;
}

.c12 { grid-area: 5 / 1 / 7 / 3; 
    background-color: lightblue;
    @include confDesign;
}

.c13 { grid-area: 3 / 1 / 5 / 3; 
    background-color: lightgreen;
    @include confDesign;
}

.progress-bar {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

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