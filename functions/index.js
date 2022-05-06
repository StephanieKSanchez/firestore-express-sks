import functions from 'firebase-functions';
import express from 'express'; // connects to express
import cors from 'cors';

// import { groceryStoresCollection } from "./connectDb";

const app = express(); // creates api

app.get('/test', (req, res) => {
    res.send('This is actually working 👩🏽‍💻')
});

app.get('/', (req, res) =>{
    res.send('This is HOME 🏡');
});

export const api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

