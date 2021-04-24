import { create, status } from "../service/Transaction.service";

describe("Transaction Services", () => {
  test("Create transaction returns url", async () => {
    const amount = 12990;
    const transaction = {
      amount: amount,
    };
    const createTransactionResponse = await create(transaction);
    const urlLength = createTransactionResponse.url.length;
    expect(urlLength).toBeGreaterThan(0);
  });
  test("Create transaction returns token", async () => {
    const amount = 12990;
    const transaction = {
      amount: amount,
    };
    const createTransactionResponse = await create(transaction);
    const tokenLength = createTransactionResponse.token.length;
    expect(tokenLength).toBeGreaterThan(0);
  });
  test("Status transaction returns data", async () => {
    const amount = 12990;
    const transaction = {
      amount: amount,
    };
    const createTransactionResponse = await create(transaction);
    const token = createTransactionResponse.token;
    const statusTransactionResponse = await status(token);
    const buyOrderLength = statusTransactionResponse.buy_order.length;
    expect(buyOrderLength).toBeGreaterThan(0);
  });
});
