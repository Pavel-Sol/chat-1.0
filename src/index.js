import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyA29jOl98BrHvL6gUyhyYG_SZ_WARWhBL4',
  authDomain: 'chat-1-3afd4.firebaseapp.com',
  projectId: 'chat-1-3afd4',
  storageBucket: 'chat-1-3afd4.appspot.com',
  messagingSenderId: '722564541291',
  appId: '1:722564541291:web:cfb163048d63e5a323fa2e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{ auth, firestore, firebase }}>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
