import React from "react";
import "./NewArrival.css";

const NewArrival = () => {
  return (
    <div className="new-arrival-container">
      <div className="item-left">
        <img
          src={`${process.env.PUBLIC_URL}/images/one-left-arrive.png`}
          style={{ width: "100%" }}
          alt=""
        />
      </div>

      <div className="item-right">
        <div className="item-right-top">
          <img
            src={`${process.env.PUBLIC_URL}/images/right-top-arrive.png`}
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </div>

        <div className="item-right-bottom">
          <div className="item-right-1">
            <img
              src={`${process.env.PUBLIC_URL}/images/right-bottom1.png`}
              style={{ width: "95%" }}
              alt=""
            />
          </div>
          <div className="item-right-2">
            <img
              src={`${process.env.PUBLIC_URL}/images/right-bottom1.png`}
              style={{ width: "95%" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
