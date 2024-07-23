// Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { LogContext } from "./contexts/LogContext";
import FormComponent from "./FormComponent";
import LogComponent from "./LogComponent";

import Slidebar from "./blocks/Slidebar";
import Main from "./blocks/Main";
import Cards from "./blocks/Cards";
import Table from "./blocks/Table";
import New from "./blocks/New";

const Dashboard = ({ token }) => {
  const [message, setMessage] = useState("");
  const [logData, setlogData] = useState(null);
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
    <div className="container">
      <Slidebar />
      <div className="main">
        <LogContext.Provider value={{ logData, setlogData }}>
          <Main />
          <Cards />
          <div className="details">
            <Table />
            <New />
          </div>
        </LogContext.Provider>
      </div>
    </div>
  );
};

export default Dashboard;
