import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAruIZhupu1TZHNGlz_o5Tqr_pvjZD_fQo",
  authDomain: "iceams2025-prod.firebaseapp.com",
  projectId: "iceams2025-prod",
  storageBucket: "iceams2025-prod.firebasestorage.app",
  messagingSenderId: "434258032904",
  appId: "1:434258032904:web:66f83567ef5647623414bd"
};

const app: FirebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

// Export Firestore instance
export const db: Firestore = getFirestore(app);