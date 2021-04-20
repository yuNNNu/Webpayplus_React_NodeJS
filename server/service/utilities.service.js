const randomBuyOrderNumber = () => {
  try {
    const dateNow = Date.now();
    const randomNumber = Math.round(
      Math.abs(Math.random() + 0.5) * 10000000000
    );
    let buyOrder = "" + dateNow + randomNumber;
    // this was for an internal transbank variable condition of "buy_order" in the official doc
    if (buyOrder.length >= 26) {
      buyOrder = randomBuyOrderNumber();
    }
    return buyOrder;
  } catch (err) {
    console.log(
      "🚀 ~ file: utilities.service.js ~ line 19 ~ randomBuyOrderNumber ~ err",
      err
    );
    throw err;
  }
};

const ApprovedOrRejectedMessage = (responseCode) => {
  if (responseCode === 0) {
    console.log("Approved Transaction ~ 🚀");
  } else {
    console.log("Transaction Rejected ~ 🚀");
  }
  return;
};

module.exports = {
  randomBuyOrderNumber,
  ApprovedOrRejectedMessage,
};
