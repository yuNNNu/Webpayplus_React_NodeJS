const express = require("express");
const app = express();
const Transaction = require("../controller/transaction.controller");

app.post("/create", Transaction.create);
app.post("/commit", Transaction.commit);
app.get("/status/:token", Transaction.status);

module.exports = app;
