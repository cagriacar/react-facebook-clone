import firebase from 'firebase';

const firebaseConfig = {
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export  {provider, auth};
export default db;
