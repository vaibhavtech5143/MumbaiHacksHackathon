import { motion, animate } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import { useRef } from "react";
import profile from "../assets/logo/logo.png";
import "../styles/static.scss";
import "../styles/home.scss";
import bg from "../assets/bg-cs.jpg";
const Home = () => {
  const clientCount = useRef(null);
  const animationClientsCount = () => {
    animate(0, 6, {
      duration: 1,
      onUpdate: (v) => {
        clientCount.current.innerText = v.toFixed();
      },
    });
  };

  const projectCount = useRef(null);
  const animationProjectsCount = () => {
    animate(0, 24, {
      duration: 1,
      onUpdate: (v) => {
        projectCount.current.innerText = v.toFixed();
      },
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home" className={`bgcs`}>
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Welcome To
            <br /> Secure-Suit
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "One Touch Solution",
                "For All Your Security Related Issues",

                "Whether its password security",
                "Help Desk In Case Of Cyber Fraud",
                "Breached Credentials",
                "Spam Identification",
                "Email Finder",
              ],
              delay: 10,
              autoStart: true,
              loop: true,
              deleteSpeed: -100,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <Link to="/Services">Download tool</Link>
            <Link to="/Services">
              Services <BsArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <img src={profile} alt="Vaibhav" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
