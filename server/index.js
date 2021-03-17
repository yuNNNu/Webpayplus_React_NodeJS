require("./config/Config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(require("./route/transaction.route"));

app.listen(process.env.PORT, () => {
  console.log(`On Port ${process.env.PORT}!`);
});
