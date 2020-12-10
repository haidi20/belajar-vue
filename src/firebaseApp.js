import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCvK8HiGvW9zSJfkPxLKwznYRas1DfpNiI",
    authDomain: "turnout-365d4.firebaseapp.com",
    projectId: "turnout-365d4",
    storageBucket: "turnout-365d4.appspot.com",
    messagingSenderId: "202639871899",
    appId: "1:202639871899:web:f001768591c2c471041b3e"
};

// firebase.initializeApp(firebaseConfig);
export const firebaseApp = firebase.initializeApp(firebaseConfig);