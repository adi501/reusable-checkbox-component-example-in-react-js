import React from "react";

import "./style.css";

const CheckBox = props => {
  return (
    <div className="checkbox">
      <label>
        <input
          id={props.id}
          type="checkbox"
          value={props.value}
          checked={props.isChecked}
          onChange={props.onclickHandler}
        />

        {props.value}
      </label>
    </div>
  );
};

export default CheckBox;
