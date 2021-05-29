import firebaseConfig from './firebaseConfig'; // create one
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
