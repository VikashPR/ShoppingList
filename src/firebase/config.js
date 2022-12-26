import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDy4sb2GzBeGS9UUUKHpNpNHCYqNJ0MCxk',
  authDomain: 'shopping-list-e26b2.firebaseapp.com',
  projectId: 'shopping-list-e26b2',
  storageBucket: 'shopping-list-e26b2.appspot.com',
  messagingSenderId: '207112617228',
  appId: '1:207112617228:web:1686cca80427da4b5f1d29',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
