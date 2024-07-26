import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";
import customer02 from "../../assets/customer02.jpg";

const AllUsers = () => {

  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3500/allstudents")
      .then((response) => {
        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setStudentList(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setStudentList([]);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); // Remove studentList and setStudentList from the dependency array

  return (
    <div className="main">
      <Main />
      <div className="details3">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>All Users</h2>
          </div>
          <table>
            <thead>
              <tr>
                <td></td>
                <td>Register Number</td>
                <td>Name</td>
                <td>Programme</td>
                <td>Batch</td>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student, index) => (
                <tr key={index}>
                  <td width="60px">
                    <div className="imgBx">
                      <img src={"http://localhost:3500" + student.profile} alt="" />
                    </div>
                  </td>
                  <td>{student.regNo}</td>
                  <td>{student.name}</td>
                  <td>{student.programme}</td>
                  <td>{student.duration.start+ "-"+student.duration.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
