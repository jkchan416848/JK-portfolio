import { yellow } from "@mui/material/colors";
import "../Styles/home.css";
import myprofile from "../assets/profile.jpg";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { keyframes } from "@emotion/react";

function Home() {
  const icons_c = [
    {
      icon_c: "Instagram",
      color: "lightsalmon",
      fontsize: "35px",
      opacity: "1",
      Name: "Front-end developer 👩‍💻",
      color2: "lightpink",
    },
    {
      icon_c: "Facebook",
      color: "#A1FAf8",
      fontsize: "35px",
      opacity: "1",
      Name: "web developer 🕸",
      color2: "lightblue",
    },
    {
      icon_c: "LinkedIn",
      color: "#0A66C2",
      fontsize: "35px",
      opacity: "1",
      Name: "Python full stack developer 🐍",
      color2: "lightgreen",
    },
    {
      icon_c: "Github",
      color: "rgba(7, 227, 235, 0.8)",
      fontsize: "35px",
      opacity: "1",
      Name: "React js developer 🎆",
      color2: "lightred",
    },
  ];

  const [currentColor, setCurrentColor] = useState(icons_c[0]);

  // Color rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const selectItem = Math.floor(Math.random() * icons_c.length);
      setCurrentColor(icons_c[selectItem]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Helper functions
  const getIconColor = (iconName) =>
    currentColor.icon_c === iconName ? currentColor.color : "White";

  const getcolor2 = (iconName) =>
    currentColor.icon_c === iconName ? currentColor.color : "White";

  const getsize = (iconName) =>
    currentColor.icon_c === iconName ? currentColor.fontsize : "30px";

  const getopacity = (iconName) =>
    currentColor.icon_c === iconName ? currentColor.opacity : "0.2";

  const getName = (iconName) =>
    currentColor.icon_c === iconName ? currentColor.Name : "";

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".hidded");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const fadeInSlide = keyframes`
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 0.9; transform: translateY(0); }
  `;

  return (
    <>
      <div className="parent-home-page-container p-3 mt-5 mt-sm-5 container-fluid-xl container-lg container-fluid-sm">
        <div className="child-home-page-containers row hidded">
          <div className="mt-md-5 mt-sm-5 container-sm mt-5 hidded">
            <h1 style={{ opacity: "0.8", color: "#eeeeff" }}>
              Hi <small>I'm </small>{" "}
              <WavingHandIcon
                sx={{ fontSize: 40, color: yellow[300] }}
                className="hand-icon mx-1"
              />
            </h1>
            <h1
              className="display-1"
              style={{ color: "var(--primary-color1)" }}>
              <span style={{ opacity: "0.8" }}>Jaya Kumar</span>
            </h1>
            <p
              style={{
                opacity: "0.8",
                color: "#eeeeff",
                fontWeight: "light",
              }}>
              Front-end developer Knowledge to real-world projects. <br />
              passionate about creating intuitive and innovative user
              experiences
            </p>
            <div
              className="hidded"
              style={{ color: `${getcolor2(currentColor.icon_c)}` }}>
              <p className="auto-generate-text">
                {" "}
                <span className="text-light" style={{ color: "#eeeeff" }}>
                  - I am{" "}
                </span>
                {getName(currentColor.icon_c)}
              </p>
            </div>
            <div className="hidded">
              <strong className="fw-medium available-container">
                <span>
                  <FiberManualRecordIcon
                    sx={{ width: "20px" }}
                    className="mx-2 my-4 animicon"
                  />
                </span>
                <Link className="text-decoration-none" to={"/contact"}>
                  <span className="text-light " style={{ opacity: "0.7" }}>
                    Available for work
                  </span>
                </Link>
              </strong>
            </div>
            <div className="icon-containers hidded">
              <Link className="icons-c" to={"/contact"}>
                <InstagramIcon
                  sx={{
                    fontSize: getsize("Instagram"),
                    color: getIconColor("Instagram"),
                  }}
                  style={{
                    transition: " all 0.2s",
                    opacity: `${getopacity("Instagram")}`,
                  }}
                />
              </Link>
              <Link className="icons-c" to={"/contact"}>
                <FacebookIcon
                  sx={{
                    fontSize: getsize("Facebook"),
                    color: getIconColor("Facebook"),
                  }}
                  style={{
                    transition: " all 0.2s",
                    opacity: `${getopacity("Facebook")}`,
                  }}
                />
              </Link>
              <Link className="icons-c" to={"/contact"}>
                <LinkedInIcon
                  sx={{
                    fontSize: getsize("LinkedIn"),
                    color: getIconColor("LinkedIn"),
                  }}
                  style={{
                    transition: " all 0.2s",
                    opacity: `${getopacity("LinkedIn")}`,
                  }}
                />
              </Link>
              <Link className="icons-c" to={"/contact"}>
                <GitHubIcon
                  sx={{
                    fontSize: getsize("Github"),
                    color: getIconColor("Github"),
                  }}
                  style={{
                    transition: " all 0.2s",
                    opacity: `${getopacity("Github")}`,
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="child-home-page-containers hidded">
          <img
            src={myprofile}
            alt="profile"
            width="129%"
            loading="lazy"
            className="hidded"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
