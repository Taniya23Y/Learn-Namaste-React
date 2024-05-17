// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDPQpCIP5McqaFNayWKiGdf3by9umZIas",
  authDomain: "netflix-gpt-882.firebaseapp.com",
  projectId: "netflix-gpt-882",
  storageBucket: "netflix-gpt-882.appspot.com",
  messagingSenderId: "644885401623",
  appId: "1:644885401623:web:ba171b58680b46ee9ccc52",
  measurementId: "G-C7PXG9RMBN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
