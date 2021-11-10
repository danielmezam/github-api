import React, { useState } from "react";

//Components
import UserForm from "../../components/Home/Form/UsersForm";
import UserCard from "../../components/Custom/UserCard/UserCard";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  //Funciones
  const handleUserName = ({ value }) => setUserName(value);

  const handleSearchUser = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const result = await response.json();
      setUserInfo(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center">
      <UserForm
        handleUserName={handleUserName}
        handleSearchUser={handleSearchUser}
      />
      <div className="w-3/4 m-auto text-center">
        {userInfo ? (
          <UserCard
            avatar={userInfo?.avatar_url}
            github={userInfo?.html_url}
            github_name={userInfo?.login}
            name={userInfo?.name}
            public_repos={userInfo?.public_repos}
            followers={userInfo?.followers}
            following={userInfo?.following}
            bio={userInfo?.bio}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
