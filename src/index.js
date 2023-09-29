import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIqVOyDWshIUsMp0w6VgLSuOlMYSstbEg",
  authDomain: "jacob-briggs-portfolio.firebaseapp.com",
  projectId: "jacob-briggs-portfolio",
  storageBucket: "jacob-briggs-portfolio.appspot.com",
  messagingSenderId: "1084290393689",
  appId: "1:1084290393689:web:65a2a46d4f1b8761f83348",
  measurementId: "G-0QS8FTBNEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
