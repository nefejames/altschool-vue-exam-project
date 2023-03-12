<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
</template>

<script>
export default {
  name: "NotFound404",
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

p {
  font-size: 2rem;
  text-align: center;
}
</style>
