// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkvTzel07V3Vxhf4EAxIEZ79kASxM---E',
  authDomain: 'rblocks-64be8.firebaseapp.com',
  projectId: 'rblocks-64be8',
  storageBucket: 'rblocks-64be8.firebasestorage.app',
  messagingSenderId: '1067891917308',
  appId: '1:1067891917308:web:0246941706ed2132977279',
  measurementId: 'G-7XQCNHE8S5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, analytics, db }; // Add db to exports
