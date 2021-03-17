import React, { useState } from "react";
import { useParams } from "react-router";
import {
  status,
  approvedOrRejected,
} from "./../../service/Transaction.service";
export default function Paid() {
  /*=============================================
	                TOKEN PARAM
	=============================================*/
  const { token } = useParams();
  /*=============================================
	                    Hook
	=============================================*/
  const [voucher, setVoucher] = useState({
    title: "",
    buy_order: 0,
    amount: 0,
    card_detail: 0,
    transaction_date: null,
    payment_type_code: "",
    installments_number: 0,
  });
  /*=============================================
	               EXECUTE SERVICE
	=============================================*/
  const receiveStatusValues = async () => {
    const result = await status(token);
    const title = await approvedOrRejected(result.response_code);
    setVoucher({
      title: title,
      buy_order: result.buy_order,
      amount: result.amount,
      card_detail: result.card_detail,
      transaction_date: result.transaction_date,
      payment_type_code: result.payment_type_code,
      installments_number: result.installments_number,
    });
  };
  receiveStatusValues();

  return (
    <div className="col-lg-4">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>{voucher.title}</h1>
        </div>
        <div className="panel-body"></div>
        <div className="panel-footer">
          <div className="row ml-1">
            <div className="col-2"></div>
            <div className="col-8">
              <ul>
                <li>
                  <div className="form-group mt-4">
                    <label className="small mb-1">
                      Orden de Compra N°: {voucher.buy_order}
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <label className="small mb-1">
                      Monto: ${voucher.amount}
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <label className="small mb-1">
                      Número de Tarjeta: ********
                      {voucher.card_detail.card_number}
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <label className="small mb-1">
                      Fecha de Pago: {voucher.transaction_date}
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <label className="small mb-1">
                      Tipo de Pago: {voucher.payment_type_code}
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <label className="small mb-1">
                      N° Cuotas: {voucher.installments_number}
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row ml-1">
            <div className="col-3"></div>
            <a href="/" className="btn btn-md col-6">
              Go Home
            </a>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
