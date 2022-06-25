const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51KGIk9AqC1MHW6xL6uFV60zTmTx8pq1kOGXhcTE0mob8xpIY1GbapHwpVgF99cQuYf7dZWmwDHJncPU5YS8m0lQ400eV0qq00U"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentItem = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentItem.client_ssecret,
  });
});

exports.api = functions.https.onRequest(app);
