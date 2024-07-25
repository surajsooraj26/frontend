import React from "react";
import Main from "./Main";

const Form = () => {
  return (

    
    <div className="details1">
  <div className="recentOrders">
    <div className="cardHeader">
      <h2>Register Student</h2>
    </div>
    <form>
      <div className="form-group">
        <label htmlFor="register">Register number</label>
        <input
          type="text"
          placeholder="Register Number"
          id="register"
          name="register"
          className="form-control"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Full Name"
          id="name"
          name="name"
          className="form-control"
        />
        <div className="form-group">
          <label htmlFor="photograph">Photograph</label>
          <input
            type="file"
            placeholder="Photograph"
            id="photograph"
            name="photograph"
            className="form-control"
          />
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <select id="course" name="course" className="form-control">
              <option value="select">Select Course</option>
              <option value="math">MSc Computer Science</option>
              <option value="science">MSc Computer Science(AI)</option>
              <option value="history">MSc Computer Science(ML)</option>
              <option value="history">BSc Computer Science(ML)</option>
              <option value="history">M.tech</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="starting">Starting year</label>
            <input
              type="number"
              id="starting"
              name="starting"
              min={2020}
              max={2100}
              step={1}
            />
            <div className="form-group">
              <label htmlFor="ending">Ending year</label>
              <input
              type="number"
              id="starting"
              name="starting"
              min={2020}
              max={2100}
              step={1}
            />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div>
                <select name="gender" id="">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

  );
};

export default Form;
