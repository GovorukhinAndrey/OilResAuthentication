<template>
  <div class="profile">
    <h2 class="title">Пользователь {{ fullName }} авторизован</h2>
    <ButtonControl class="profile__btn" @click="logout">Выйти</ButtonControl>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Profile',
  components: {
    ButtonControl: () => import('@/components/app/ButtonControl'),
  },
  computed: {
    ...mapState('info', { fullName: state => state.info.fullName, info: state => state.info }),
  },
  async mounted() {
    if (!Object.keys(this.info).length) {
      await this.$store.dispatch('info/fetchInfo');
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
};
</script>

<style lang="scss">
.profile {
  width: 100%;
  max-width: 407px;
  margin: auto;
  background-color: $white;
  padding: 45px 32.5px 48px;
  border-radius: 4px;

  &__btn {
    margin-top: 20px;
  }
}
</style>
