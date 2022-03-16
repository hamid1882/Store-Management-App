import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllInventories } from "../../../Slices/InventorySlice";
import {
  selectAllMedicinesValue,
  addMedicines,
} from "../../../Slices/OrderSlice";

const CreateOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState(+91);
  const [medicine, setMedicine] = useState("");
  const [medicineQty, setMedicineQty] = useState(0);

  const dispatch = useDispatch();

  const selectAllInventoriesData = useSelector(selectAllInventories);
  const selectAllMedicines = useSelector(selectAllMedicinesValue);

  const filteredMedicines =
    selectAllInventoriesData &&
    selectAllInventoriesData.filter((value) => value.medicineName === medicine);

  const createMedicineSchema = {
    medicine,
    medicineQty,
    price: filteredMedicines.length > 0 && filteredMedicines[0].price,
  };

  console.log(filteredMedicines.length > 0 && filteredMedicines[0].price);
  console.log(selectAllMedicines);
  console.log(createMedicineSchema);

  const handleAddMedicines = () => {
    dispatch(addMedicines(createMedicineSchema));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-warning my-2 pb-2">Create Order</h1>

      <div className="mx-auto d-flex my-3 gap-2">
        <div>
          <h5>Name</h5>
          <input
            type="text"
            placeholder="Customer Name"
            className="border p-1 rounded activeInputs"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div>
          <h5>Contact Number</h5>
          <input
            type="Number"
            placeholder="Customer Number"
            className="border p-1 rounded activeInputs"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
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
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
          <input
            type="Number"
            value={medicineQty}
            onChange={(e) => setMedicineQty(e.target.value)}
            className="border p-1 activeInputs"
          />
          <button
            className="btn btn-warning rounded-circle"
            onClick={handleAddMedicines}
          >
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
        {selectAllMedicines &&
          selectAllMedicines.map((meds) => (
            <tbody>
              <tr>
                <td>{meds.medicine}</td>
                <td>{meds.medicineQty}</td>
                <td>
                  {meds.price.length > 0 ? (
                    meds.price
                  ) : (
                    <span className="text-danger">No Stock</span>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
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
