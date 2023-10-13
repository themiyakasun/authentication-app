import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDENFxD5I0t6uIYcM2Q3i55XEDfdNoPl1w',
  authDomain: 'nextauth-2dd31.firebaseapp.com',
  projectId: 'nextauth-2dd31',
  storageBucket: 'nextauth-2dd31.appspot.com',
  messagingSenderId: '304581186550',
  appId: '1:304581186550:web:6000cde8f2cfe8bb4eedd7',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
