<script setup lang="ts">

import {onMounted, ref} from "vue";
import {api} from "@/api/types-api";
import Type from "@/models/Type";

const types = ref<Type[]>([])

onMounted(async () => {
  types.value = await api.getTypes()
})

</script>

<template>
  ==> List des Types ( {{ types.length }}):

  <div v-for="type in types" :key="`type-id-${type.id}`">
    <h3 class="font-bold">
      {{ type.nom }}
    </h3>
  </div>

</template>
