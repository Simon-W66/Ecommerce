import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCmUBe0vuajvxmnxo9J6SU6wGZbANnh-mc",
    authDomain: "crwn-ecommerce-d576e.firebaseapp.com",
    projectId: "crwn-ecommerce-d576e",
    storageBucket: "crwn-ecommerce-d576e.appspot.com",
    messagingSenderId: "172620318657",
    appId: "1:172620318657:web:9ef53d19502a1859d21140",
    measurementId: "G-VYM1CHPLQ3"
  };

  firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;