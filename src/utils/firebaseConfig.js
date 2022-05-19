// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg8Tnu-nylRKi7Gl4RB_QFiHkoECDDwa4",
  authDomain: "cell-com-9216b.firebaseapp.com",
  projectId: "cell-com-9216b",
  storageBucket: "cell-com-9216b.appspot.com",
  messagingSenderId: "235655472701",
  appId: "1:235655472701:web:984dbf99a00921ebd82c54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;