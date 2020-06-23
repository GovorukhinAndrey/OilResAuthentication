import { firebaseAuth, firebaseDb } from '@/firebase';
export default {
  namespaced: true,
  state: {
    isAuthorized: false,
  },
  mutations: {
    setAuthorized(state, payload) {
      state.isAuthorized = payload;
    },
  },
  getters: {},
  actions: {
    async registerForEmail({ dispatch, commit }, { email, password, fullName, phone }) {
      try {
        await firebaseAuth.createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebaseDb.ref(`/users/${uid}/info`).set({
          fullName,
          phone,
        });
        commit('setAuthorized', true);
      } catch (error) {
        commit('setError', error, { root: true });
        throw error.message;
      }
    },
    getUid() {
      const user = firebaseAuth.currentUser;
      return user ? user.uid : null;
    },
    async logout({ commit }) {
      await firebaseAuth.signOut();
      commit('setAuthorized', false);
      commit('info/clearInfo', null, { root: true });
    },
  },
};
