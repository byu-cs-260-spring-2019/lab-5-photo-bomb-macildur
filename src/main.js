import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyA2ZKkn_fKgi5iZFXkhKq57D6MnZ5Lsf4k",
    authDomain: "cs-260-lab-b.firebaseapp.com",
    databaseURL: "https://cs-260-lab-b.firebaseio.com",
    projectId: "cs-260-lab-b",
    storageBucket: "cs-260-lab-b.appspot.com",
    messagingSenderId: "231638025553",
    appId: "1:231638025553:web:8b664b272d39d50a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});