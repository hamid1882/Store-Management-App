import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllInventories,
  updateStock,
} from "../../../Slices/InventorySlice";
import {
  selectAllMedicinesValue,
  addMedicines,
  addOrders,
  emptyMedicine,
  selectOrderId,
} from "../../../Slices/OrderSlice";

const CreateOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState(91);
  const [medicine, setMedicine] = useState("");
  const [medicineQty, setMedicineQty] = useState("");

  const dispatch = useDispatch();

  const selectAllMedicines = useSelector(selectAllMedicinesValue);
  const selectIds = useSelector(selectOrderId);

  const allInventoriesData = useSelector(selectAllInventories);

  const savedInventories = localStorage.getItem("inventories");

  const filteredMedicines =
    JSON.parse(savedInventories) &&
    JSON.parse(savedInventories).find(
      (value) => value.medicineName === medicine
    );

  console.log(filteredMedicines);
  console.log(JSON.parse(savedInventories));

  const createMedicineSchema = {
    medicine,
    medicineQty,
    price: filteredMedicines && filteredMedicines.price,
  };

  const allOrdersSchema = {
    id: selectIds,
    customerName,
    customerNumber,
    orderId: Number(customerNumber.toString().slice(0, 6)),
    medicineData: selectAllMedicines,
    total: selectAllMedicines.map((val) => val.price),
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

  const handleUpdataStock = () => {
    dispatch(
      updateStock({
        id: filteredMedicines && filteredMedicines.id,
        sold: medicineQty,
      })
    );
  };

  const handleAddMedicines = () => {
    if (filteredMedicines && medicineQty <= Number(filteredMedicines.stock)) {
      handleUpdataStock();
      dispatch(addMedicines(createMedicineSchema));
    } else {
      setMedicine("");
      setMedicineQty(0);
      throw alert(
        `There is no stock available for ${medicine} inStock: ${Number(
          filteredMedicines.stock
        )}`
      );
    }
    setMedicine("");
    setMedicineQty(0);
  };

  const handleCreateOrder = () => {
    dispatch(addOrders(allOrdersSchema));

    setCustomerName();
    setCustomerNumber(91);
    dispatch(emptyMedicine());
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-warning my-3 pb-2 font-stylish">
        Create Order
      </h1>

      <div className="mx-auto d-flex my-3 gap-2 text-warning">
        <div>
          <h5>Name</h5>
          <input
            type="text"
            placeholder="Customer Name"
            className="border-0 bg-warning p-1 rounded activeInputs"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div>
          <h5>Contact Number</h5>
          <input
            type="Number"
            placeholder="Customer Number"
            className="border-0 bg-warning p-1 rounded activeInputs"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h5 className="text-warning">Select Medicine</h5>

        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Medicine Name"
            className={`border-0 bg-warning p-1 activeInputs ${
              JSON.parse(savedInventories)
                .map((val) => val.medicineName)
                .includes(medicine)
                ? "text-dark"
                : "text-danger"
            }`}
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
          <input
            type="Number"
            placeholder="Quantity"
            value={medicineQty}
            onChange={(e) => setMedicineQty(e.target.value)}
            className={`border-0 bg-warning p-1 activeInputs ${
              JSON.parse(savedInventories).map((val) => val.stock) <=
              medicineQty
                ? "text-danger"
                : "text-dark"
            }`}
          />
          <button
            className="btn btn-warning rounded-circle shadow-none"
            onClick={handleAddMedicines}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <details className="text-warning my-2 p-2">
          <summary>Available Medicines</summary>
          {allInventoriesData &&
            allInventoriesData.map((val) => (
              <>
                <div className="mx-3">
                  {val.medicineName} <span>({val.stock})</span>
                </div>
              </>
            ))}
          {allInventoriesData.length === 0 && (
            <div className="text-secondary mx-2">No Medicines Available</div>
          )}
        </details>
      </div>
      <table className="bg-lightOrange rounded">
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
                  {meds.price ? (
                    meds.price
                  ) : (
                    <span className="text-danger">0</span>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        <tr>
          <td> </td>
          <th>Total</th>
          <th>
            ₹
            {sumUpTotal(
              selectAllMedicines.map((val) => Number(val.price)),
              selectAllMedicines.map((qty) => Number(qty.medicineQty))
            )}
          </th>
        </tr>
      </table>
      <button
        className="btn btn-warning my-3 d-flex justify-content-center w-50 mx-auto shadow-none"
        onClick={handleCreateOrder}
      >
        Create Order
      </button>
    </div>
  );
};

export default CreateOrder;
