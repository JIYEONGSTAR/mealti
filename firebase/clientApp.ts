import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import firebaseConfig from "firebaseConfig.json";

const app = firebase.initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const firestorage = getStorage(app);
const fireAuth = firebase.auth();

export { firestore, fireAuth, firestorage };
