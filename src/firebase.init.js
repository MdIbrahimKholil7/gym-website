// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId

};
/* const firebaseConfig = {
  apiKey: "AIzaSyBgC_oz0ADfkRsrjiLdnchMtiIBhi9IUIk",
  authDomain: "gym-project-2.firebaseapp.com",
  projectId: "gym-project-2",
  storageBucket: "gym-project-2.appspot.com",
  messagingSenderId: "149775812735",
  appId: "1:149775812735:web:779c7be419cf13d057974a"
}; */
console.log(process.env.REACT_APP_apiKey)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth