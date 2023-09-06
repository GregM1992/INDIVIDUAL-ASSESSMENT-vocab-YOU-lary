import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  document.querySelector('#app').innerHTML = '';
  firebase.auth().signOut();
};

export { signIn, signOut };
