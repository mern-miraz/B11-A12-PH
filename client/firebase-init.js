import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6Flflt_I9_M-cn5Y_MD8fBtHk5xXqzu4",
  authDomain: "course-management-system-ph.firebaseapp.com",
  projectId: "course-management-system-ph",
  storageBucket: "course-management-system-ph.firebasestorage.app",
  messagingSenderId: "341841652072",
  appId: "1:341841652072:web:61f6407e355abfa9fb0edd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
