import React from "react";

import "./loader.css";

const Loader = (props) => {
  return (
    <div className="loader-wrapper" style={props.style}>
      <div className="loader">Loading...</div>;
    </div>
  );
};

export default Loader;
