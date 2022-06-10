import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { useAppContext } from "../../Context/AppContext";

// Styles
import "./Modal.css";

const Modal = ({ onClick, title }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
  });

  const { name, email, country, phone } = formData;
  const { addEmployee, addToast } = useAppContext();
  // funs
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, country, phone);
    addToast("success", "list updated successfully");
    setFormData({ name: "", email: "", country: "", phone: "" });
    onClick();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal__titleComp">
        <div className="modal__title">{title}</div>
        <HiX onClick={onClick} />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="display-name" className="formControl__label">
            Name:
          </label>
          <input
            value={name}
            type="text"
            name="name"
            className="formInput"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="display-name" className="formControl__label">
            Email:
          </label>
          <input
            value={email}
            type="text"
            name="email"
            className="formInput"
            autoComplete="new-password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="display-name" className="formControl__label">
            Country:
          </label>
          <input
            value={country}
            type="text"
            name="country"
            className="formInput"
            autoComplete="new-password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="formControl">
          <label htmlFor="display-name" className="formControl__label">
            Phone:
          </label>
          <input
            value={phone}
            type="text"
            name="phone"
            className="formInput"
            autoComplete="new-password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="formBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Modal;
