<script setup>
import { ref } from 'vue';
const mathBoxes = ref([
  { name: 'Arithmetic Proggresion', link: 'arithmetic-proggresion' },
  { name: 'Geometric Proggresion', link: 'geometric-Proggresion' },
]);
</script>

<template>
  <div class="home-page">
    <h1 class="home-page-heading">Math Solve</h1>
    <div class="boxes">
      <router-link
        v-for="(mathBox, index) in mathBoxes"
        :key="index"
        :to="mathBox.link"
      >
        <div class="box">
          <h2>
            {{ mathBox.name }}
          </h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
