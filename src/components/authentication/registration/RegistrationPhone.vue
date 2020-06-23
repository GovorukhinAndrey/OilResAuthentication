<template>
  <form @submit.prevent="handlerSubmit" class="form">
    <small v-if="$v.phone.$dirty && $v.phone.$error" class="invalid">
      Введите корректный телефон
    </small>
    <InputControl
      class="input-control"
      tooltip="Укажите телефон"
      label="Телефон"
      placeholder="90000000"
      type="phone"
      v-model="phone"
    />

    <ButtonControl nativeType="submit" isBlock size="large" type="secondary" class="form__btn">
      Регистрация
    </ButtonControl>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'RegistrationPhone',
  components: {
    InputControl: () => import('@/components/app/InputControl'),
    ButtonControl: () => import('@/components/app/ButtonControl'),
  },
  validations: {
    phone: { required, minLength: minLength(17) },
  },
  data: () => ({
    loading: false,
    phone: '',
  }),
  methods: {
    ...mapActions('auth', ['registerForPhone', 'getCodePhone']),
    async handlerSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      try {
        this.loading = true;
        const code = await this.getCodePhone(this.phone);
        this.$emit('code-check', code);
        this.$swal('SMS код', {
          text: `SMS код ${code}`,
          icon: 'success',
        });
      } catch (e) {
        throw e.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
