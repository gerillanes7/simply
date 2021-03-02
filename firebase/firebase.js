import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAbo2RU-OYWPTKl_Vv_n-njuvtzviQ4uaA",
    authDomain: "simply-a6e2e.firebaseapp.com",
    projectId: "simply-a6e2e",
    storageBucket: "simply-a6e2e.appspot.com",
    messagingSenderId: "966206480495",
    appId: "1:966206480495:web:30391b684c0a4604936d9a"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default {
    firebase,
    db
}