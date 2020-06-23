<template>
  <div class="authentication">
    <div v-if="isHeader" class="authentication__header">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        :class="[
          'authentication__header-tab',
          { 'authentication__header-tab--active': currentTab === tab.name },
        ]"
        @click="currentTab = tab.name"
      >
        {{ tab.text }}
      </button>
    </div>
    <div class="authentication__body">
      <keep-alive>
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </keep-alive>
      <div class="button-group">
        <ButtonControl @click="signInGoogle" class="button-group__item" isBlock type="google">
          GMAIL
        </ButtonControl>
        <ButtonControl class="button-group__item" isBlock type="fb">FACEBOOK</ButtonControl>
      </div>
      <div class="button-group">
        <ButtonControl class="button-group__item" isBlock type="vk">Вконтакте</ButtonControl>
        <ButtonControl class="button-group__item" isBlock type="icloud">icloud </ButtonControl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authentication',
  components: {
    Login: () => import('@/components/authentication/Login'),
    Registration: () => import('@/components/authentication/Registration'),
    ButtonControl: () => import('@/components/app/ButtonControl'),
  },
  data: () => ({
    isHeader: true,
    tabs: [
      { text: 'Вход', name: 'login' },
      { text: 'Регистрация', name: 'registration' },
    ],
    currentTab: 'registration',
  }),
  computed: {
    currentTabComponent() {
      return this.currentTab;
    },
  },
  methods: {
    signInGoogle() {
      this.$store.dispatch('auth/signInGoogle');
    },
  },
};
</script>

<style lang="scss">
.authentication {
  width: 100%;
  max-width: 407px;
  margin: auto;

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__header-tab {
    cursor: pointer;
    color: #b1b1b1;
    border-radius: 4px;
    margin-right: 4px;
    width: 100%;
    text-align: center;
    padding: 18px 0 24px;
    background-color: transparent;
    border: solid #e8e8e8;
    border-width: 1px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: rem(11);
    letter-spacing: 0.05em;

    &--active {
      background-color: $white;
      border-color: $white;
      color: $accent;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  &__body {
    border-radius: 4px;
    background: $white;
    position: relative;
    top: -6px;
    padding: 45px 32.5px 48px;
  }
}
</style>
