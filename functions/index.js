import functions from 'firebase-functions'; // functions is all we need from firebase
import express from 'express'; // connects to express - which is the framework express to make it easy to make the API
import cors from 'cors';


import { getAllGroceryStores } from './addGroceryStore.js';

const app = express(); // i'm using express 
app.use(cors());
app.use(express.json()); // i will use json format to receive this info 

app.get('/grocerystores', getAllGroceryStores) // go to my groceryStores collection & get me this function called getGroceryStores

// app.post('/grocerystores', addGroceryStore); // adding grocerystore to my groceryStores collection


export const api = functions.https.onRequest(app); // just for deployment 



// app.get('/', (req, res) =>{
//     res.send('This is HOME 🏡');
// });



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

