import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCmUBe0vuajvxmnxo9J6SU6wGZbANnh-mc",
    authDomain: "crwn-ecommerce-d576e.firebaseapp.com",
    projectId: "crwn-ecommerce-d576e",
    storageBucket: "crwn-ecommerce-d576e.appspot.com",
    messagingSenderId: "172620318657",
    appId: "1:172620318657:web:9ef53d19502a1859d21140",
    measurementId: "G-VYM1CHPLQ3"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)