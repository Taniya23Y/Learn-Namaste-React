import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDPQpCIP5McqaFNayWKiGdf3by9umZIas",
  authDomain: "netflix-gpt-882.firebaseapp.com",
  projectId: "netflix-gpt-882",
  storageBucket: "netflix-gpt-882.appspot.com",
  messagingSenderId: "644885401623",
  appId: "1:644885401623:web:ba171b58680b46ee9ccc52",
  measurementId: "G-C7PXG9RMBN",
  databaseURL: "https://netflix-gpt-882-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export { app }; // Export the app object
