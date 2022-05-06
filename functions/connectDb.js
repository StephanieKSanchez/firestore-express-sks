
const admin = require("firebase-admin");

const serviceAccount = require("path/to/serviceAccountKey.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
export const groceryStoresCollection = db.collection('groceryStores');