import React, { useEffect, useRef } from "react";
import customer01 from "../../assets/customer01.jpg";

const Main = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (inputRef.current && e.target !== inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    // Focus input on mount
    inputRef.current.focus();

    // Clean up event listener on unmount
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

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
