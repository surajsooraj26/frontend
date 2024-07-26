import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";
import { format } from "date-fns";

const AllLog = () => {
  const [totalLog, setTotalLog] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3500/all_log")
      .then((response) => {
        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setTotalLog(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setTotalLog([]);
        }
        // setTotalLog(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [setTotalLog]);

  return (
    <div className="main">
      <div className="details3">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Activity Log</h2>
            <a href="#" className="btn">
              Print
            </a>
          </div>
          <table>
            <thead>
              <tr>
                <td>Register Number</td>
                <td>Name</td>
                <td>Programme</td>
                <td>In Time</td>
                <td>Out Time</td>
              </tr>
            </thead>
            <tbody>
              {totalLog.map((log, index) => (
                <tr key={index}>
                  <td>{log.regNo}</td>
                  <td>{log.name}</td>
                  <td>{log.programme}</td>
                  <td>{log.in_time}</td>
                  <td>{log.out_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllLog;
