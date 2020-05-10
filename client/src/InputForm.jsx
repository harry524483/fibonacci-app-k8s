import React from "react";

const InputForm = (props) => {
  return (
    <div>
      Enter you Index:{" "}
      <input
        value={props.index}
        onChange={props.handleChange}
        required={true}
      />
      <button>Submit</button>
    </div>
  );
};

export default InputForm;
