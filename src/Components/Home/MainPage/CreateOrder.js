import React from "react";

const CreateOrder = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-warning my-2 pb-2">Create Order</h1>

      <div className="mx-auto d-flex my-3 gap-2">
        <div>
          <h5>Name</h5>
          <input
            type="search"
            placeholder="Customer Name"
            className="border p-1 rounded activeInputs"
          />
        </div>
        <div>
          <h5>Contact Number</h5>
          <input
            type="Number"
            placeholder="Customer Number"
            className="border p-1 rounded activeInputs"
          />
        </div>
      </div>
      <div>
        <h5>Select Medicine</h5>
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Medicine Name"
            className="border p-1 activeInputs"
          />
          <input type="Number" value="0" className="border p-1 activeInputs" />
          <button className="btn btn-warning rounded-circle">
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Qty</th>
            <th>Price (per Unit)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dolo</td>
            <td>5</td>
            <td>₹500</td>
          </tr>
        </tbody>
        <tr>
          <td> </td>
          <th>Total</th>
          <th>₹500</th>
        </tr>
      </table>
      <button className="btn btn-warning my-3 d-flex justify-content-center w-50 mx-auto shadow-none">
        Create Order
      </button>
    </div>
  );
};

export default CreateOrder;
