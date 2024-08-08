import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgCloseO } from "react-icons/cg";

// import ".src/components/App.css"; // Add your CSS here

const AllUsers = () => {
  const [studentList, setStudentList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3500/allstudents")
      .then((response) => {
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
  }, []);

  const details = (student) => {
    setSelectedStudent(student);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="main">
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
                <tr key={index} onClick={() => details(student)} style={{ cursor: "pointer" }}>
                  <td width="60px">
                    <div className="imgBx">
                      <img
                        src={"http://localhost:3500" + student.profile}
                        alt=""
                      />
                    </div>
                  </td>
                  <td>{student.regNo}</td>
                  <td>{student.name}</td>
                  <td>{student.programme}</td>
                  <td>{student.duration.start + "-" + student.duration.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedStudent && (
          <div className="modal1">
            <div className="modalContent">
              <div className="close-container1">

            <CgCloseO onClick={closeModal}/>
                </div>
          
              <table>
                <tr>
                  <td rowSpan={2} width={210}>
                <div className="selected_profile">
                  <img
                    src={"http://localhost:3500" + selectedStudent.profile}
                    alt=""
                
                  />
                </div>
                  </td>
                  <td width={210}>

                <p> {selectedStudent.regNo}</p>
                  </td>
                  <td>

                <p> {selectedStudent.name}</p>
                  </td>
                </tr>
                <tr>
                  <td width={210}>

                <p> {selectedStudent.programme}</p>
                  </td>
                  <td>
                <p> {selectedStudent.duration.start + "-" + selectedStudent.duration.end}</p>

                  </td>
                </tr>
              </table>
                <div className="p">
                <p><strong>Gender:</strong> {selectedStudent.gender}</p>
                <p><strong>Library Hours:</strong> {selectedStudent.gender}</p>
                </div>
                {/* Add more details as needed */}
              </div>
            </div>
          
        )}
      </div>
    </div>
  );
};

export default AllUsers;
