<template>
  <form @submit.prevent="handlerSubmit" class="form">
    <InputControl
      class="input-control"
      tooltip="Укажите телефон"
      label="Телефон"
      placeholder="90000000"
      type="phone"
    />

    <ButtonControl isBlock size="large" type="secondary" loading class="form__btn">
      Регистрация
    </ButtonControl>
  </form>
</template>

<script>
export default {
  components: {
    InputControl: () => import('@/components/app/InputControl'),
    ButtonControl: () => import('@/components/app/ButtonControl'),
  },
};
</script>

<style></style>
