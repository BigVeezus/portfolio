import react from "../../assets/react.png";
import node from "../../assets/node.png";
import mongodb from "../../assets/mongodb.png";
import postgres from "../../assets/postgres.jpeg";
import express from "../../assets/express.jpeg";
import javascript from "../../assets/javascript.png";
import sass from "../../assets/sass.png";
import python from "../../assets/python.png";
import typescript from "../../assets/typescript.png";
import java from "../../assets/java.png";
import postman from "../../assets/postman.png";
import github from "../../assets/github.png";

import "./Tools.scss";

const Tools = () => {
  const images = [
    react,
    node,
    mongodb,
    postgres,
    express,
    javascript,
    sass,
    python,
    typescript,
    java,
    postman,
    github,
  ];

  return (
    <div id="tools">
      <p className="header">Tools & Technologies</p>
      <div className="images">
        {images.map((image, index) => (
          <img src={image} alt={index} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
