<template>
  <div class="alert" :class="{ error: isError, success: isSuccess }">
    <span v-if="isError || isSuccess">{{ props.type }}</span>
    <h2>
      <span v-if="isError"> There was an error. Please try again. </span>
      <span v-if="isSuccess"> Restaurant created successfully. </span>
    </h2>
    <div>
      <button class="alert__close" v-on:click="closeAlert">close</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  type: "error" | "success";
  isError: boolean;
  isSuccess: boolean;
  closeAlert: () => void;
}>();
</script>

<style scoped>
.alert {
  margin: 1rem 0;
  border-radius: 5px;
  padding: 1rem;
  color: white;
}
.error {
  background-color: red;
}
.success {
  background-color: var(--vt-c-green);
}
.alert__close {
  cursor: pointer;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: white;
  font-weight: bold;
  margin-top: 1.5rem;
  /* margin-bottom: 1.5rem; */
}
</style>
