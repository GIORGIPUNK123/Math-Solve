<script setup>
import { ref } from 'vue';
const isDisabled = ref([true, false, false, false]);
const answer = ref(0);
const fetchFunc = (url, data) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      answer.value = data.result;
    })
    .catch((error) => {
      alert(error);
      answer.value = 0;
    });
};

const b1 = ref(1);
const bn = ref(1);
const n = ref(1);
const q = ref(1);
const sum = ref(1);
const logN = () => console.log(n.value);
const logQ = () => console.log(q.value);
const logB1 = () => console.log(b1.value);
const logBn = () => console.log(bn.value);
</script>

<template>
  <router-link class="math-back-btn" to="/"> Back </router-link>
  <div class="math-top">
    <h1 class="math-answer">Answer is: {{ answer }}</h1>
    <div class="math-buttons-inputs">
      <div class="progression-buttons">
        <el-button
          v-if="isDisabled[0]"
          class="progression-button"
          :disabled="isDisabled[0]"
          type="success"
          @click="
            answer = 0;
            isDisabled = [true, false, false, false];
          "
          >Find B1</el-button
        >
        <el-button
          v-if="!isDisabled[0]"
          class="progression-button"
          :disabled="isDisabled[0]"
          type="primary"
          @click="
            answer = 0;
            isDisabled = [true, false, false, false];
          "
          >Find B1</el-button
        >
        <el-button
          v-if="isDisabled[1]"
          class="progression-button"
          :disabled="isDisabled[1]"
          type="success"
          @click="
            answer = 0;
            isDisabled = [false, true, false, false];
          "
          >Find Bn</el-button
        >
        <el-button
          v-if="!isDisabled[1]"
          class="progression-button"
          :disabled="isDisabled[1]"
          type="primary"
          @click="
            answer = 0;
            isDisabled = [false, true, false, false];
          "
          >Find Bn</el-button
        >
        <el-button
          v-if="isDisabled[2]"
          class="progression-button"
          :disabled="isDisabled[2]"
          type="success"
          @click="
            answer = 0;
            isDisabled = [false, false, true, false];
          "
          >Find Q</el-button
        >
        <el-button
          v-if="!isDisabled[2]"
          class="progression-button"
          :disabled="isDisabled[2]"
          type="primary"
          @click="
            answer = 0;
            isDisabled = [false, false, true, false];
          "
          >Find Q</el-button
        >
        <el-button
          v-if="isDisabled[3]"
          class="progression-button"
          :disabled="isDisabled[3]"
          type="success"
          @click="
            answer = 0;
            isDisabled = [false, false, false, true];
          "
          >Find Sum</el-button
        >
        <el-button
          v-if="!isDisabled[3]"
          class="progression-button"
          :disabled="isDisabled[3]"
          type="primary"
          @click="
            answer = 0;
            isDisabled = [false, false, false, true];
          "
          >Find Sum</el-button
        >
      </div>
      <div v-if="isDisabled[0]" class="math-inputs">
        <div class="progression-input-box">
          <label class="progression-input-text" for="n">N</label>
          <el-input class="progression-input" v-model="n" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="bn">Bn</label>
          <el-input class="progression-input" v-model="bn" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="q">Q</label>
          <el-input class="progression-input" v-model="q" />
        </div>
      </div>
      <div v-if="isDisabled[1]" class="math-inputs">
        <div class="progression-input-box">
          <label class="progression-input-text" for="n">N</label>
          <el-input class="progression-input" v-model="n" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="b1">B1</label>
          <el-input class="progression-input" v-model="b1" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="q">Q</label>
          <el-input class="progression-input" v-model="q" />
        </div>
      </div>
      <div v-if="isDisabled[2]" class="math-inputs">
        <div class="progression-input-box">
          <label class="progression-input-text" for="n">N</label>
          <el-input class="progression-input" v-model="n" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="bn">Bn</label>
          <el-input class="progression-input" v-model="bn" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="b1">B1</label>
          <el-input class="progression-input" v-model="b1" />
        </div>
      </div>
      <div v-if="isDisabled[3]" class="math-inputs">
        <div class="progression-input-box">
          <label class="progression-input-text" for="b1">B1</label>
          <el-input class="progression-input" v-model="b1" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="q">Q</label>
          <el-input class="progression-input" v-model="q" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="bn">Bn</label>
          <el-input class="progression-input" v-model="bn" />
        </div>
      </div>
    </div>
  </div>
  <el-button
    v-if="isDisabled[0]"
    class="calculate-button"
    type="success"
    @click="
      answer = 'wait';
      fetchFunc(
        // 'http://localhost:3006/geometric-progression',
        'https://math-project-back.onrender.com/geometric-progression',
        {
          numbers: [n, bn, q],
          operation: 'findB1_Geometric',
        }
      );
    "
    >Calculate B1</el-button
  >
  <el-button
    v-if="isDisabled[1]"
    class="calculate-button"
    type="success"
    @click="
      answer = 'wait';
      fetchFunc(
        // 'http://localhost:3006/geometric-progression',
        'https://math-project-back.onrender.com/geometric-progression',
        {
          numbers: [n, b1, q],
          operation: 'findBn_Geometric',
        }
      );
    "
    >Calculate Bn</el-button
  >
  <el-button
    v-if="isDisabled[2]"
    class="calculate-button"
    type="success"
    @click="
      answer = 'wait';
      fetchFunc(
        // 'http://localhost:3006/geometric-progression',
        'https://math-project-back.onrender.com/geometric-progression',
        {
          numbers: [n, bn, sum],
          operation: 'findQ_Geometric',
        }
      );
    "
    >Calculate Q</el-button
  >
  <el-button
    v-if="isDisabled[3]"
    class="calculate-button"
    type="success"
    @click="
      answer = 'wait';
      fetchFunc(
        // 'http://localhost:3006/geometric-progression',
        'https://math-project-back.onrender.com/geometric-progression',
        {
          numbers: [b1, q, bn],
          operation: 'findSum1_Geometric',
        }
      );
    "
    >Calculate Sum</el-button
  >
</template>

<style scoped></style>
