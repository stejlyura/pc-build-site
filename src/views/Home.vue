<script setup>
  import { reactive, provide } from 'vue'
  import VueHeader from '@/components/Header/vueHeader.vue';
  import firstScreen from '@/components/firstScreen/firstScreen.vue';
  import productList from '@/components/product-list/product-list.vue';

    const products = reactive([])
    provide('products', products)

</script>

<template>
  <VueHeader />
  <firstScreen />
  <productList />
</template>

<style scoped lang="sass">

</style>