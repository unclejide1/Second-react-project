import Rebase from "re-base"
import firebase from "firebase"

const firebaseApp  = firebase.initializeApp({
    apiKey: "AIzaSyD5SdLEaqVAg8FS58KWC-Qj0TW4xZGzD9U",
    authDomain: "catch-of-the-day-jide.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jide.firebaseio.com"
})


const base = Rebase.createClass(firebaseApp.database())

//this is a named export
export {firebaseApp};

// this a default export
export default base;