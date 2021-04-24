import { API } from "./../config/Config";
const axios = require("axios");
const headers = { "Content-Type": "application/json" };

export const create = async (data) => {
  const url = `${API}/create`;
  try {
    const result = await axios.post(
      url,
      {
        amount: data.amount,
      },
      {
        headers: headers,
      }
    );
    return result.data;
  } catch (err) {
    console.error(
      "🚀 ~ file: Transaction.service.js ~ line 18 ~ create ~ err",
      err
    );
  }
};

export const status = async (token) => {
  const url = `${API}/status/${token}`;
  try {
    const result = await axios.get(url, {
      headers: headers,
    });
    return result.data;
  } catch (err) {
    console.error(
      "🚀 ~ file: Transaction.service.js ~ line 39 ~ status ~ err",
      err
    );
  }
};

export const approvedOrRejected = (response_code) => {
  let responseTitle;
  if (response_code === 0) {
    responseTitle = "Transacción Aprobada";
  } else {
    responseTitle = "Transacción Rechazada";
  }
  return responseTitle;
};

export const isString = (amount_field) => {
  return !isNaN(amount_field);
};

export const isEmpty = (amount_field) => {
  return amount_field == null || amount_field.length === 0;
};
