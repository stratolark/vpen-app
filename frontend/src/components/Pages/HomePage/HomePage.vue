<template>
  <div>
    <CreateRestaurant />
  </div>
  <div v-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
    <button @click="retry">Retry</button>
  </div>
  <div v-else-if="data">
    <h1 class="page__title">Restaurants:</h1>
    <div class="container__cards" v-for="item in data" :key="item.id">
      <div v-for="val in item" :key="val.id">
        <RestaurantCard>
          <template #name>
            {{ val.name }}
          </template>
          <template #address>
            {{ val.address }}
          </template>
        </RestaurantCard>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>
<style scoped>
.page__title {
  font-size: 1.575rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.container__cards {
  display: grid;
  gap: 1rem;
}
</style>

<script lang="ts">
// import { ref, computed } from "vue";
import { useFetch } from "../../../lib/useFetch";
import RestaurantCard from "./components/RestaurantCard.vue";
import CreateRestaurant from "./components/Forms/CreateRestaurant.vue";
export default {
  name: "HomePage",
  setup() {
    const baseUrl = "http://localhost:3001/api/restaurants/";
    // const id = ref("1");
    // const url = computed(() => baseUrl + id.value);
    const { data, error, retry } = useFetch(baseUrl);
    console.log(data);
    // const sortedData = data.value
    // expose to template and other options API hooks
    return {
      data,
      error,
      retry,
    };
  },
  components: { RestaurantCard, CreateRestaurant },
};
</script>
