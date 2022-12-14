import "./Home.scss";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Elvis from "../../assets/Elvis.jpeg";

const Home = () => {
  const scrollDown = () => {
    const scrollTo = document.querySelector("#tools");
    scrollTo.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  };
  return (
    <div id="home">
      <div className="container">
        <img src={Elvis} alt="face" />
        <div className="bio">
          <div className="intro">Hey there, my name is</div>
          <div className="name">Elvis Osuji.</div>
          <p className="subText">
            <Typewriter
              options={{
                strings: [
                  "I`m a Software Engineer/Full-Stack Javascript Developer who is currently working on building simple projects using Front-end and Backend tools",
                  "I`m also a strong problem-solver who understands the principles of computer science, such as algorithms and data structures.",
                  "I love watching Sports - Football & Basketball during my free time, and I also enjoy listening to music and playing video games.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <div className="social">
            <a href="https://github.com/BigVeezus/Elvis-Osuji">
              <SiGithub />
            </a>
            <a href="https://www.linkedin.com/in/elvis-osuji-97786a218/">
              <SiLinkedin />
            </a>
          </div>
          <div className="scrollDown">
            <FaChevronDown onClick={() => scrollDown()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
