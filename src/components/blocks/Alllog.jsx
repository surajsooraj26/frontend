import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";

import axios from "axios";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Modal from "react-modal";
import { CgCloseO } from "react-icons/cg";

const AllLog = () => {
  const [totalLog, setTotalLog] = useState([]);
  const [visible, setVisible] = useState(false);

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
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [setTotalLog]);

  const handlePrint = () => {
    const doc = new jsPDF();

    doc.autoTable({
      head: [["Register Number", "Name", "Programme", "In Time", "Out Time"]],
      body: totalLog.map((log) => [
        log.regNo,
        log.name,
        log.programme,
        log.in_time,
        log.out_time,
      ]),
    });

    doc.save("Activity_Log.pdf");
  };

  return (
    <div className="main">
      <div className="details3">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Activity Log</h2>
            <button className="btn" onClick={handlePrint}>
              Print
            </button>
          </div>
          <button
            className="filter"
            onClick={() => setVisible(true)}
            style={{ marginBottom: "15px" }}
          >
            Filter
            <CiFilter className="filter-icon" />
          </button>

          <table>
            <thead>
              <tr>
                <td>Register Number</td>
                <td>Name</td>
                <td>Programme</td>
                <td>Date</td>
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
                  <td>{log.date}</td>
                  <td>{log.in_time}</td>
                  <td>{log.out_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        contentLabel="Login Modal"
        className="Modal"
      >
        <div className="header">
          <h2 className="h2">Login</h2>
          <div className="close-container">
            <CgCloseO onClick={() => setVisible(false)} className="close" />
          </div>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder=""
              id="password"
              name="password"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AllLog;
