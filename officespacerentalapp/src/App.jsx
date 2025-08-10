import React from "react";
import "./App.css";

const App = () => {
  const offices = [
    {
      name: "Uptown Workspace",
      rent: 60000,
      address: "Delhi"
    },
    {
      name: "Suburban Suite",
      rent: 70000,
      address: "Gurgaon"
    }
  ];
  return (
    <div className="container">
      <h1>Office Space Rental App</h1>
      <img src="../Office.jpeg" alt="Logo" />
      <h2>Available Offices</h2>
      <ul>
        {offices.map((office, index) => (
          <li style={{ listStyleType: "none"}} key={index}>
            <h3>Name: {office.name}</h3>
            <p style={{ color: office.rent > 60000 ? "red" : "green" }}>
              <b>Rent:</b> {office.rent}
            </p>
            <p><b>Address:</b> {office.address}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;