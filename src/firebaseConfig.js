// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCYLFgt59_rGKN9o721D_s2DL-FJmVb4n4",
  authDomain: "vote-poll-7645c.firebaseapp.com",
  projectId: "vote-poll-7645c",
  storageBucket: "vote-poll-7645c.appspot.com",
  messagingSenderId: "697954353804",
  appId: "1:697954353804:web:3633ebf592c897cd09b1a9",
  measurementId: "G-X0JZZXTLJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

