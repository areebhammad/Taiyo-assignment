import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFormData } from "./slices/formSlice";
import { nanoid } from "nanoid";
import { Navigate, useNavigate } from "react-router-dom";

const id = nanoid();

export default function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addFormData({
        id,
        firstName,
        lastName,
        status,
      })
    );
    navigate("/contact");
  };
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <header>
        <h1 className=" font-semibold text-md text-left md:text-center md:text-2xl pb-2">
          Create New Contact
        </h1>
      </header>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="mx-auto">
          <h2 className=" text-sm font-semibold">First Name</h2>
          <input
            type="text"
            placeholder="Areeb"
            value={firstName}
            onChange={handleFirstNameChange}
            required={true}
            className=" border-blue-800 border-solid border rounded-lg px-2 py-1"
          />

          <h2 className=" text-sm font-semibold">Last Name</h2>

          <input
            type="text"
            placeholder="Hammad"
            value={lastName}
            onChange={handleLastNameChange}
            required={true}
            className=" border-blue-800 border-solid border rounded-lg px-2 py-1"
          />
        </div>

        <div>
          <h2 className=" text-sm font-semibold">Status</h2>
          <label className="block">
            <input
              type="radio"
              value="active"
              checked={status === "active"}
              onChange={handleStatusChange}
            />
            Active
          </label>

          <label>
            <input
              type="radio"
              value="inactive"
              checked={status === "inactive"}
              onChange={handleStatusChange}
            />
            Inactive
          </label>
        </div>
        <button type="submit" className=" bg-orange-600 rounded-lg px-2 py-1">
          Submit
        </button>
      </form>
    </div>
  );
}
