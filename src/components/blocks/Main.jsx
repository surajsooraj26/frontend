// frontend/src/Main.jsx
import React, { useEffect, useRef, useContext, useState} from "react";
import { LogContext } from "../contexts/LogContext";
import axios from "axios";
import customer01 from "../../assets/customer01.jpg";

const Main = ({view}) => {
  const { setlogData } = useContext(LogContext);
  const [currentView, setCurrentView] = useState(view);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleBodyClick = (e) => {
        if (inputRef.current && e.target !== inputRef.current) {
          inputRef.current.focus();
        }

      
    };

    const handleEnterKeyPress = async (e) => {
      if (e.key === "Enter") {
        const regno = inputRef.current.value;
        try {
          const response = await axios.post("http://localhost:3500/log", {
            regno,
          });
          setlogData(response.data);
          inputRef.current.value = ""; // Clear the input field
        } catch (error) {
          console.error("Error:", error);
        }
      }
    };

    document.body.addEventListener("click", handleBodyClick);
    inputRef.current.addEventListener("keypress", handleEnterKeyPress);

    // Focus input on mount
      inputRef.current.focus();

    

    // Clean up event listeners on unmount
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
      if(inputRef.current){
        inputRef.current.removeEventListener("keypress", handleEnterKeyPress);

      }

      
    };
  }, [setlogData]);

  return (
    <div className="topbar">
      <div className="toggle">
        <ion-icon name="menu-outline" />
      </div>
      <div className="search">
        <label>
          <input ref={inputRef} type="text" placeholder="Search here" />
          <ion-icon name="search-outline" />
        </label>
      </div>
      <div className="user">
        <img src={customer01} alt="" />
      </div>
    </div>
  );
};

export default Main;