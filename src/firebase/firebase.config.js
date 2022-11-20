// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId, 

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,


//   apiKey: "AIzaSyCpbCk6PC_YLplZI4GZ31tIikk8SvxlZr0",
//   authDomain: "doctors-portal-2c95d.firebaseapp.com",
//   projectId: "doctors-portal-2c95d",
//   storageBucket: "doctors-portal-2c95d.appspot.com",
//   messagingSenderId: "583337085015",
//   appId: "1:583337085015:web:94da5aa039868ec2897b12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;