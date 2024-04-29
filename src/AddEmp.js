import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import employees from "./employees";

const AddEmp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
    Age: "",
    Salary: "",
    Department: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsObj = {};
    let isValid = true;

    // Validation
    if (!formData.FirstName.trim()) {
      errorsObj.FirstName = "First Name is required";
      isValid = false;
    }
    if (!formData.LastName.trim()) {
      errorsObj.LastName = "Last Name is required";
      isValid = false;
    }
    if (!formData.Gender.trim()) {
      errorsObj.Gender = "Gender is required";
      isValid = false;
    }
    if (!formData.Age.trim()) {
      errorsObj.Age = "Age is required";
      isValid = false;
    }
    if (!formData.Salary.trim()) {
      errorsObj.Salary = "Salary is required";
      isValid = false;
    }
    if (!formData.Department.trim()) {
      errorsObj.Department = "Department is required";
      isValid = false;
    }

    if (isValid) {
      const newEmployee = {
        id: employees.length + 1,
        ...formData,
      };
      // Update employees array
      employees.push(newEmployee);
      // Update local storage
      localStorage.setItem("employees", JSON.stringify(employees));
      // Redirect to the employee list after adding
      navigate("/employee");
    } else {
      setErrors(errorsObj);
    }
  };

  return (
    <div className="container">
      <h2>Add Employee</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            className={errors.FirstName ? "error" : ""}
            required
          />
          {errors.FirstName && (
            <span className="error-msg">{errors.FirstName}</span>
          )}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            className={errors.LastName ? "error" : ""}
            required
          />
          {errors.LastName && (
            <span className="error-msg">{errors.LastName}</span>
          )}
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input
            type="text"
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            className={errors.Gender ? "error" : ""}
            required
          />
          {errors.Gender && <span className="error-msg">{errors.Gender}</span>}
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            className={errors.Age ? "error" : ""}
            required
          />
          {errors.Age && <span className="error-msg">{errors.Age}</span>}
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input
            type="number"
            name="Salary"
            value={formData.Salary}
            onChange={handleChange}
            className={errors.Salary ? "error" : ""}
            required
          />
          {errors.Salary && <span className="error-msg">{errors.Salary}</span>}
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="Department"
            value={formData.Department}
            onChange={handleChange}
            className={errors.Department ? "error" : ""}
            required
          />
          {errors.Department && (
            <span className="error-msg">{errors.Department}</span>
          )}
        </div>
        <button type="submit" className="btn btn-lg btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddEmp;
