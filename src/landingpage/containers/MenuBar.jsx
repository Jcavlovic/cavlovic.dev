import React from "react";

const Button = ({ href, text, className }) => {
  return (
    <a href={href} key={text} className={className}>
      <button>{text}</button>
    </a>
  );
};

const SocialMedia = () => {
  const socialmediaicons = [
    {
      name: "facebook",
      src: "../assets/facebook.svg",
      link: "https://www.facebook.com/jordan.cavlovic",
    },
    {
      name: "github",
      src: "../assets/github.svg",
      link: "https://www.github.com/jcavlovic",
    },
    {
      name: "linkedin",
      src: "../assets/linkedin.svg",
      link: "https://www.linkedin.com/in/jordan-cavlovic-507629199/",
    },
  ];

  return (
    <div className="socialmedia">
      {socialmediaicons.map((socialmediaicon, index) => (
        <>
          <a href={socialmediaicon.link} key={socialmediaicon.name}>
            <img
              src={socialmediaicon.src}
              alt={socialmediaicon.name}
              className={`socialmedia-${index + 1}`}
              key={socialmediaicon.name}
            />
          </a>
        </>
      ))}
    </div>
  );
};

const CoolNameGIF = () => {
  const coolnamelocation = "../assets/name.gif";

  return (
    <img src={coolnamelocation} alt="CoolNameGiF" className="coolnamegif" />
  );
};

const MenuBarButtons = () => {
  const pages = [
    { webpage: "./", text: "Main" },
    { webpage: "./projects", text: "Projects" },
    { webpage: "./aboutme", text: "About" },
  ];

  return (
    <div className="menubarbuttons">
      {pages.map((page, index) => (
        <Button
          href={page.webpage}
          key={page.text}
          className={`button-${index + 1}`}
          text={page.text}
        />
      ))}
    </div>
  );
};

const MenuBar = () => {
  return (
    <div className="menubar">
      <CoolNameGIF />
      <MenuBarButtons />
      <SocialMedia />
    </div>
  );
};

export default MenuBar;
