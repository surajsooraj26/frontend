import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    regNo: "",
    name: "",
    programme: "",
    duration: { start: "", end: "" },
    gender: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "duration[start]" || name === "duration[end]") {
      const durationKey = name.split("[")[1].split("]")[0];
      setFormData((prevData) => ({
        ...prevData,
        duration: {
          ...prevData.duration,
          [durationKey]: value,
        },
      }));
    } else if (name === "photograph") {
      setFile(event.target.files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("regNo", formData.regNo);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("programme", formData.programme);
    formDataToSend.append("duration[start]", formData.duration.start);
    formDataToSend.append("duration[end]", formData.duration.end);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("image", file);

    try {
      const response = await axios.post(
        "http://localhost:3500/student/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <div className="details1">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Register Student</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="register">Register number</label>
            <input
              type="text"
              placeholder="Register Number"
              id="register"
              name="regNo"
              className="form-control"
              value={formData.regNo}
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="photograph">Photograph</label>
            <input
              type="file"
              placeholder="Photograph"
              id="photograph"
              name="photograph"
              className="form-control"
              onChange={handleChange}
            />
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <select
                id="course"
                name="programme"
                className="form-control"
                value={formData.programme}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option value="MSc Computer Science">
                  MSc Computer Science
                </option>
                <option value="MSc Computer Science(AI)">
                  MSc Computer Science(AI)
                </option>
                <option value="MSc Computer Science(ML)">
                  MSc Computer Science(ML)
                </option>
                <option value="M.tech">M.tech</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="starting">Starting year</label>
              <input
                type="number"
                id="starting"
                name="duration[start]"
                min={2020}
                max={2100}
                step={1}
                value={formData.duration.start}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ending">Ending year</label>
              <input
                type="number"
                id="ending"
                name="duration[end]"
                min={2020}
                max={2100}
                step={1}
                value={formData.duration.end}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div>
                <select
                  name="gender"
                  className="form-control"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
