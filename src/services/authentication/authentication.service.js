import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../../firebase.config';

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const regiterRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
