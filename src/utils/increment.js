
import React from "react";

const Counter = (props) => {
    return (
        <div className="card text-center">
        <div className="card-header bg-primary text-white">
        </div>
        <div className="card-body">
          <p className="card-text">Number of employees: {props.number}</p>
          <button className="btn btn-primary" onClick={props.handleIncrement}>
           +
          </button>{" "}
          <button className="btn btn-danger" onClick={props.handleDecrement}>
      -
          </button>
          <button className="btn btn-primary" onClick={props.asendingOrder}>
         ABC
          </button>
          <button className="btn btn-danger" onClick={props.desendingOrder}>
           XYZ
          </button>
        </div>
      </div>
    )
}


export default Counter;