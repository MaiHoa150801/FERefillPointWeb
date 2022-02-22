import * as React from "react";
import AddLogo from "../../img/service/save money.png";

function SvgComponent(props) {
  return (
    <img src={AddLogo} alt='logo' width={50} height={50} viewBox="0 0 35.459 43.42" {...props} ></img>
  );
}

export default SvgComponent;
