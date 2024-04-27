// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeZfUlwPekEC8kcPRrUvkJaJRgiciaGDA",
    authDomain: "bae-recipe-v2.firebaseapp.com",
    projectId: "bae-recipe-v2",
    storageBucket: "bae-recipe-v2.appspot.com",
    messagingSenderId: "854857465569",
    appId: "1:854857465569:web:b180baae68780c0edb41a0",
    measurementId: "G-HN6MB9GLYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

// https://www.youtube.com/watch?v=WpIDez53SK4
// https://youtu.be/S0ehjKlPcLA?si=DrpsGgE3sLm1gWZp
