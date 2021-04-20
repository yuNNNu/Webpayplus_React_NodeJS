const { randomBuyOrderNumber } = require("../service/utilities.service");
const {
  createTransaction,
  commitTransaction,
  statusTransaction,
} = require("../service/transaction.service");

describe("Random number returns", () => {
  test("It's less than 26", () => {
    const number = randomBuyOrderNumber();
    const numberLength = number.length;
    expect(numberLength).toBeLessThan(26);
  });
});

const buyOrder = "1234567891234567891234567";
const amount = "12990";

describe("Create transaction", () => {
  test("Return token", async () => {
    const responseCreateTransaction = await createTransaction(buyOrder, amount);
    const tokenLength = responseCreateTransaction.token.length;
    expect(tokenLength).toBeGreaterThan(0);
  });

  test("Return url", async () => {
    const responseCreateTransaction = await createTransaction(buyOrder, amount);
    const urlLength = responseCreateTransaction.url.length;
    expect(urlLength).toBeGreaterThan(0);
  });
});

describe("Status Transaction", () => {
  test("Get data response", async () => {
    const responseCreateTransaction = await createTransaction(buyOrder, amount);
    const token = responseCreateTransaction.token;
    const responseStatusTransaction = await statusTransaction(token);
    const sessionIdLength = responseStatusTransaction.session_id.length;
    expect(sessionIdLength).toBeGreaterThan(0);
  });
});
