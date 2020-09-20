import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyAl-slJtHvgKzZdrR-rdpQ1eudw7396HaM",
  authDomain: "lister-2-88bad.firebaseapp.com",
  databaseURL: "https://lister-2-88bad.firebaseio.com",
  projectId: "lister-2-88bad",
  storageBucket: "gs://lister-2-88bad.appspot.com",
  messagingSenderId: "694695829587",
  appId: "1:694695829587:web:75b581be8a7dfab433e6a6",
  measurementId: "G-ND49NJ1DLL",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
