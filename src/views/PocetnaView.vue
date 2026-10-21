<script setup>
import { useOtvaranja } from '../composables/useOtvaranja.js';

const { tekst } = useOtvaranja();
</script>

<template>
  <h1>Moja aplikacija</h1>
  <p>{{ tekst }}</p>
</template>
