<script setup>
import { ref } from 'vue';

const mathBoxes = ref([
  { name: 'არითმეტიკული პროგრესია', link: 'arithmetic-proggresion' },
  { name: 'გეომეტრიული პროგრესია', link: 'Geometric-Proggresion' },
]);
</script>

<template>
  <div class="home-page">
    <h1 class="home-page-heading">Math Solve</h1>
    <div class="boxes">
      <div class="box" v-for="(mathBox, index) in mathBoxes" :key="index">
        <router-link :to="mathBox.link">
          {{ mathBox.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
