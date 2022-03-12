import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyChncgb60ofHWpRt51bPPH_1FMLtkxBcSM',
  authDomain: 'reactnative-mealstogo.firebaseapp.com',
  projectId: 'reactnative-mealstogo',
  storageBucket: 'reactnative-mealstogo.appspot.com',
  messagingSenderId: '225413781277',
  appId: '1:225413781277:web:1351e230ef7d79458373f4',
};

initializeApp(firebaseConfig);
export const auth = getAuth();
