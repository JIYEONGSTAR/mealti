import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import firebaseConfig from "firebaseConfig.json";

firebase.initializeApp(firebaseConfig);

const firestore = getFirestore();
const fireAuth = firebase.auth();

export { firestore, fireAuth };
