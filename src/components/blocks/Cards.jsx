import React from "react";

const Cards = () => {
  return (
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
  );
};

export default Cards;
