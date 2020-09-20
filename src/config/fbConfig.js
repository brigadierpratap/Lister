import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyDxZWADwqMmXAX0FXO55LlM4hF92BnKoUs",
  authDomain: "lister-49423.firebaseapp.com",
  databaseURL: "https://lister-49423.appspot.com",
  projectId: "lister-49423",
  storageBucket: "gs://lister-49423.appspot.com",
  messagingSenderId: "1069645442610",
  appId: "1:1069645442610:web:1a343a68a3376c92d4d62b",
  measurementId: "G-91MTGPLST6",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
