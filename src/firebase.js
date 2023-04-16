/*
 * Devido as atulizações do firebase, está é a nova forma de importar suas dependencias.
 */
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

/*
 * Add o array de dados de conexão dentro da função firebase.initializeApp(), para desta forma,
 * termos acesso a algumas informações adicionais como database, autenticação, entre outros...
 */
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMnA2lb6_3JTDiln5QcntG-qk0prRThKw",
    authDomain: "instagram-clone-c7cb1.firebaseapp.com",
    projectId: "instagram-clone-c7cb1",
    storageBucket: "instagram-clone-c7cb1.appspot.com",
    messagingSenderId: "798393577791",
    appId: "1:798393577791:web:87db217413a0ac68f9a38a",
    measurementId: "G-QEPW42Z59V"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

/*
 * Exportando nossas constantes definidas acima, para conseguirmos utilizar.
 */
export {db, auth, storage, functions};