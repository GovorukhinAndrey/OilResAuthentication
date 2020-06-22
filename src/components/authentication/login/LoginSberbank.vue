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

    <div class="form__group-box">
      <Checkbox v-model="isRemember" text="Запомнить меня"></Checkbox>
      <ButtonControl type="link">Забыли пароль?</ButtonControl>
    </div>

    <ButtonControl isBlock size="large" type="secondary" loading class="form__btn">
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
};
</script>

<style></style>
