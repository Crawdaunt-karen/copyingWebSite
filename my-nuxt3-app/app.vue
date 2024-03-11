<template>
  <div>
    <h1>{{ message }}</h1>
    <p v-if="isLoading">Loading...</p>
    <p v-else>{{ joke }}</p>
    <button @click="greet">Greet</button>
    <button @click="fetchJoke">Get New Joke</button>
    <NuxtLink to="/">Go to Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
import { useFetch } from "nuxt/app";

const state = reactive({
  message: "Hello Nuxt3 with TypeScript!",
  joke: "",
  isLoading: false,
});

// Ref の使用例
const count = ref(0);

// リアクティブなstateからrefへの分解
const { joke, isLoading } = toRefs(state);

async function fetchJoke() {
  state.isLoading = true;
  const { data } = await useFetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  state.joke = data.value?.joke ?? "No joke found :(";
  state.isLoading = false;
}

function greet() {
  alert(state.message);
  count.value += 1;
  state.message = `You've greeted ${count.value} times`;
}
</script>
