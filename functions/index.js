const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: ["http://localhost:3000"], // allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // allow these methods
  credentials: true, // allow credentials (e.g., cookies) to be sent
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

exports.api = functions.https.onRequest(app);
