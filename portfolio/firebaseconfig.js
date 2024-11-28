// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUY_P3a5-MUNk87hHrpmS3TnvjR6XRXZA",
  authDomain: "portfolio-contact-d4e1a.firebaseapp.com",
  projectId: "portfolio-contact-d4e1a",
  storageBucket: "portfolio-contact-d4e1a.firebasestorage.app",
  messagingSenderId: "972708920233",
  appId: "1:972708920233:web:6251a274f9e69f5cf8e2b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth , db}