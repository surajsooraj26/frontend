import React from "react";
import customer01 from "../../assets/customer01.jpg";
import customer02 from "../../assets/customer02.jpg";

const New = () => {
  return (
    <div className="recentCustomers">
      <div className="cardHeader">
        <h2>Recent Students</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img src={customer02} alt="" />
              </div>
            </td>
            <td>
              <h4>
                David <br />
                <span>Italy</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img src={customer01} alt="" />
              </div>
            </td>
            <td>
              <h4>
                Amit <br />
                <span>India</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img src={customer02} alt="" />
              </div>
            </td>
            <td>
              <h4>
                David <br />
                <span>Italy</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img src={customer01} alt="" />
              </div>
            </td>
            <td>
              <h4>
                Amit <br />
                <span>India</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img src={customer02} alt="" />
              </div>
            </td>
            <td>
              <h4>
                David <br />
                <span>Italy</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img src={customer02} alt="" />
              </div>
            </td>
            <td>
              <h4>
                Amit <br />
                <span>India</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img src={customer01} alt="" />
              </div>
            </td>
            <td>
              <h4>
                David <br />
                <span>Italy</span>
              </h4>
            </td>
          </tr>
          <tr>
            <td width="60px">
              <div className="imgBx">
                <img src={customer02} alt="" />
              </div>
            </td>
            <td>
              <h4>
                Amit <br />
                <span>India</span>
              </h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default New;
