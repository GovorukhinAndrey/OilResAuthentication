<template>
  <div class="login">
    login
    <Checkbox v-model="isRemember" text="Запомнить меня"></Checkbox>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {
    Checkbox: () => import('@/components/Checkbox'),
  },
  data: () => ({
    isRemember: false,
  }),
};
</script>

<style></style>
