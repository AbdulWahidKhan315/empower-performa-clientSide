// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNkKR4yvDJe27GuzGAIFnqb3ZE6gou_Vk",
    authDomain: "empower-performa.firebaseapp.com",
    projectId: "empower-performa",
    storageBucket: "empower-performa.appspot.com",
    messagingSenderId: "127301726232",
    appId: "1:127301726232:web:e3b00e7e890f08570a136d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;