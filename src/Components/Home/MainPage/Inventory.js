import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewItem,
  selectAllInventories,
  deleteItem,
  selectId,
  updateItem,
} from "../../../Slices/InventorySlice";
import "./MainPage.css";

const Inventory = () => {
  const allInventories = useSelector(selectAllInventories);
  const allIds = useSelector(selectId);

  localStorage.setItem("inventories", JSON.stringify(allInventories));

  const savedInventories = localStorage.getItem("inventories");

  const [medicineName, setMedicineName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState("");
  const [isAddNew, setIsAddNew] = useState(true);

  const dispatch = useDispatch();

  const handleAddNewItem = (e) => {
    e.preventDefault();
    if (medicineName !== "" && price !== "" && price !== 0) {
      dispatch(addNewItem(inventorySchema));
    } else {
      throw alert("Medicine Name and Price is Mandotary");
    }
    setMedicineName("");
    setManufacturer("");
    setPrice(0);
    setStock(0);
    setDiscount(0);
  };

  let discountedPrice = price - (discount / 100) * price;
  const inventorySchema = {
    discount,
    id: allIds,
    medicineName,
    manufacturer,
    price: Math.round(discountedPrice),
    stock,
  };

  const deleteCurrentItem = (e) => {
    dispatch(deleteItem(e));
  };

  const [currentMedicine, setCurrentMedicine] = useState(0);

  const currentItem = (e) => {
    setCurrentMedicine(e);
    setIsAddNew(false);
    const currentData = allInventories.find((value, id) => id === e);
    setMedicineName(currentData.medicineName);
    setManufacturer(currentData.manufacturer);
    setPrice(currentData.price);
    setStock(currentData.stock);
    setDiscount(currentData.discount);
  };

  const handleUpdateItem = () => {
    dispatch(
      updateItem({
        id: currentMedicine,
        data: {
          id: currentMedicine,
          medicineName,
          manufacturer,
          price: Math.round(discountedPrice),
          stock,
          discount,
        },
      })
    );
  };

  const emptyTheInput = () => {
    setIsAddNew(true);
    setMedicineName("");
    setManufacturer("");
    setPrice("");
    setStock("");
    setDiscount("");
  };

  return (
    <div>
      <h1 className="text-center text-warning my-2 font-stylish">Inventory</h1>
      <div className="my-3">
        <button
          className="btn btn-warning d-flex align-items-center gap-2 shadow-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={emptyTheInput}
          type="button"
        >
          <i className="fa fa-plus"></i>ADD NEW MEDICINE
        </button>
      </div>
      <div
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
      >
        <div className="modal-dialog bg-warning">
          <div className="modal-content bg-warning">
            <div className="modal-header bg-warning">
              <h5
                className="modal-title text-dark fs-2 mx-auto"
                id="exampleModalLabel"
              >
                Add Medicine Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleAddNewItem}>
              <div className="modal-body d-flex flex-wrap gap-3 justify-content-center">
                <input
                  className="activeInputs p-1 rounded border-0 bg-dark text-warning"
                  type="text"
                  placeholder="Medicine Name"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                />
                <input
                  className="activeInputs p-1 rounded border-0 bg-dark text-warning"
                  type="text"
                  placeholder="Manufacturer"
                  value={manufacturer}
                  onChange={(e) => setManufacturer(e.target.value)}
                />
                <input
                  className="activeInputs p-1 rounded border-0 bg-dark text-warning"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  className="activeInputs p-1 rounded border-0 bg-dark text-warning"
                  type="number"
                  placeholder="Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
                <input
                  className="activeInputs p-1 rounded border-0 bg-dark text-warning"
                  type="text"
                  placeholder="Discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  className={`${
                    isAddNew ? "d-flex" : "d-none"
                  } btn btn-dark text-warning shadow-none`}
                  data-bs-dismiss="modal"
                  onClick={handleAddNewItem}
                  type="button"
                >
                  ADD TO THE INVENTORY
                </button>
                <button
                  className={`${
                    isAddNew ? "d-none" : "d-flex"
                  } btn btn-dark text-warning shadow-none`}
                  data-bs-dismiss="modal"
                  onClick={handleUpdateItem}
                  type="button"
                >
                  Update this item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <table className="bg-lightOrange rounded">
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Manufacturer</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Discount(%)</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        {JSON.parse(savedInventories) &&
          JSON.parse(savedInventories).map((items, idx) => (
            <tbody key={items.id}>
              <tr>
                <td>{items.medicineName}</td>
                <td>{items.manufacturer}</td>
                <td>₹{items.price}</td>
                <td>{items.stock}</td>
                <td>{items.discount}%</td>
                <td>
                  <button
                    className="btn text-lightOrange btn-hover rounded-circle shadow-none"
                    onClick={() => currentItem(idx)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-pen"></i>
                  </button>
                </td>
                <td key={items.id}>
                  <div>
                    <button
                      className="btn text-lightOrange btn-hover rounded-circle shadow-none"
                      id={items.id}
                      onClick={() => deleteCurrentItem(items.id)}
                      title={items.name}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default Inventory;
