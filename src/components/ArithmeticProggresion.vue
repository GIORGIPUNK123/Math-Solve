<script setup>
import { ref } from 'vue';
const isDisabled = ref([true, false, false, false]);
const answer = ref(0);
const snFunction = ref(true);
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

const an = ref(1);
const a1 = ref(1);
const n = ref(1);
const d = ref(1);
const sn = ref(1);
</script>

<template>
  <router-link class="math-back-btn" to="/"> Back </router-link>
  <el-button
    v-if="isDisabled[3]"
    class="math-sn-change-formula"
    type="primary"
    @click="snFunction = !snFunction"
    >Change Formula</el-button
  >
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
          >Find An</el-button
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
          >Find An</el-button
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
          >Find A1</el-button
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
          >Find A1</el-button
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
          >Find D</el-button
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
          >Find D</el-button
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
          >Find Sn</el-button
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
          >Find Sn</el-button
        >
      </div>
      <div v-if="isDisabled[0]" class="math-inputs">
        <div class="progression-input-box">
          <label class="progression-input-text" for="a1">A1</label>
          <el-input class="progression-input" v-model="a1" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="n">N</label>
          <el-input class="progression-input" v-model="n" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="d">D</label>
          <el-input class="progression-input" v-model="d" />
        </div>
      </div>
      <div v-if="isDisabled[1]" class="math-inputs">
        <div class="progression-input-box">
          <label class="progression-input-text" for="an">An</label>
          <el-input class="progression-input" v-model="an" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="n">N</label>
          <el-input class="progression-input" v-model="n" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="d">D</label>
          <el-input class="progression-input" v-model="d" />
        </div>
      </div>
      <div v-if="isDisabled[2]" class="math-inputs">
        <div class="progression-input-box">
          <label class="progression-input-text" for="a1">A1</label>
          <el-input class="progression-input" v-model="a1" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="an">An</label>
          <el-input class="progression-input" v-model="an" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="n">N</label>
          <el-input class="progression-input" v-model="n" />
        </div>
      </div>
      <div v-if="isDisabled[3] && snFunction" class="math-inputs">
        <div class="progression-input-box">
          <label class="progression-input-text" for="a1">A1</label>
          <el-input class="progression-input" v-model="a1" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="an">An</label>
          <el-input class="progression-input" v-model="an" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="n">N</label>
          <el-input class="progression-input" v-model="n" />
        </div>
      </div>
      <div v-if="isDisabled[3] && !snFunction" class="math-inputs">
        <div class="progression-input-box">
          <label class="progression-input-text" for="a1">A1</label>
          <el-input class="progression-input" v-model="a1" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="n">N</label>
          <el-input class="progression-input" v-model="n" />
        </div>
        <div class="progression-input-box">
          <label class="progression-input-text" for="d">D</label>
          <el-input class="progression-input" v-model="d" />
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
      fetchFunc('https://math-solve-back.onrender.com/arithmetic-progression', {
        numbers: [a1, n, d],
        operation: 'findAn_Arithmetic',
      });
    "
    >Calculate An</el-button
  >
  <el-button
    v-if="isDisabled[1]"
    class="calculate-button"
    type="success"
    @click="
      answer = 'wait';
      fetchFunc('https://math-solve-back.onrender.com/arithmetic-progression', {
        numbers: [an, n, d],
        operation: 'findA1_Arithmetic',
      });
    "
    >Calculate A1</el-button
  >
  <el-button
    v-if="isDisabled[2]"
    class="calculate-button"
    type="success"
    @click="
      answer = 'wait';
      fetchFunc('https://math-solve-back.onrender.com/arithmetic-progression', {
        numbers: [a1, an, n],
        operation: 'findD_Arithmetic',
      });
    "
    >Calculate D</el-button
  >
  <el-button
    v-if="isDisabled[3] && snFunction"
    class="calculate-button"
    type="success"
    @click="
      answer = 'wait';
      fetchFunc('https://math-solve-back.onrender.com/arithmetic-progression', {
        numbers: [a1, an, n],
        operation: 'findSn1_Arithmetic',
      });
    "
    >Calculate Sn</el-button
  >
  <el-button
    v-if="isDisabled[3] && !snFunction"
    class="calculate-button"
    type="success"
    @click="
      answer = 'wait';

      fetchFunc('https://math-solve-back.onrender.com/arithmetic-progression', {
        numbers: [a1, n, d],
        operation: 'findSn2_Arithmetic',
      });
    "
    >Calculate Sn</el-button
  >
</template>

<style scoped></style>
