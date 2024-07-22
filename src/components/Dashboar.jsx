// Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormComponent from "./FormComponent";
import LogComponent from "./LogComponent";

const Dashboard = ({ token }) => {
  const [message, setMessage] = useState("");
  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3500/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching dashboard:", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <button onClick={() => setActiveComponent("form")}>Form</button>
      <button onClick={() => setActiveComponent("log")}>Log</button>
      {activeComponent === "form" && <FormComponent />}
      {activeComponent === "log" && <LogComponent />}
    </div>
  );
};

export default Dashboard;
