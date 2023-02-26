import "../../static/css/custom.css";
import React from "react";
import dormedLogo from "../../static/images/dormed-logo.png";


function Hero() {
  return (
    <div>
      <hero className="d-flex flex-wrap align-items-center bg-success py-3">
        <div className="col-md-4 d-flex align-items-center ms-5">
          <img src={dormedLogo} height={64} className="rotate"/>
          <span className="mb-3 mb-md-0 text-white fs-4">© 2022 Dormed</span>
        </div>
      </hero>
    </div>
  );
}

export default Hero;
