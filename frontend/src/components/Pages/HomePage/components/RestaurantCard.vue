<template>
  <div class="card">
    <h2>
      <slot name="name"></slot>
    </h2>
    <p>
      <slot name="address"></slot>
    </p>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  padding: 3rem;
  background: var(--color-background-darkgreen);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card > h2 {
  color: var(--vt-c-white);
}
</style>
