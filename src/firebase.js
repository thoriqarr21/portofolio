/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1dnTPgyHXtIjrAfyfpWy_rWmHvLQwARE",
  authDomain: "thoriqarr21.firebaseapp.com",
  projectId: "thoriqarr21",
  storageBucket: "thoriqarr21.firebasestorage.app",
  messagingSenderId: "868120277532",
  appId: "1:868120277532:web:c3429c961d088f0368e5d9",
  measurementId: "G-9YRVX77DX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);