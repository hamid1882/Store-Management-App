import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewItem,
  selectAllInventories,
  deleteItem,
  selectId,
  editItem,
  selectItem,
  updateItem,
} from "../../../Slices/InventorySlice";
import "./MainPage.css";

const Inventory = () => {
  const allInventories = useSelector(selectAllInventories);
  const allIds = useSelector(selectId);
  const selectedItem = useSelector(selectItem);

  const [medicineName, setMedicineName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [discount, setDiscount] = useState(0);
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

  const inventorySchema = {
    discount,
    id: allIds,
    medicineName,
    manufacturer,
    price,
    stock,
  };

  const deleteCurrentItem = (e) => {
    dispatch(deleteItem(e));
  };

  const currentItem = (e) => {
    dispatch(editItem(e));
    setIsAddNew(false);
    setMedicineName(selectedItem && selectedItem[0].medicineName);
    setManufacturer(selectedItem && selectedItem[0].manufacturer);
    setPrice(selectedItem && selectedItem[0].price);
    setStock(selectedItem && selectedItem[0].stock);
    setDiscount(selectedItem && selectedItem[0].discount);
  };

  const handleUpdateItem = () => {
    setIsAddNew(true);
    dispatch(
      updateItem({
        id: selectedItem[0].id - 1,
        updatedFile: {
          id: selectedItem[0].id - 1,
          medicineName,
          manufacturer,
          price,
          stock,
          discount,
        },
      })
    );
    setMedicineName("");
    setManufacturer("");
    setPrice(0);
    setStock(0);
    setDiscount(0);
  };

  return (
    <div>
      <h1 className="text-center text-warning my-2">Inventory</h1>
      <div classNameName="my-3">
        <button
          className="btn btn-warning d-flex align-items-center gap-2 shadow-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setIsAddNew(true)}
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
        tabindex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-warning fs-2 mx-auto"
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
                  className="activeInputs p-1 rounded border"
                  type="text"
                  placeholder="Medicine Name"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                />
                <input
                  className="activeInputs p-1 rounded border"
                  type="text"
                  placeholder="Manufacturer"
                  value={manufacturer}
                  onChange={(e) => setManufacturer(e.target.value)}
                />
                <input
                  className="activeInputs p-1 rounded border"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  className="activeInputs p-1 rounded border"
                  type="number"
                  placeholder="Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
                <input
                  className="activeInputs p-1 rounded border"
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
                  } btn btn-warning shadow-none`}
                  data-bs-dismiss="modal"
                  onClick={handleAddNewItem}
                  type="button"
                >
                  ADD TO THE INVENTORY
                </button>
                <button
                  className={`${
                    isAddNew ? "d-none" : "d-flex"
                  } btn btn-warning shadow-none`}
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
      <table>
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
        {allInventories &&
          allInventories.map((items) => (
            <tbody key={items.id}>
              <tr>
                <td>{items.medicineName}</td>
                <td>{items.manufacturer}</td>
                <td>₹{items.price}</td>
                <td>{items.stock}</td>
                <td>{items.discount}%</td>
                <td>
                  <button
                    className="btn btn-hover rounded-circle shadow-none"
                    onClick={() => currentItem(items.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa fa-pen"></i>
                  </button>
                </td>
                <td key={items.id}>
                  <div>
                    <button
                      className="btn btn-hover rounded-circle shadow-none"
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
