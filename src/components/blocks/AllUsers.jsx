import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { CgCloseO } from "react-icons/cg";
import { CiFilter } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";


// import ".src/components/App.css"; // Add your CSS here

const AllUsers = () => {
  const [studentList, setStudentList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');


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

const handleSelectChange = (e) => {
  setSelectedOption(e.target.value);
};


  return (
    <div className="main">
      <div className="details3">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>All Users</h2>
            <SlOptionsVertical />
          </div>
          <button
            className="filter"
            onClick={() => setFilterVisible(!isFilterVisible)}
            style={{ marginBottom: "15px" }}
          >
            Filter
            <CiFilter className="filter-icon" />
          </button>
          {isFilterVisible && (
            <div className="filter-panel">
              <h2 className="h2">Filter Options</h2>
              <form>
                <div className="form-group1">
                  <label htmlFor="select" className="form-label">Search</label>
                  <select id="select" name="select" className="form-control1" onChange={handleSelectChange}>
                    <option value=""></option>
                    <option value="regNo">Register Number</option>
                    <option value="name">Name</option>
                    <option value="programme">Programme</option>
                  </select>
                </div>
                <div className="form-group">
                  {selectedOption === 'programme' ? (
                    <select id="search" name="search" className="form-control">
                      <option value="MSc Computer Science">MSc Computer Science</option>
                      <option value="MSc Computer Science(AI)">MSc Computer Science(AI)</option>
                      <option value="MSc Computer Science(ML)">MSc Computer Science(ML)</option>
                      <option value="M.tech">M.tech</option>
                      {/* Add more options as needed */}
                    </select>
                  ) : (
                    <input
                      type="text"
                      id="search"
                      name="search"
                      className="form-control"
                      placeholder="Search..."
                    />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="startDate" className="form-label">Start Date</label>
                  <input type="date" id="startDate" name="startDate" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate" className="form-label">End Date</label>
                  <input type="date" id="endDate" name="endDate" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="sortOrder" className="form-label">Sort Order</label>
                  <select id="sortOrder" name="sortOrder" className="form-control">
                    <option value="desc"></option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-secondary">
                  Filter
                </button>
                <button
                  type="button"
                  onClick={() => setFilterVisible(false)}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </form>
            </div>
          )}


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
