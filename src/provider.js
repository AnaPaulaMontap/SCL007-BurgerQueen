import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBXGfThCW0QedlE-UhYaZz6ghvTRflCFLk",
    authDomain: "burguerqueen-109ab.firebaseapp.com",
    databaseURL: "https://burguerqueen-109ab.firebaseio.com",
    projectId: "burguerqueen-109ab",
    storageBucket: "burguerqueen-109ab.appspot.com",
    messagingSenderId: "488132391000"
  };
  firebase.initializeApp(config);

export const database = firebase.database().ref();