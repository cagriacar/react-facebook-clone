import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyADzuYmSSmFDsiDm7R8-5NvfCjOZC6Ocsk",
  authDomain: "facebook-clone-42f63.firebaseapp.com",
  databaseURL: "https://facebook-clone-42f63.firebaseio.com",
  projectId: "facebook-clone-42f63",
  storageBucket: "facebook-clone-42f63.appspot.com",
  messagingSenderId: "398251628286",
  appId: "1:398251628286:web:f3f010625c9a763561f7af",
  measurementId: "G-XJNB73JFZD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export  {provider, auth};
export default db;