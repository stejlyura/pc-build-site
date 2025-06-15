<template>
    <div class="dropdown" @click="isOpen = !isOpen ">
                <div class="selected">
                    <span v-if="selectedItem">{{ selectedItem.brand }} {{ selectedItem.name }}</span>
                    <span v-else>{{ label || 'Pick' }}</span>
                </div>                
                <ul v-if="isOpen" class="dropdown-list">
                    <li v-for="product in filteredProducts" :key="product.id" @click.stop="selectItem(product)" class="li-marker">
                        <img :src="product.image" alt="" width="10px" height="10px">
                        <span>{{ product.brand }} {{ product.name }}</span>
                    </li>
                </ul>
            </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits, inject, type Ref } from 'vue'


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

// Пропсы: список продуктов и нужный тип
const props = defineProps<{
  items: Product[],
  type: Product['type'],
  label?: string
}>()

// Событие выбора
const emit = defineEmits<{
  (e: 'select', value: Product): void
}>()

// Состояния
const isOpen = ref(false)
const selectedItem = ref<Product | null>(null)

// Фильтрация по типу
const filteredProducts = computed(() =>
  props.items.filter(i => i.type === props.type)
)

// Выбор элемента
function selectItem(item: Product) {
  selectedItem.value = item
  isOpen.value = false
  emit('select', item)
}
</script>

<style scoped lang="scss">
    .li-marker{
      list-style: none;
      display: flex;

    }

    .dropdown-list{
      background-color: white;
      img {
        height: 100%;
      }
    }
</style>