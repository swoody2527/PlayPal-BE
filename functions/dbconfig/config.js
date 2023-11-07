const {initializeApp} = require("firebase/app");
const {getFirestore} = require("firebase/firestore");
const admin = require("firebase-admin");

const serviceAccount = require("../permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJqSOlwwuLPMnvuJ9edAEXlE_bJlfWWbQ",
  authDomain: "playpal-723dd.firebaseapp.com",
  projectId: "playpal-723dd",
  storageBucket: "playpal-723dd.appspot.com",
  messagingSenderId: "434887247433",
  appId: "1:434887247433:web:636503bb15e5009e51e198",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = {db};
