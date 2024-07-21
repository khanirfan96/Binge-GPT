// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBonK6ldy_zCSj43_zZxyRVo4SYAb01MLg",
  authDomain: "bingegpt-a7773.firebaseapp.com",
  projectId: "bingegpt-a7773",
  storageBucket: "bingegpt-a7773.appspot.com",
  messagingSenderId: "947903612703",
  appId: "1:947903612703:web:982b1d5caaca20bf8b122a",
  measurementId: "G-JD94JYFX63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();