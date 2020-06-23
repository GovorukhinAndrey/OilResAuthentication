import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD1SF6CT1pXCZ0r2nlQtEMDIhRzP-Egd2o',
  authDomain: 'oilresauthentication.firebaseapp.com',
  databaseURL: 'https://oilresauthentication.firebaseio.com',
  projectId: 'oilresauthentication',
  storageBucket: 'oilresauthentication.appspot.com',
  messagingSenderId: '184101718423',
  appId: '1:184101718423:web:208821f93121aeb67b9cd2',
  measurementId: 'G-6GMXYPGL3M',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.database();
export const firebaseAuth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebaseApp;
