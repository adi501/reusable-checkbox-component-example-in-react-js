import React, { useState } from "react";

import CheckBox from "./common/CheckBox/index";

export default function CheckBoxEXP() {
  const [cb1, setcb1] = useState(false);

  const [cb2, setcb2] = useState(false);

  const toggleCheckboxChange = e => {
    cb1 === true ? setcb1(false) : setcb1(true);
  };

  const toggleCheckboxChange1 = e => {
    cb2 === true ? setcb2(false) : setcb2(true);
  };

  return (
    <div>
      <h3>CheckBox reusable component example</h3>

      <CheckBox
        id={"cb1"}
        value={"One"}
        isChecked={cb1}
        onclickHandler={toggleCheckboxChange}
      />

      <CheckBox
        id={"cb2"}
        value={"Two"}
        isChecked={cb2}
        onclickHandler={toggleCheckboxChange1}
      />
    </div>
  );
}
