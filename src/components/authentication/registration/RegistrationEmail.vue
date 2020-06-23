<template>
  <form @submit.prevent="handlerSubmit" class="form">
    <small v-if="$v.fullName.$dirty && $v.fullName.$error" class="invalid">
      Поле ФИО не должно быть пустым
    </small>
    <small v-if="$v.phone.$dirty && $v.phone.$error" class="invalid">
      Введите корректный телефон
    </small>
    <small v-if="$v.email.$dirty && $v.email.$error" class="invalid">
      Введите корректный Email
    </small>
    <small v-if="$v.password.$dirty && $v.password.$error" class="invalid">
      Введите больше {{ $v.password.$params.minLength.min }} символов. Сейчас он
      {{ password.length }}
    </small>
    <InputControl
      class="input-control"
      tooltip="Укажите ФИО"
      label="ФИО"
      placeholder="Константинопольский Константин Конст..."
      v-model="fullName"
    />
    <div class="input-control-group">
      <InputControl
        class="input-control input-control-group__item"
        tooltip="Укажите телефон"
        label="Телефон"
        placeholder="90000000"
        type="phone"
        v-model="phone"
      />
      <InputControl
        class="input-control input-control-group__item"
        tooltip="Укажите Email"
        label="Email"
        placeholder="exsample@mail.com"
        type="email"
        v-model="email"
      />
    </div>
    <InputControl
      class="input-control"
      tooltip="Введите Пароль"
      label="Пароль"
      placeholder="_"
      type="password"
      v-model="password"
    />

    <ButtonControl
      nativeType="submit"
      class="form__btn"
      isBlock
      size="large"
      type="secondary"
      :loading="loading"
    >
      Регистрация
    </ButtonControl>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import { email, required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'RegistrationEmail',
  components: {
    InputControl: () => import('@/components/app/InputControl'),
    ButtonControl: () => import('@/components/app/ButtonControl'),
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    fullName: { required },
    phone: { minLength: minLength(17) },
  },
  data: () => ({
    loading: false,
    email: '',
    password: '',
    phone: '',
    fullName: '',
  }),
  methods: {
    ...mapActions('auth', ['registerForEmail']),
    async handlerSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        phone: this.phone,
        fullName: this.fullName,
      };
      try {
        this.loading = true;
        await this.registerForEmail(formData);
      } catch (e) {
        throw e.message;
      } finally {
        this.loading = false;
        this.email = '';
        this.password = '';
        this.phone = '';
        this.fullName = '';
      }
    },
  },
};
</script>

<style></style>
