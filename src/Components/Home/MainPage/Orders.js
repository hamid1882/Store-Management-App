import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllOrders, deleteOrder } from "../../../Slices/OrderSlice";

const Orders = () => {
  const selectAllOrdersVal = useSelector(selectAllOrders);
  const dispatch = useDispatch();

  localStorage.setItem("orders", JSON.stringify(selectAllOrdersVal));

  const getMeAdmin = localStorage.getItem("admin");

  const savedOrders = localStorage.getItem("orders");

  const salesOrders = JSON.parse(savedOrders).filter(
    (val) => val.admin === "test-sales"
  );

  const checkSalesOrders =
    getMeAdmin === "test-admin" ? JSON.parse(savedOrders) : salesOrders;

  const deleteSelectedOrder = (e) => {
    dispatch(deleteOrder(e));
  };

  const sumUpTotal = (price, qty) => {
    let addUp = [];
    for (let i = 0; i < price.length; i++) {
      addUp.push(price[i] * qty[i]);
    }

    let sum = 0;
    for (let i = 0; i < addUp.length; i++) {
      sum += addUp[i];
    }

    return sum;
  };

  return (
    <div className="custom-heigth-max overflow-custom">
      <h1 className="text-center text-warning my-3 pb-2 font-stylish ">
        Orders History
      </h1>
      {checkSalesOrders.length > 0 &&
        checkSalesOrders.map((val, idx) => (
          <div
            key={idx}
            className="mx-5 my-4 bg-lightOrange text-warning px-5 py-2 rounded "
          >
            <div className="d-flex gap-3 justify-content-between align-items-center my-4 ">
              <h5>
                Customer Name:{" "}
                <span className="text-danger">{val.customerName}</span>
              </h5>
              <h5>
                Contact Number:{" "}
                <span className="text-danger">{val.customerNumber}</span>
              </h5>
              <h5>
                OrderId: <span className="text-danger">{val.orderId}</span>
              </h5>
              <button
                className="btn btn-hover rounded-circle shadow-none"
                onClick={() => deleteSelectedOrder(val.id)}
              >
                <i className="fa fa-trash text-danger"></i>
              </button>
            </div>
            <table>
              <thead>
                <tr>
                  <th> </th>
                  <th>Medicine Name</th>
                  <th>Qty</th>
                </tr>
              </thead>
              {val.medicineData.map((med) => (
                <tbody>
                  <tr>
                    <td> </td>
                    <td>{med.medicine}</td>
                    <td>{med.medicineQty}</td>
                  </tr>
                </tbody>
              ))}
              <tr>
                <th></th>
                <th>Total</th>
                <th>
                  ₹
                  {sumUpTotal(
                    val.medicineData.map((price) => Number(price.price)),
                    val.medicineData.map((qty) => Number(qty.medicineQty))
                  )}
                </th>
              </tr>
            </table>
            <h5 className="text-end mt-4 font-fantasy ">
              Created by: {val.admin}
            </h5>
          </div>
        ))}
    </div>
  );
};

export default Orders;
