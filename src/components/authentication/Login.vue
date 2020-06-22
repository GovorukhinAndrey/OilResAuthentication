<template>
  <div class="login">
    <keep-alive>
      <component v-bind:is="currentLoginComponent"></component>
    </keep-alive>
    <h3 class="subtitle">Другие способы входа</h3>

    <div class="button-group">
      <ButtonControl
        v-if="currentLogin !== 'login-sberbank'"
        @click="changeLoginComponent('login-sberbank')"
        isBlock
        class="button-group__item"
      >
        Войти по Сбербанк ID
      </ButtonControl>
      <ButtonControl
        v-if="currentLogin !== 'login-phone'"
        @click="changeLoginComponent('login-phone')"
        isBlock
        class="button-group__item"
      >
        По номеру телефона
      </ButtonControl>
      <ButtonControl
        v-if="currentLogin !== 'login-email'"
        @click="changeLoginComponent('login-email')"
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
  name: 'login',
  components: {
    ButtonControl: () => import('@/components/app/ButtonControl'),
    LoginEmail: () => import('@/components/authentication/login/LoginEmail'),
    LoginSberbank: () => import('@/components/authentication/login/LoginSberbank'),
    LoginPhone: () => import('@/components/authentication/login/LoginPhone'),
  },
  data: () => ({
    isRemember: false,
    currentLogin: 'login-email',
  }),
  computed: {
    currentLoginComponent() {
      return this.currentLogin;
    },
  },
  methods: {
    changeLoginComponent(component) {
      this.currentLogin = component;
    },
  },
};
</script>

<style></style>
