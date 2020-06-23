<template>
  <div class="Registration">
    <keep-alive>
      <component
        @code-check="changeRegistrationComponent('code-check')"
        v-bind:is="currentRegistrationComponent"
      ></component>
    </keep-alive>

    <p v-if="currentRegistration !== 'code-check'">
      Создавая аккаунт, вы соглашаетесь с правилами платформы и обработкой персональных данных
    </p>
    <h3 class="subtitle">Другие способы регистрации</h3>
    <div class="button-group">
      <ButtonControl
        v-if="currentRegistration !== 'registration-sberbank'"
        @click="changeRegistrationComponent('registration-sberbank')"
        isBlock
        class="button-group__item"
      >
        Регистраия по Сбербанк ID
      </ButtonControl>
      <ButtonControl
        v-if="visiblePhoneComponent"
        @click="changeRegistrationComponent('registration-phone')"
        isBlock
        class="button-group__item"
      >
        По номеру телефона
      </ButtonControl>
      <ButtonControl
        v-if="currentRegistration !== 'registration-email'"
        @click="changeRegistrationComponent('registration-email')"
        isBlock
        class="button-group__item"
      >
        По E-mail
      </ButtonControl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  components: {
    ButtonControl: () => import('@/components/app/ButtonControl'),
    RegistrationEmail: () => import('@/components/authentication/registration/RegistrationEmail'),
    RegistrationSberbank: () =>
      import('@/components/authentication/registration/RegistrationSberbank'),
    RegistrationPhone: () => import('@/components/authentication/registration/RegistrationPhone'),
    CodeCheck: () => import('@/components/authentication/CodeCheck'),
  },
  data: () => ({
    currentRegistration: 'registration-email',
  }),
  computed: {
    currentRegistrationComponent() {
      return this.currentRegistration;
    },
    visiblePhoneComponent() {
      return (
        this.currentRegistration !== 'registration-phone' &&
        this.currentRegistration !== 'code-check'
      );
    },
  },
  watch: {
    currentRegistration(value) {
      if (value === 'code-check') {
        this.$emit('code-check', false);
      } else {
        this.$emit('code-check', true);
      }
    },
  },
  methods: {
    changeRegistrationComponent(component) {
      this.currentRegistration = component;
    },
  },
};
</script>

<style></style>
