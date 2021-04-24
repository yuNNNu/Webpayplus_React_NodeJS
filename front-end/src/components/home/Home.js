import React from "react";
import $ from "jquery";
import { useState } from "react";
import { create, isString, isEmpty } from "./../../service/Transaction.service";
import Swal from "sweetalert2";

export default function Home() {
  /*=============================================
	                    Hook
	=============================================*/

  const [transaction, createTransaction] = useState({
    amount: "",
  });

  /*=============================================
	                    OnChange
	=============================================*/
  const changeAmount = (e) => {
    createTransaction({
      amount: $("#newAmount").val(),
    });
  };

  /*=============================================
	                    OnSubmit
	=============================================*/
  const submitAmount = async (e) => {
    $(".alert").remove();
    e.preventDefault();
    const { amount } = transaction;
    const isAmountEmpty = await isEmpty(amount);
    const isAmountANumber = await isString(amount);
    if (isAmountEmpty) {
      Swal.fire(
        "Ha ocurrido un problema!",
        "El campo no puede ir vacío.",
        "error"
      );
      return;
    }
    if (isAmountANumber) {
      const responseCreate = await create(transaction);
      const url = responseCreate.url;
      window.open(url, "_blank");
    } else {
      Swal.fire(
        "Ha ocurrido un problema!",
        "Sólo se permiten números.",
        "error"
      );
      return;
    }
  };
  return (
    <form onChange={changeAmount} onSubmit={submitAmount} className="col-lg-4">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1>WebPay Plus</h1>
        </div>
        <div className="panel-body"></div>
        <div className="panel-footer">
          <div className="form-group mt-2 ml-5 mr-5">
            <label>Ingresar Monto:</label>
            <input
              type="text"
              class="form-control"
              id="newAmount"
              name="amount"
              placeholder="Ingrese un monto"
            ></input>
          </div>
          <div className="row ml-1">
            <div className="col-2"></div>
            <a
              href="https://www.transbankdevelopers.cl/documentacion/como_empezar#ambiente-de-integracion"
              target="_blank"
              className="btn btn-md col-3"
            >
              Test Cards
            </a>
            <div className="col-2"></div>
            <button className="btn btn-md col-3" type="submit">
              Comprar
            </button>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </form>
  );
}
