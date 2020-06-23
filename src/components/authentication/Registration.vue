<template>
  <div class="Registration">
    <keep-alive>
      <component v-bind:is="currentRegistrationComponent"></component>
    </keep-alive>
    <p>Создавая аккаунт, вы соглашаетесь с правилами платформы и обработкой персональных данных</p>
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
        v-if="currentRegistration !== 'registration-phone'"
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
    <div class="button-group">
      <ButtonControl class="button-group__item" isBlock type="google">GMAIL</ButtonControl>
      <ButtonControl class="button-group__item" isBlock type="fb">FACEBOOK</ButtonControl>
    </div>
    <div class="button-group">
      <ButtonControl class="button-group__item" isBlock type="vk">Вконтакте</ButtonControl>
      <ButtonControl class="button-group__item" isBlock type="icloud">icloud </ButtonControl>
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
  },
  data: () => ({
    currentRegistration: 'registration-email',
  }),
  computed: {
    currentRegistrationComponent() {
      return this.currentRegistration;
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
