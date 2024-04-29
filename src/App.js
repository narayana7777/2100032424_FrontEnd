import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navebar";
import Home from "./Home";
import Employee from "./Employee";
import AddEmployee from "./AddEmp";
import EditEmployee from "./EditEmp";
import './Employee.css';
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/add" element={<AddEmployee />} />
          <Route path="/employee/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
