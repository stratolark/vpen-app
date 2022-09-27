<template>
  <div>
    <NotificationAlert
      v-if="showAlert"
      :type="alertType"
      :isError="hasError"
      :isSuccess="hasSuccess"
      :closeAlert="closeAlert"
    />
  </div>
  <form class="create-restaurant__form" v-on:submit="createRestaurant">
    <h1 id="create-form" class="create-form__title">Add Restaurant</h1>
    <div class="form-item">
      <label for="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Restaurant Name"
        v-model="name"
        aria-labelledby="billing name"
      />
    </div>
    <div class="form-item">
      <label for="address">Address:</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Restaurant Address"
        v-model="address"
        aria-labelledby=" address"
      />
    </div>
    <button type="submit" class="create-form__submit">Add Restaurant</button>
  </form>
  <div>
    <div>Form data {{ name }} {{ address }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NotificationAlert from "../NotificationAlert.vue";

const alertType = ref<"success" | "error">("success");
const hasSuccess = ref(false);
const hasError = ref(false);
const showAlert = ref(false);
const name = ref("");
const address = ref("");

async function createRestaurant(e: Event) {
  e.preventDefault();

  const restaurant = {
    name: name.value,
    address: address.value,
  };

  interface RestaurantResponse {
    id: number;
    name: string;
    address: string;
    createdAt: string;
    updatedAt: string;
  }

  try {
    const controller = new AbortController();
    const signal = controller.signal;
    const response = await fetch("http://localhost:3001/api/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
      signal,
    });
    if (!response.ok) {
      controller.abort();
      throw new Error("Error creating restaurant");
    }

    const data: RestaurantResponse = await response.json();

    name.value = "";
    address.value = "";
    hasSuccess.value = true;
    hasError.value = false;
    alertType.value = "success";
    showAlert.value = true;

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      url: response.url,
      ...data,
    };
  } catch (error) {
    showAlert.value = true;
    hasError.value = true;
    hasSuccess.value = false;
    alertType.value = "error";
    console.log(error);
  }
}
function closeAlert() {
  hasError.value = false;
  hasSuccess.value = false;
  showAlert.value = false;
}
</script>

<style scoped>
.create-form__title {
  font-size: 1.575rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}
.form-item label {
  margin-bottom: 0.5rem;
}
.form-item input {
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.form-item input::placeholder {
  color: rgb(185, 185, 185);
}

.create-form__submit {
  cursor: pointer;
  color: white;
  padding: 0.75rem;
  border-radius: 5px;
  background-color: var(--vt-c-green);
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}
.create-form__submit:hover {
  background-color: var(--vt-c-darkgreen);
}
</style>
