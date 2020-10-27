import logo from "./logo.svg";
import React, { useState } from "react";
import Button from "./Button";

const Logo = () => {
  const [spin, updateSpin] = useState("logo");
  const pos = ["logo", "stopped-logo"];
  const stopSpin = () => {
    updateSpin(pos[0] === spin ? pos[1] : pos[0]);
    spin === pos[1]
      ? (document.getElementById(pos[1]).style.animationPlayState = "running")
      : (document.getElementById(pos[0]).style.animationPlayState = "paused");
  };

  return (
    <div onClick={stopSpin}>
      <img src={logo} id={spin} className="App-logo" alt="logo" />
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Logo;
