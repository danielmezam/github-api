import React from "react";
import { Link } from "react-router-dom";
//Styles
import "./UserCard.styles.css";

const UserCard = props => {
  const {
    avatar,
    github,
    github_name,
    name,
    public_repos,
    followers,
    following,
    bio
  } = props;
  return (
    <div className="  mt-5 mb-5 p-5 box-border m-auto bg-white main-card">
      <div className="card-header flex justify-center items-center text-center flex-col p-5">
        <img src={avatar} alt={github} className="w-24 h-24 " />
        <h2 className=" mt-5 text-main text-xl font-bold text-center ">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            {github_name}
          </a>
        </h2>
        <p className="text-gray text-bold">{name ? name : null}</p>
      </div>
      {bio && (
        <div className="card-body">
          <p className="text-left p-5">{bio ? bio : "N/A"}</p>
        </div>
      )}

      {following && (
        <div className="card-footer flex justify-between items-center p-5">
          <p className="text-main text-bold">
            <span className="text-gray text-xl "> Repos: </span>
            {public_repos ? public_repos : null}
          </p>
          <p className="text-main text-bold">
            <Link to={`/followers/${github_name}`}>
              <span className="text-gray text-xl "> Followers: </span>
              {followers ? followers : null}
            </Link>
          </p>
          <p className="text-main text-bold">
            <span className="text-gray text-xl "> Following: </span>
            {following ? following : null}
          </p>
        </div>
      )}
      <button className="w-full px-5 py-2 bg-blue text-white">
        <Link to={`/repos/${github_name}`}>Repos</Link>
      </button>
    </div>
  );
};

export default UserCard;
