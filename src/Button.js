import React, { useCallback, useEffect, useState } from "react";
import "./index.css";

const Button = () => {
  const [click, updateClick] = useState(false);
  const clicked = useCallback(() => updateClick(!click), [click]);
  const [button, updateButton] = useState(
    <button className="unused" onClick={clicked} />
  );

  useEffect(() => {
    const classes = ["used", "unused"];
    const textOptions = ["start", "stop"];
    let name = click ? classes[0] : classes[1];
    let text = click ? textOptions[0] : textOptions[1];
    updateButton(
      <button className={name} onClick={clicked}>
        {text}
      </button>
    );
  }, [click, clicked]);

  return button;
};

export default Button;
