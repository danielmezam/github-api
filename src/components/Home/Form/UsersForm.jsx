import React from "react";

//Styles
import "./UsersForm.styles.css";

const UsersForm = ({ handleUserName, handleSearchUser }) => {
  return (
    <form
      className=" w-4/5 md:w-1/2 m-auto mt-10"
      onSubmit={e => handleSearchUser(e)}
    >
      <input
        type="text"
        placeholder="User name"
        className="px-3 py-3 w-2/3 user-input"
        onChange={({ target }) => handleUserName(target)}
      />
      <input
        type="submit"
        value="Search"
        className="px-3 py-3 w-1/3 bg-black  text-white text-bold hover:bg-yellow hover:text-black search-input"
      />
    </form>
  );
};

export default UsersForm;
