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
    async getCodePhone({ commit }, phone) {
      const code = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      console.log(phone, code);
      try {
        // await firebaseDb.ref(`/users/EmFoIyzFU0WQIqgiGyFRXHxohqL2/info`).update({
        //   codePhone: code,
        //   phone,
        // });
        console.log('efafasf');
        return code;
      } catch (error) {
        commit('setError', error, { root: true });
        throw error.message;
      }
    },
    async registerForPhone({ commit }) {
      try {
        await firebaseAuth.signInWithEmailAndPassword('test-phone@gmail.com', '123456');
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
