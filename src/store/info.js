import { firebaseDb } from '@/firebase';
export default {
  namespaced: true,
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, payload) {
      state.info = payload;
    },
    clearInfo(state) {
      state.info = {};
    },
  },
  getters: {},
  actions: {
    async fetchInfo({ dispatch, commit }) {
      try {
        const uid = await dispatch('auth/getUid', null, { root: true });
        const info = (await firebaseDb.ref(`/users/${uid}/info`).once('value')).val();
        commit('setInfo', info);
      } catch (error) {
        commit('setError', error, { root: true });
        throw error.message;
      }
    },
  },
};
