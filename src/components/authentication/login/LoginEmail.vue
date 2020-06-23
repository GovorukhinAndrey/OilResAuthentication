<template>
  <form @submit.prevent="handlerSubmit" class="form">
    <small v-if="$v.email.$dirty && $v.email.$error" class="invalid">
      Введите корректный Email
    </small>
    <small v-if="$v.password.$dirty && $v.password.$error" class="invalid">
      Введите больше {{ $v.password.$params.minLength.min }} символов. Сейчас он
      {{ password.length }}
    </small>
    <InputControl
      class="input-control"
      tooltip="Укажите Email"
      label="Email"
      placeholder="exsample@mail.com"
      type="email"
      v-model="email"
    />
    <InputControl
      class="input-control"
      tooltip="Введите Пароль"
      label="Пароль"
      placeholder="_"
      type="password"
      v-model="password"
    />

    <div class="form__group-box">
      <Checkbox v-model="isRemember" text="Запомнить меня"></Checkbox>
      <ButtonControl type="link">Забыли пароль?</ButtonControl>
    </div>
    <ButtonControl
      nativeType="submit"
      isBlock
      size="large"
      type="secondary"
      :loading="loading"
      class="form__btn"
    >
      Войти
    </ButtonControl>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import { email, required, minLength } from 'vuelidate/lib/validators';
export default {
  name: 'LoginEmail',
  components: {
    Checkbox: () => import('@/components/app/Checkbox'),
    InputControl: () => import('@/components/app/InputControl'),
    ButtonControl: () => import('@/components/app/ButtonControl'),
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  data: () => ({
    email: '',
    password: '',
    loading: false,
    isRemember: false,
  }),
  methods: {
    ...mapActions('auth', ['loginForEmail']),
    async handlerSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        this.loading = true;
        await this.loginForEmail(formData);
        this.email = '';
        this.password = '';
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
