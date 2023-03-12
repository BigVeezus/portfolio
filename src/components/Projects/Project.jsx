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
          <div className="live">
            <a href="/">View live project </a>
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
            <a href="https://github.com/BigVeezus/amazon-clone-react.git">
              <SiGithub />
            </a>
          </div>
          <div className="live">
            <a href="https://elvisshop.netlify.app">View live project </a>
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
          <div className="live">
            <a href="https://inquisitive-babka-18692d.netlify.app">
              View live project{" "}
            </a>
          </div>
        </div>
        <div className="project">
          <a href="https://github.com/BigVeezus/Login-ForgotPasswordSys-mySql.git">
            Secured PHP Log-in System
          </a>
          <p className="tech">PHP, CSS, MySQL</p>
          <p className="info">
            Well secured login & forgot password system using PHP and MySQL and
            sessions.
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/Login-ForgotPasswordSys-mySql.git">
              <SiGithub />
            </a>
          </div>
          <div className="live">
            <a href="http://phpsite.infinityfreeapp.com/login_form.php?i=1">
              View live project{" "}
            </a>
          </div>
        </div>
        <div className="project">
          <a href="https://github.com/BigVeezus/santa-tracking-app-nextjs.git">
            Santa-Tracking APP
          </a>
          <p className="tech">React.js Leaflet, Next.js</p>
          <p className="info">
            Santa's map tracker application showing Santas delivery and arrival
            time
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/santa-tracking-app-nextjs.git">
              <SiGithub />
            </a>
          </div>
        </div>
        <div className="project">
          <a href="https://github.com/BigVeezus/BivasReplica-Election-API.git">
            BVAS Clone Election System
          </a>
          <p className="tech">Typescript,Node, CSS, MySQL</p>
          <p className="info">
            A General Election App where polling units upload votes data from a
            CSV file to the database.
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/BivasReplica-Election-API.git">
              <SiGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
