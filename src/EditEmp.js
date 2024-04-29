import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import employees from "./employees";

const EditEmp = () => {
  const { id } = useParams();

  const history = useNavigate();

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
    Age: "",
    Salary: "",
    Department: "",
  });

  useEffect(() => {
    // Fetch employee data by id and populate the form
    const employee = employees.find((emp) => emp.id === parseInt(id));
    if (employee) {
      setFormData(employee);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find the index of the employee to be updated
    const index = employees.findIndex((emp) => emp.id === parseInt(id));
    if (index !== -1) {
      // Create a copy of the employees array
      const updatedEmployees = [...employees];
      // Update the employee data at the found index
      updatedEmployees[index] = formData;
      // Update the employees array in localStorage
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      // Redirect to the employee list after updating
      history("/employee");
    } else {
      console.log("Employee not found!");
    }
  };

  return (
    <div className="container">
      <h2>Edit Employee</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <input
            type="text"
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <input
            type="number"
            name="Salary"
            value={formData.Salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="Department"
            value={formData.Department}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEmp;
