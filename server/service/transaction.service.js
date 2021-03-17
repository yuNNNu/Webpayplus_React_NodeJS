require("./../config/Config");
const axios = require("axios");
const headers = {
  "Tbk-Api-Key-Id": "597055555532",
  "Tbk-Api-Key-Secret":
    "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C",
  "Content-Type": "application/json",
};
let url = process.env.WEBPAYENDPOINT + process.env.WEBPAYPATH;

const createTransaction = async (buyOrderNumber, amount) => {
  try {
    const result = await axios.post(
      url,
      {
        buy_order: buyOrderNumber,
        session_id: buyOrderNumber,
        amount: amount,
        return_url: `${process.env.APIROUTE}/commit`,
      },
      {
        headers: headers,
      }
    );

    return result.data;
  } catch (err) {
    console.error(
      "🚀 ~ file: transaction.service.js ~ line 5 ~ createTransaction ~ err",
      err
    );
    throw err;
  }
};

const commitTransaction = async (token) => {
  try {
    const result = await axios.put(`${url}/${token}`, null, {
      headers: headers,
    });
    return result.data;
  } catch (err) {
    console.log(
      "🚀 ~ file: transaction.service.js ~ line 40 ~ commitTransaction ~ err",
      err
    );
    throw err;
  }
};

const statusTransaction = async (token) => {
  try {
    const result = await axios.get(`${url}${token}`, {
      headers: headers,
    });
    return result.data;
  } catch (err) {
    console.log(
      "🚀 ~ file: transaction.service.js ~ line 57 ~ statusTransaction ~ Token Timed Out ~",
      err.code
    );
    throw err.code;
  }
};

module.exports = {
  createTransaction,
  commitTransaction,
  statusTransaction,
};
