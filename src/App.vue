<script setup lang="ts">
import './styles/global.scss'
import MapComponent from './views/Map.vue'

</script>

<template>
  <header>
    <h1 id="header">Sudoku Solver</h1>
  </header>
  <main id="container">
    <map-component />
  </main>
</template>
