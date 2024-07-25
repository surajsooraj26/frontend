import React from "react";
import Main from "./Main";

const Form = () => {
  return (
    <div className="main">

    
    <Main/>
    <div className="cardBox">
      <div className="card">
        <div>
          <div className="numbers">1,504</div>
          <div className="cardName">Total Students</div>
        </div>
        <div className="iconBx">
          <ion-icon name="People-outline" />
        </div>
      </div>
      <div className="card">
        <div>
          <div className="numbers">80</div>
          <div className="cardName">Status-In</div>
        </div>
        <div className="iconBx">
          <ion-icon name="cart-outline" />
        </div>
      </div>
      <div className="card">
        <div>
          <div className="numbers">284</div>
          <div className="cardName">Status-Out</div>
        </div>
        <div className="iconBx">
          <ion-icon name="chatbubbles-outline" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
