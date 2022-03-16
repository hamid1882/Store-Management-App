import React from "react";

const Orders = () => {
  return (
    <div>
      <h1 className="text-center text-warning my-2 pb-2">Orders History</h1>
      <div className="mx-5">
        <div className="d-flex gap-3 justify-content-between align-items-center">
          <h5>
            Custome Name: <span className="text-danger">Hamid</span>
          </h5>
          <h5>
            Contact Number: <span className="text-danger">8296252156</span>
          </h5>
          <h5>
            OrderId:{" "}
            <span className="text-danger">{Math.round(Math.random(80))}</span>
          </h5>
          <button className="btn">
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
          <tbody>
            <tr>
              <td> </td>
              <td>dolo</td>
              <td>5</td>
            </tr>
          </tbody>
          <tr>
            <th></th>
            <th>Total</th>
            <th>₹500</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
