import { randomBuyOrderNumber } from "../../../server/controller/transaction.controller";
import {
  createTransaction,
  commitTransaction,
  statusTransaction,
} from "../../../server/service/transaction.service";

describe("Random number returns", () => {
  test("It's less than 26", () => {
    const number = randomBuyOrderNumber();
    const numberLength = number.length;
    expect(numberLength).toBeLessThan(26);
  });

  test("Create transaction", async () => {
    const buyOrder = 1234567891234567891234567;
    const amount = 12990;
    const responseCreateTransaction = await createTransaction(buyOrder, amount);
    console.log(
      "🚀 ~ file: transaction.test.js ~ line 16 ~ test ~ responseCreateTransaction",
      responseCreateTransaction
    );
  });
});
