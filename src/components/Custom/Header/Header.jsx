import React, { useContext } from "react";
//Router
import { Link, useHistory } from "react-router-dom";
//Components
import Checkbox from "../Inputs/Checkbox/Checkbox";
//Context
import DarkModeContext from "../../../context/DarkModeContext";

const Header = () => {
  const history = useHistory();
  const { darkMode, handleDarkMode } = useContext(DarkModeContext);
  return (
    <header
      className={`flex justify-between items-center  py-5 px-6 ${
        darkMode ? "bg-black" : "bg-yellow"
      }`}
    >
      <h2
        className={`text-2xl text-bold ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <Link to="/">Github API</Link>
      </h2>
      <div className="w-1/6 flex justify-between items-center">
        <Checkbox handleDarkMode={handleDarkMode} darkMode={darkMode} />
        <button
          onClick={() => history.goBack()}
          className={`${darkMode ? "text-white" : "text-black"}`}
        >
          Go Back
        </button>
      </div>
    </header>
  );
};

export default Header;
