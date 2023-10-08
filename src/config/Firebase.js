// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZLZ9OZ68tBXqQlzy9VKrOevIh5hSBPf0",
  authDomain: "hackathon-project-2c2e2.firebaseapp.com",
  projectId: "hackathon-project-2c2e2",
  storageBucket: "hackathon-project-2c2e2.appspot.com",
  messagingSenderId: "194145251172",
  appId: "1:194145251172:web:1d9738d098f21b8da05471",
  measurementId: "G-TN3DDLHYVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export{app ,firestore,analytics}