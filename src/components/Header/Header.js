import React, { useState } from "react";
import "./Header.css";
import mwLogo from "../../assests/images/MW-Logo-No-BG.svg";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "home";

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme.name === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <header className="header">
        <NavLink to={link} tag={Link} className="logo">
          <span style={{ color: theme.text }}></span>
          {greeting.logo_name ? (
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
          ) : (
            <span>
              <img
                src={mwLogo}
                style={{ height: "80px" }}
                alt="Red logo for Mateo Wallace, looks like an MW with two dots."
              />
            </span>
          )}

          <span style={{ color: theme.text }}></span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink
              className="homei"
              to="/home"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ec"
              to="/education"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Education and Certifications
            </NavLink>
          </li>
          <li>
            <NavLink
              className="xp"
              to="/experience"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className="projects"
              to="/projects"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="cr"
              to="/contact"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Contact and Resume
            </NavLink>
          </li>
          {settings.themeToggle ? (
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
          ) : (
            ""
          )}
        </ul>
      </header>
    </motion.div>
  );
}

export default Header;
