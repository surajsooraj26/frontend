import React, { useEffect, useRef } from "react";
import customer01 from "../../assets/customer01.jpg";

const Main = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
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
