import React from "react";

const RepoCard = ({ language, description, name, url }) => {
  const avatar =
    language === "HTML"
      ? "html"
      : language === "Vue"
      ? "vue"
      : language === "JavaScript"
      ? "js"
      : "github";
  console.log(language);
  return (
    <div className="  mt-5 mb-5 p-5 box-border m-auto bg-white main-card">
      <div className="card-header flex justify-center items-center text-center flex-col p-5">
        <img
          src={require(`../../../assets/${avatar.toString()}.png`).default}
          alt={name}
          width="64"
          height="64"
        />
        <p className="text-gray text-bold mt-2">{name ? name : null}</p>
      </div>
      <button className="w-full px-5 py-2 bg-blue text-white">
        <a href={url} target="_blank">
          More
        </a>
      </button>
    </div>
  );
};

export default RepoCard;
