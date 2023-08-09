// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFgKeU_fYbx7zi397nMfFKOoZ1K69gnVc",
    authDomain: "world-volunteer-app.firebaseapp.com",
    projectId: "world-volunteer-app",
    storageBucket: "world-volunteer-app.appspot.com",
    messagingSenderId: "787601491669",
    appId: "1:787601491669:web:2eb83cafba50c5f13c045c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;