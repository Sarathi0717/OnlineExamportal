import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCWKCcYYeUyJBZaih-r_F8yRtP4cppkfqA",
  authDomain: "reactauth-71435.firebaseapp.com",
  projectId: "reactauth-71435",
  storageBucket: "reactauth-71435.firebasestorage.app",
  messagingSenderId: "132868610602",
  appId: "1:132868610602:web:4a93c97caf47c3d8218153"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);