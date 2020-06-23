<template>
  <form @submit.prevent="handlerSubmit" class="form">
    <InputControl
      class="input-control"
      tooltip="Укажите телефон"
      label="Телефон"
      placeholder="90000000"
      type="phone"
    />

    <Checkbox v-model="isRemember" text="Запомнить меня"></Checkbox>

    <ButtonControl isBlock size="large" type="secondary" class="form__btn">
      Войти
    </ButtonControl>
  </form>
</template>

<script>
export default {
  components: {
    Checkbox: () => import('@/components/app/Checkbox'),
    InputControl: () => import('@/components/app/InputControl'),
    ButtonControl: () => import('@/components/app/ButtonControl'),
  },
  data: () => ({
    isRemember: false,
  }),
};
</script>

<style></style>
