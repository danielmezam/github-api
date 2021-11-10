import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import UserCard from "../../components/Custom/UserCard/UserCard";
import MainTitle from "../../components/Custom/Titles/MainTitle";
import FlexboxWrapper from "../../components/Custom/Wrappers/FlexboxWrapper";

const Followers = () => {
  //Router hooks
  const { name } = useParams();

  //State
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const handleFollowers = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${name}/followers`
        );
        const result = await response.json();
        setFollowers(result);
      } catch (error) {
        console.log(error);
      }
    };

    handleFollowers();
  }, []);

  return (
    <div className="followers-container">
      <MainTitle name={name} text="Followers" />
      <FlexboxWrapper>
        {followers?.map(userInfo => (
          <UserCard
            avatar={userInfo?.avatar_url}
            github={userInfo?.html_url}
            github_name={userInfo?.login}
            name={userInfo?.name}
            public_repos={userInfo?.public_repos}
          />
        ))}
      </FlexboxWrapper>
    </div>
  );
};

export default Followers;
