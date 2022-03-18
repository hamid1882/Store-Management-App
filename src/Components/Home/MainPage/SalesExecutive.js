import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSalesExec,
  selectAllSales,
  selectIds,
  deleteSalesExec,
  updateSalesExecData,
} from "../../../Slices/SalesSlice";

const SalesExecutive = () => {
  const allSalesExecs = useSelector(selectAllSales);
  const selectIdsValue = useSelector(selectIds);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  console.log(allSalesExecs);

  localStorage.setItem("allSales", JSON.stringify(allSalesExecs));

  const savedSalesExecs = localStorage.getItem("allSales");

  const salesExecSchema = {
    id: selectIdsValue,
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    gender: gender,
    experience: experience,
  };

  const addNewSalesExec = () => {
    if (firstName !== "" && gender !== "") {
      dispatch(addSalesExec(salesExecSchema));
    } else {
      throw alert("Name and Gender is required");
    }
    setFirstName("");
    setLastName("");
    setDob("");
    setGender("");
    setExperience("");
  };

  const deleteSalesExecFn = (e) => {
    dispatch(deleteSalesExec(e));
  };

  const [currentItem, setCurrentItem] = useState(0);

  const updateSalesExec = (e) => {
    setIsEdit(false);
    setCurrentItem(e);
    const currentData = JSON.parse(savedSalesExecs).find(
      (value, id) => id === e
    );
    setFirstName(currentData && currentData.firstName);
    setLastName(currentData && currentData.lastName);
    setDob(currentData && currentData.dob);
    setGender(currentData && currentData.gender);
    setExperience(currentData && currentData.experience);
  };

  const changeData = () => {
    dispatch(
      updateSalesExecData({
        id: currentItem,
        data: salesExecSchema,
      })
    );
    setFirstName("");
    setLastName("");
    setDob("");
    setGender("");
    setExperience("");
    setIsEdit(false);
  };

  const handleEmptyInputs = () => {
    setIsEdit(true);
    setFirstName("");
    setLastName("");
    setDob("");
    setGender("");
    setExperience("");
  };

  return (
    <div>
      <h1 className="text-center text-warning my-3 pb-2 font-stylish">
        Sales Executive
      </h1>
      <div className="my-3">
        <button
          className="btn btn-warning d-flex align-items-center gap-2 shadow-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="button"
          onClick={handleEmptyInputs}
        >
          <i className="fa fa-plus-circle"></i>ADD SALES EXECUTIVE
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog bg-warning">
          <div className="modal-content bg-warning">
            <div className="modal-header bg-warning">
              <h5
                className="modal-title text-dark fs-2 mx-auto"
                id="exampleModalLabel"
              >
                Add Executives Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex flex-wrap gap-3 justify-content-center align-items-center ">
              <input
                className="activeInputs p-1 rounded border-0 bg-dark text-warning"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="activeInputs p-1 rounded border-0 bg-dark text-warning"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <div>
                <div>DOB</div>
                <input
                  className="activeInputs p-1 rounded border-0 bg-dark text-warning"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <div>Gender(M/F/O)</div>
                <input
                  className="activeInputs p-1 rounded border-0 bg-dark text-warning "
                  type="text"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <input
                className="activeInputs p-1 rounded border-0 bg-dark text-warning"
                type="number"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className={`btn btn-dark text-warning shadow-none ${
                  isEdit ? "d-flex" : "d-none"
                }`}
                data-bs-dismiss="modal"
                type="button"
                onClick={addNewSalesExec}
              >
                ADD TO THE TEAM
              </button>
              <button
                className={`btn btn-dark text-warning shadow-none ${
                  isEdit ? "d-none" : "d-flex"
                }`}
                data-bs-dismiss="modal"
                type="button"
                onClick={changeData}
              >
                Update data
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="bg-lightOrange rounded">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Experience(in Years)</th>
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        {JSON.parse(savedSalesExecs) &&
          JSON.parse(savedSalesExecs).map((players, idx) => (
            <tbody key={players.id}>
              <tr>
                <td>{players.firstName}</td>
                <td>{players.lastName}</td>
                <td>{players.dob}</td>
                <td>{players.gender}</td>
                <td>{players.experience}</td>
                <td>
                  <button
                    className={`btn btn-hover rounded-circle shadow-none text-lightOrange`}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => updateSalesExec(idx)}
                  >
                    <i className="fa fa-pen"></i>
                  </button>
                </td>
                <td>
                  <button
                    className={`btn btn-hover rounded-circle shadow-none text-lightOrange `}
                    onClick={() => deleteSalesExecFn(players.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default SalesExecutive;
