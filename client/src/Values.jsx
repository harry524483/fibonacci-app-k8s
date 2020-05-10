import React, { Fragment } from "react";

const Values = (props) => {
  return (
    <Fragment>
      <h5>Calcualted Values</h5>
      <div>
        {Object.keys(props.values).map((key) => {
          return (
            <p key={key}>
              For index: {key} | Calculated: {props.values[key]}
            </p>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Values;
