import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { CgCloseO } from "react-icons/cg";
import { SlOptionsVertical } from "react-icons/sl";


// import ".src/components/App.css"; // Add your CSS here

const AllUsers = () => {
  const [studentList, setStudentList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);


  useEffect(() => {
    if (showOptions) {
      document.addEventListener('click', handleClickOutside);
  } else {
      document.removeEventListener('click', handleClickOutside);
  }

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
      return () => {
        document.removeEventListener('click', handleClickOutside);
    };
  }, [showOptions]);

  const details = (student) => {
    setSelectedStudent(student);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  const toggleOptions = () => {
    setShowOptions(prevState => !prevState);
  };
  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
    }
};

  return (
    <div className="main">
      <div className="details3">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>All Users</h2>
            <SlOptionsVertical />
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
              
              

            <CgCloseO className="close-container1" onClick={closeModal}/>
              
                <div className="option-container" ref={optionsRef}>
                <div className="option" onClick={toggleOptions}>

                <SlOptionsVertical />
                </div>
                {showOptions && (
                <div className="options-menu">
                    <div className="option-item">Edit</div>
                    <div className="option-item">Disable</div>
                    <div className="option-item">Delete</div>
                </div>
            )}
            </div>
              <table>
                <tr>
                  <td rowSpan={4} width={230}>
                <div className="selected_profile">
                  <img  className="image-class"
                    src={"http://localhost:3500" + selectedStudent.profile}
                    alt=""
                
                  />
                </div>
                  </td>
                  <td width={210}>

                <p> {selectedStudent.name}</p>
                  </td>

                  <td>
                <p> {selectedStudent.regNo}</p>

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
             <tr>
               <td>
                <p>{selectedStudent.gender}</p>
                </td>
                
                </tr>
                </table>
                {/* Add more details as needed */}
              </div>
            </div>
          
        )}
      </div>
    </div>
  );
};

export default AllUsers;
