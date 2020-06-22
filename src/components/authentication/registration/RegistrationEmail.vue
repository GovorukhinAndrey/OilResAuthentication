<template>
  <form @submit.prevent="handlerSubmit" class="form">
    <InputControl
      class="input-control"
      tooltip="Укажите ФИО"
      label="Телефон"
      placeholder="Константинопольский Константин Конст..."
    />
    <div class="input-control-group">
      <InputControl
        class="input-control input-control-group__item"
        tooltip="Укажите телефон"
        label="Телефон"
        placeholder="90000000"
        type="phone"
      />
      <InputControl
        class="input-control input-control-group__item"
        tooltip="Укажите Email"
        label="Email"
        placeholder="exsample@mail.com"
        type="email"
      />
    </div>
    <InputControl
      class="input-control"
      tooltip="Введите Пароль"
      label="Пароль"
      placeholder="_"
      type="password"
    />

    <ButtonControl class="form__btn" isBlock size="large" type="secondary" loading>
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
