import { API } from "./../config/Config";

export const create = (data) => {
  const url = `${API}/create`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .then((err) => {
      return err;
    });
};

export const status = (token) => {
  const url = `${API}/status/${token}`;
  const params = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .then((err) => {
      return err;
    });
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
