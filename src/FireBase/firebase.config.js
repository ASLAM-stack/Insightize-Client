// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXIHE_mQu_RAj8Oue1x8AhOsAm2O-H4jU",
  authDomain: "insightize.firebaseapp.com",
  projectId: "insightize",
  storageBucket: "insightize.appspot.com",
  messagingSenderId: "255335493914",
  appId: "1:255335493914:web:048f9f385744b5cba93ca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;