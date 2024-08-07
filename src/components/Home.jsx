import React, { useState } from "react";
import axios from "axios";
import { CgCloseO } from "react-icons/cg";

///
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.svg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Modal from "react-modal";
////

const Home = ({ setToken }) => {
  const [visible, setVisible] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/login", {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Lorem</h1>
          <p className="primary-text">
          Using a barcode reader for library attendance streamlines the process by allowing students and staff to quickly scan their IDs as they enter or exit. This automated system ensures accurate tracking of library usage, reduces manual errors, and enhances efficiency. By simply scanning a barcode, attendance records are instantly updated in the library's database, making it easier to monitor traffic patterns, manage resources, and ensure that the library operates smoothly.
          </p>
          <button className="secondary-button" onClick={() => setVisible(true)}>
            Log In <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
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

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default Home;
