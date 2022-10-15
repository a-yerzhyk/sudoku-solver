<script setup lang="ts">
import './styles/global.scss'
import MapComponent from './views/Map.vue'

</script>

<template>
  <div id="app">
    <h1 id="header">Sudoku Solver</h1>
    <div id="container">
      <map-component />
    </div>
  </div>
</template>
