import { firebaseAuth, firebaseDb, provider } from '@/firebase';
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
    async signInGoogle({ dispatch, commit }) {
      try {
        const result = await firebaseAuth.signInWithPopup(provider);
        const user = result.user;
        const uid = await dispatch('getUid');
        await firebaseDb.ref(`/users/${uid}/info`).set({
          fullName: user.displayName,
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
    async loginForEmail({ commit }, { email, password }) {
      try {
        await firebaseAuth.signInWithEmailAndPassword(email, password);
        commit('setAuthorized', true);
      } catch (error) {
        commit('setError', error, { root: true });
        throw error.message;
      }
    },
    async logout({ commit }) {
      await firebaseAuth.signOut();
      commit('setAuthorized', false);
      commit('info/clearInfo', null, { root: true });
    },
  },
};
