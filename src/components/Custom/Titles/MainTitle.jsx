import React from "react";

const MainTitle = ({ name, text }) => {
  return (
    <h2 className="text-center mt-10 text-bold text-2xl">
      <span className="text-main text-3xl">{name}</span> {text}
    </h2>
  );
};

export default MainTitle;
