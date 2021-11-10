import React from "react";

const FlexboxWrapper = ({ children }) => {
  return (
    <div className="w-3/4 m-auto flex justify-between flex-wrap">
      {children}
    </div>
  );
};

export default FlexboxWrapper;
