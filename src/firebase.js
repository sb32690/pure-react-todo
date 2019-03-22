import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyC2k0vvK6MsScduzIbFhaUvGRVknYKTwVk",
  authDomain: "react-template-firedux-todo.firebaseapp.com",
  databaseURL: "https://react-template-firedux-todo.firebaseio.com",
  projectId: "react-template-firedux-todo",
  storageBucket: "react-template-firedux-todo.appspot.com",
  messagingSenderId: "214493384373"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
//allows firebase to work with redux
export const todosRef = databaseRef.child("todos")