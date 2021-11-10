import React from "react";

//Styles
import "./Checkbox.styles.css";

const Checkbox = ({ handleDarkMode, darkMode }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h6 className={`${darkMode ? "text-white" : "text-black"}`}>Dark Mode</h6>
      <input type="checkbox" id="switch" onChange={handleDarkMode} />
      <label for="switch" className={`${darkMode ? "dark-input" : null}`}>
        Toggle
      </label>
    </div>
  );
};

export default Checkbox;
