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
            API used to show hotel locations around the map, users can perform
            basic CRUD operations.
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/Check-inn-hotel-api.git">
              <SiGithub />
            </a>
          </div>
          <div className="live">
            <a href="https://check-inn-git-main-bigveezus.vercel.app/">
              View live project
            </a>
          </div>
        </div>

        <div className="project">
          <a href="https://github.com/BigVeezus/Movies-API">Movies API</a>
          <p className="tech">Node.Js, MongoDB, Express</p>
          <p className="info">
            Users can add Movies,perform CRUD operations and sort movies
            according to ratings, years etc.
          </p>
          <div className="icons">
            <a href="https://movies-api-bigveezus.vercel.app/">
              <SiGithub />
            </a>
          </div>
          <div className="live">
            <a href="https://check-inn-git-main-bigveezus.vercel.app/">
              View live project
            </a>
          </div>
        </div>

        <div className="project">
          <a href="https://github.com/BigVeezus/gCloud-Nextjs-ticketify-app">
            Ticket API project
          </a>
          <p className="tech">Typescript, NATS, Node, Nextjs</p>
          <p className="info">
            Microservices Ticket app that allows users purchase tickets to
            events - Stripe Payment system.
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/gCloud-Nextjs-ticketify-app">
              <SiGithub />
            </a>
          </div>
        </div>

        <div className="project">
          <a href="https://github.com/BigVeezus/My-CLI">
            GO REPL Command line tool
          </a>
          <p className="tech">Go lang</p>
          <p className="info">
            A Go command line tool that contains several API of my information
            and also includes fun games
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/My-CLI">
              <SiGithub />
            </a>
          </div>
        </div>

        <div className="project">
          <a href="https://github.com/BigVeezus/graphQL-project-management-system">
            Project Management system
          </a>
          <p className="tech">GraphQL, React, Nodejs</p>
          <p className="info">
            Project management system that helps users track progress of various
            client projects and sends them about progress by mail.
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/graphQL-project-management-system">
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
          <a href="https://github.com/BigVeezus/NodeCrawler">NodeCrawler</a>
          <p className="tech">Javascript</p>
          <p className="info">
            A scrapping bot that generates internal links & open assessable API
            report for any website by crawling every page.
          </p>
          <div className="icons">
            <a href="https://github.com/BigVeezus/NodeCrawler">
              <SiGithub />
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
      </div>
    </div>
  );
};
export default Project;
