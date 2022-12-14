import { SiGithub } from "react-icons/si";
import "./Project.scss";

const Project = () => {
  return (
    <div id="projects">
      <div className="heading">Projects</div>
      <div className="project-container">
        <div className="project">
          <a href="https://github.com/BigVeezus/Check-inn-hotel-api.git">
            Hotel API
          </a>
          <p className="tech">Node.Js, MongoDB, Express</p>
          <p className="info">
            API used to show hotel locations around the map, users can peform
            basic CRUD operations.
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/Check-inn-hotel-api.git">
              <SiGithub />
            </a>
          </div>
        </div>
        <div className="project">
          <a href="https://github.com/BigVeezus/amazon-clone-react.git">
            E-commerce Website
          </a>
          <p className="tech">React, Redux</p>
          <p className="info">
            Amazon clone shopping website using React Context API and Firebase
            authentication.
          </p>
          <div className="icons">
            <a href="https://github.com/vicodevv/Student-API">
              <SiGithub />
            </a>
          </div>
        </div>
        <div className="project">
          <a href="https://github.com/BigVeezus/React-Monster-app.git">
            Monster Cards API
          </a>
          <p className="tech">React.js</p>
          <p className="info">
            This is a fancy app calling random Monsters profiles from API
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/React-Monster-app.git">
              <SiGithub />
            </a>
          </div>
        </div>
        <div className="project">
          <a href="https://github.com/BigVeezus/Quote-Generator.git">
            Quote Generator
          </a>
          <p className="tech">HTML 5, CSS, Javascript</p>
          <p className="info">
            Basic quote generator calling quotes from an API
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/Quote-Generator.git">
              <SiGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
