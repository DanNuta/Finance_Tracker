import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBz37V1n8pXZdr2TfQ8IcrWXfcvmUKFxF0",
    authDomain: "mymoney-74ae3.firebaseapp.com",
    projectId: "mymoney-74ae3",
    storageBucket: "mymoney-74ae3.appspot.com",
    messagingSenderId: "612884144110",
    appId: "1:612884144110:web:2b77f0a2f1a6d17bc638ff"
  };


  //init firebase

  firebase.initializeApp(firebaseConfig);

  //init firestore

  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();



  export {projectFirestore, projectAuth}