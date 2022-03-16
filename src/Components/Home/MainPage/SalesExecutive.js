import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addSalesExec,
  selectAllSales,
  selectIds,
  deleteSalesExec,
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

  const salesExecSchema = {
    id: selectIdsValue,
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    gender: gender,
    experience: experience,
  };

  const addNewSalesExec = () => {
    dispatch(addSalesExec(salesExecSchema));
  };

  const deleteSalesExecFn = (e) => {
    dispatch(deleteSalesExec(e));
  };

  return (
    <div>
      <h1 className="text-center text-warning my-2 pb-2">SALES EXECUTIVE</h1>
      <div classNameName="my-3">
        <button
          className="btn btn-warning d-flex align-items-center gap-2 shadow-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="button"
        >
          <i classNameName="fa fa-plus-circle"></i>ADD SALES EXECUTIVE
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-warning fs-2 mx-auto"
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
                className="activeInputs p-1 rounded border"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="activeInputs p-1 rounded border"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <div>
                <div>DOB</div>
                <input
                  className="activeInputs p-1 rounded border"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div>
                <div>Gender(M/F/O)</div>
                <input
                  className="activeInputs p-1 rounded border "
                  type="text"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <input
                className="activeInputs p-1 rounded border"
                type="number"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn btn-warning shadow-none"
                data-bs-dismiss="modal"
                type="button"
                onClick={addNewSalesExec}
              >
                ADD TO THE TEAM
              </button>
            </div>
          </div>
        </div>
      </div>
      <table>
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
        {allSalesExecs &&
          allSalesExecs.map((players) => (
            <tbody>
              <tr>
                <td>{players.firstName}</td>
                <td>{players.lastName}</td>
                <td>{players.dob}</td>
                <td>{players.gender}</td>
                <td>{players.experience}</td>
                <td>
                  <button className="btn btn-hover rounded-circle shadow-none">
                    <i className="fa fa-pen"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-hover rounded-circle shadow-none"
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
