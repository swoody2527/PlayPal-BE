const {initializeApp} = require("firebase/app");
const {getFirestore} = require("firebase/firestore");
const admin = require("firebase-admin");

const serviceAccount = require("../permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = {db};
