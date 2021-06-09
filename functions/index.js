const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IxnB8HcO9uegdC5nfzKxTbcxPrTZR2IfPFJMAVayZkyz9QGynOTtDGE27KROpxjwGaiNBBHPjTSKMLG5pnrcIRn00GxWL8F1w");
//http://localhost:5001/clone-eec7a/us-central1/api  
// api 

// api config
const app =express();

// middlewares 
app.use(cors({ origin:true }));
app.use(express.json());
     
// api routes 
app.get('/' , (request , response ) => response.status(200).send('Hello World'))

app.post('/payments/create' , async (request , response ) => {
    const total = request.query.total;
    
    console.log(' the request responde boom!!!>>>' , total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency : 'usd',
    });
    // ok - created
    response.status(201).send({  
        clientSecret : paymentIntent.client_secret,
    })
})
    
// listen commands

exports.api = functions.https.onRequest(app);
