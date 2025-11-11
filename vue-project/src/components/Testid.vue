<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div>
    <h1>Test ID Page</h1>
    <p>ID: {{ route.params.id }}</p>
  </div>
</template>
