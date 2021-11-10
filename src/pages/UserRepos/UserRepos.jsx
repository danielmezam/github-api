import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import MainTitle from "../../components/Custom/Titles/MainTitle";
import FlexboxWrapper from "../../components/Custom/Wrappers/FlexboxWrapper";
import RepoCard from "../../components/Custom/RepoCard/RepoCard";

const UserRepos = () => {
  const { name } = useParams();
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    const handleReposByUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${name}/repos`
        );
        const result = await response.json();
        setRepos(result);
      } catch (error) {
        console.log(error);
      }
    };

    handleReposByUser();
  }, []);

  return (
    <div>
      <MainTitle name={name} text="Repos" />
      <FlexboxWrapper>
        {repos?.map(repo => (
          <RepoCard
            language={repo?.language}
            description={repo?.description}
            name={repo?.name}
            url={repo?.html_url}
            key={repo?.id}
          />
        ))}
      </FlexboxWrapper>
    </div>
  );
};

export default UserRepos;
