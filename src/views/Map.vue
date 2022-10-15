<script setup lang="ts">
import { ref } from 'vue';
import SudokuMap from '../classes/sudoku-map'

const sudokuMap = ref<SudokuMap>(new SudokuMap())
</script>

<template>
  <div id="game-wrapper">
    
  </div>
</template>
