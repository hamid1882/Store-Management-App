import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllOrders, deleteOrder } from "../../../Slices/OrderSlice";

const Orders = () => {
  const selectAllOrdersVal = useSelector(selectAllOrders);
  const dispatch = useDispatch();

  localStorage.setItem("orders", JSON.stringify(selectAllOrdersVal));

  const savedOrders = localStorage.getItem("orders");

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
    <div>
      <h1 className="text-center text-warning my-2 pb-2">Orders History</h1>
      {JSON.parse(savedOrders).length > 0 &&
        JSON.parse(savedOrders).map((val, idx) => (
          <div
            key={idx}
            className="mx-5 my-4 bg-lightOrange text-warning p-5 rounded "
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
          </div>
        ))}
    </div>
  );
};

export default Orders;
