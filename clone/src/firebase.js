import {firebase} from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJPr3D4PvCrk-0-vx8MspSDq6IRDDtriE",
    authDomain: "clone-d4f88.firebaseapp.com",
    databaseURL: "https://clone-d4f88.firebaseio.com",
    projectId: "clone-d4f88",
    storageBucket: "clone-d4f88.appspot.com",
    messagingSenderId: "1059062333735",
    appId: "1:1059062333735:web:8080cf2432ff6b5c942902",
    measurementId: "G-TLD01GR3WG"
  };
firebase.intializeApp(firebaseConfig);


const auth = firebase.auth();

export {auth};