import React, { Fragment } from "react";

const Indicies = (props) => {
  return (
    <Fragment>
      <h4>Indicies I have seen:</h4>
      <p>{props.indicies.join()}</p>
    </Fragment>
  );
};

export default Indicies;
