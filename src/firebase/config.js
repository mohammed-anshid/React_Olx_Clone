import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBzPsFVksFqhszkqunMiO14qeGpJJbTH2w",
    authDomain: "olx-clone-f709b.firebaseapp.com",
    projectId: "olx-clone-f709b",
    storageBucket: "olx-clone-f709b.appspot.com",
    messagingSenderId: "863794438844",
    appId: "1:863794438844:web:13e51d6f7a81832532a6b9",
    measurementId: "G-HE6F9VE0JJ"
};

export default firebase.initializeApp(firebaseConfig)