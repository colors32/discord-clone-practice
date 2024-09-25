import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMtcIL8HKuMML4_adPZu3tDNx94HIa56E",
  authDomain: "discord-clone-practice-6ff92.firebaseapp.com",
  projectId: "discord-clone-practice-6ff92",
  storageBucket: "discord-clone-practice-6ff92.appspot.com",
  messagingSenderId: "530734153118",
  appId: "1:530734153118:web:039c1eceea5494c752aa8f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
