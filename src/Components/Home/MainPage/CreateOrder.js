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
  const [customerNumber, setCustomerNumber] = useState(+91);
  const [medicine, setMedicine] = useState("");
  const [medicineQty, setMedicineQty] = useState("");

  const dispatch = useDispatch();

  const selectAllInventoriesData = useSelector(selectAllInventories);
  const selectAllMedicines = useSelector(selectAllMedicinesValue);
  const selectIds = useSelector(selectOrderId);

  const filteredMedicines =
    selectAllInventoriesData &&
    selectAllInventoriesData.filter((value) => value.medicineName === medicine);

  const createMedicineSchema = {
    medicine,
    medicineQty,
    price: filteredMedicines.length > 0 && filteredMedicines[0].price,
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
        id: filteredMedicines.length > 0 && filteredMedicines[0].id,
        sold: sumAllTheQty(
          selectAllMedicines.map((val) => Number(val.medicineQty))
        ),
      })
    );
  };

  const handleAddMedicines = () => {
    if (
      filteredMedicines.length > 0 &&
      medicineQty <= Number(filteredMedicines[0].stock)
    ) {
      handleUpdataStock();
      dispatch(addMedicines(createMedicineSchema));
    } else {
      setMedicine("");
      setMedicineQty(0);
      throw alert(
        `There is no stock available for ${medicine} inStock: ${Number(
          filteredMedicines[0].stock
        )}`
      );
    }
    setMedicine("");
    setMedicineQty(0);
  };

  const sumAllTheQty = (qty) => {
    let addQty = 0;
    for (let i = 0; i < qty.length; i++) {
      addQty += qty[i];
    }
    return addQty;
  };

  const handleCreateOrder = () => {
    dispatch(addOrders(allOrdersSchema));

    setCustomerName("");
    setCustomerNumber(91);
    dispatch(emptyMedicine());
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-warning my-2 pb-2">Create Order</h1>

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
        <h5>Select Medicine</h5>
        <div className="d-flex gap-2">
          <input
            type="text"
            placeholder="Medicine Name"
            className="border-0 bg-warning p-1 activeInputs "
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
          />
          <input
            type="Number"
            placeholder="Quantity"
            value={medicineQty}
            onChange={(e) => setMedicineQty(e.target.value)}
            className="border-0 bg-warning p-1 activeInputs"
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
