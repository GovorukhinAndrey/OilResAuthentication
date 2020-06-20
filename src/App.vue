<template>
  <div id="app">
    <Authentication></Authentication>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Authentication: () => import('@/components/Authentication'),
  },
};
</script>

<style lang="scss">
#app {
  background-color: #bbb;
  display: flex;
  min-height: 100vh;
  padding: 0 15px;
}
</style>
