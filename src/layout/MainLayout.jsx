import React from "react";

//Components
import Header from "../components/Custom/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
