const {
  createTransaction,
  commitTransaction,
  statusTransaction,
} = require("../service/transaction.service");
const {
  randomBuyOrderNumber,
  ApprovedOrRejectedMessage,
} = require("../../server/service/utilities.service");
require("./../config/Config");

let create = async (req, res) => {
  try {
    let body = req.body;
    const amount = body.amount;
    const buyOrderNumber = randomBuyOrderNumber();
    const responseCreateTransaction = await createTransaction(
      buyOrderNumber,
      amount
    );
    const tokenTransaction = responseCreateTransaction.token;
    res.status(200).send({
      url: responseCreateTransaction.url + "?token_ws=" + tokenTransaction,
      token: tokenTransaction,
    });
  } catch (err) {
    console.log("🚀 ~ file: webpay.controller.js ~ line 5 ~ pay ~ err", err);
    res.status(400).send(err);
  }
};

let commit = async (req, res) => {
  try {
    const token = req.body.token_ws;
    const responseCommitTransaction = await commitTransaction(token);
    const responseCode = responseCommitTransaction.response_code;
    ApprovedOrRejectedMessage(responseCode);
    const routeRedirect = `${process.env.HOSTROUTE}/voucher/${token}`;
    res.redirect(routeRedirect);
  } catch (err) {
    console.error(
      "🚀 ~ file: transaction.controller.js ~ line 34 ~ commit ~ err",
      err
    );
    throw err;
  }
};

let status = async (req, res) => {
  try {
    const token = req.params.token;
    const responseStatusTransaction = await statusTransaction(token);
    res.status(200).send(responseStatusTransaction);
  } catch (err) {
    res.status(400).send(err);
    console.log(
      "🚀 ~ file: transaction.controller.js ~ line 56 ~ status ~ err",
      err
    );
  }
};

module.exports = {
  create,
  commit,
  status,
};
