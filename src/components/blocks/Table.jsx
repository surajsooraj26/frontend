import { useContext, useEffect } from "react";
import { LogContext } from "../contexts/LogContext";
import { DataContext } from "../contexts/DataContext";

import React from "react";

const Table = () => {
  const { logData } = useContext(LogContext);
  const { log, setlog } = useContext(DataContext);

  useEffect(() => {
    if (logData) {
      setlog((prevLog) => {
        const updatedLog = [...prevLog];
        updatedLog.pop(); // Remove the last element
        updatedLog.unshift(logData); // Add logData at the beginning of the array
        return updatedLog;
      });
    }
  }, [logData, setlog]); // Only depend on logData and setlog

  return (
    <div className="recentOrders">
      <div className="cardHeader">
        <h2>Recent Entries</h2>
        <a href="#" className="btn">
          View All
        </a>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Programme</td>
              <td>Time</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {log && log.length > 0 ? (
              log.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.programme}</td>
                  <td>
                    {entry.out_time
                      ? entry.out_time.split(" ").slice(0, 2).join(" ")
                      : entry.in_time.split(" ").slice(0, 2).join(" ")}
                  </td>
                  <td>
                    <span
                      className={
                        entry.status === "IN"
                          ? "status delivered"
                          : "status return"
                      }
                    >
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
