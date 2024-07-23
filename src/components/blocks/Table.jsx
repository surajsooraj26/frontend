import { useContext } from "react";
import { LogContext } from "../contexts/LogContext";
import React from "react";

const Table = () => {
  const { logData } = useContext(LogContext);
  console.log(`responce in table ${logData}`); // Conditional rendering
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
            <tr>
              <td>{logData?.name}</td>
              <td>{logData?.programme}</td>
              <td>
                {" "}
                {logData?.out_time
                  ? logData.out_time.split(" ").slice(0, 2).join(" ")
                  : logData?.in_time
                  ? logData.in_time.split(" ").slice(0, 2).join(" ")
                  : " "}{" "}
              </td>
              <td>
                <span
                  className={`status ${
                    logData?.out_time
                      ? "return"
                      : logData?.in_time
                      ? "delivered"
                      : ""
                  }`}
                >
                  {logData?.out_time ? "OUT" : logData?.in_time ? "IN" : ""}
                </span>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
