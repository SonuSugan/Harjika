import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from "../assets/wrappers/Navbar";
import { useDashboardContext } from "./HomeLayout";
import { Link } from "react-scroll";

const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  const [click, setclick] = useState(false);
  return (
    <Wrapper>
      <div className="logo">
        <div className="logo_heading">
        </div>
      </div>
      <ul className={click ? "menu active" : "menu"}>
        <li>
          <Link
            to="hero"
            spy={true}
            offset={-90}
            smooth={true}
            duration={500}
            className="button1 white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
             className="button1 white"
            offset={-200}
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
      </ul>
      <button className="button" onClick={toggleSidebar}>
        <GiHamburgerMenu className="white"/>
      </button>
    </Wrapper>
  );
};

export default Navbar;
