<template>
  <div id="app">
    <Profile v-if="isAuthorized"></Profile>
    <Authentication v-else></Authentication>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import messages from '@/utils/messages';
export default {
  name: 'App',
  components: {
    Authentication: () => import('@/components/authentication/Authentication'),
    Profile: () => import('@/components/Profile'),
  },
  computed: {
    ...mapState('auth', ['isAuthorized']),
    error() {
      return this.$store.state.error;
    },
  },
  watch: {
    error(firebaseError) {
      this.$swal('Error', {
        text: messages[firebaseError.code] || 'Что-то пошло не так',
        icon: 'error',
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  background-color: $bg-color;
  display: flex;
  min-height: 100vh;
  padding: 0 15px;
}
</style>
