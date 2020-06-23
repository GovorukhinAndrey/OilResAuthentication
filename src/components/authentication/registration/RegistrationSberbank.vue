<template>
  <form @submit.prevent="handlerSubmit" class="form">
    <InputControl
      class="input-control"
      tooltip="Введите Сбербанк ID"
      label="Сбербанк ID"
      placeholder="12345679"
      type="text"
    />
    <InputControl
      class="input-control"
      tooltip="Введите Пароль"
      label="Пароль"
      placeholder="_"
      type="password"
    />

    <ButtonControl isBlock size="large" type="secondary" class="form__btn">
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
