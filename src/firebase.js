import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAipA9d9rmPLjl0MS-B8_6Qz71mIzIuUDQ",
  authDomain: "oxa-sukhrob.firebaseapp.com",
  projectId: "oxa-sukhrob",
  storageBucket: "oxa-sukhrob.appspot.com",
  messagingSenderId: "1031734849659",
  appId: "1:1031734849659:web:44e131dfccd475805372de",
  measurementId: "G-YFCFXRHVL3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
