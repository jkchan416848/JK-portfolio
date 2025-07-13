import React, { useEffect, useState } from "react";
import "../Styles/skills.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

function Skills() {
  const [notification, setNotification] = useState({ label: "", message: "" });
  const [deviceText, setDeviceText] = useState("");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width <= 998) {
        setDeviceText("PC");
      } else {
        setDeviceText("Mobile");
      }
    };
    checkDevice(); // Check on initial render
    window.addEventListener("resize", checkDevice); // Update on resize

    // Cleanup listener
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Function to handle icon click and display notification
  const handleIconClick = (label, message) => {
    setNotification({ label, message });
    setTimeout(() => setNotification({ label: "", message: "" }), 3500); // Clear notification after 2.5 seconds
  };

  return (
    <>
      <h1 className="Skill_header">What I do</h1>
      {/* Notification Section */}
      {notification.label && (
  <div className="notification">
    <Alert
      severity="info"
      style={{
        backgroundColor: "rgba(2, 0, 0, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(10px)", // Safari support
        width: "100%",
        borderRadius: "10px",
        padding: "12px 16px",
        color:"eeeeff"
      }}
    >
      <AlertTitle style={{ color: "var(--primary-color1)" }}>
        {notification.label}
      </AlertTitle>
      {notification.message}
    </Alert>
  </div>
)}
      <div className="skills_container1">
        <div className="skills_container2">
          <div
            data-label="HTML"
            onClick={() =>
              handleIconClick(
                "HTML",
                "the code that is used to structure a web page and its content."
              )
            }>
            <i className="fa-brands fa-html5 fa-shake"></i>
          </div>
          <div
            data-label="CSS"
            onClick={() =>
              handleIconClick(
                "CSS",
                "CSS saves a lot of work. It can control the layout of multiple web pages all at once."
              )
            }>
            <i className="fa-brands fa-css3"></i>
          </div>
          <div
            data-label="JavaScript"
            onClick={() =>
              handleIconClick(
                "JavaScript",
                "a scripting language used to create and control dynamic website content."
              )
            }>
            <i className="fa-brands fa-js"></i>
          </div>
          <div
            data-label="Bootstrap"
            onClick={() =>
              handleIconClick(
                "Bootstrap",
                "Bootstrap is a front-end framework that helps web developers build responsive, mobile-friendly websites faster."
              )
            }>
            <i className="fa-brands fa-bootstrap"></i>
          </div>
          <div
            data-label="React"
            onClick={() =>
              handleIconClick(
                "React",
                "is a free, open-source JavaScript library. It works best to build user interfaces."
              )
            }>
            <i className="fa-brands fa-react"></i>
          </div>
          <div
            data-label="Python"
            onClick={() =>
              handleIconClick(
                "Python",
                "a programming language that's easy to learn, versatile, and widely used."
              )
            }>
            <i className="fa-brands fa-python"></i>
          </div>
          <div
            data-label="SQL"
            onClick={() =>
              handleIconClick(
                "Database",
                " a powerful tool used in SQL databases to analyze and understand the execution plan of a query without actually executing it."
              )
            }>
            <i className="fa-solid fa-database"></i>
          </div>
          <div
            data-label="GitHub"
            onClick={() =>
              handleIconClick(
                "GitHub",
                "Users can store their code in a repository on GitHub and share it with others."
              )
            }>
            <i className="fa-brands fa-github"></i>
          </div>
          <div
            data-label="Web Design"
            onClick={() =>
              handleIconClick(
                "Web Design",
                "the process of creating websites that are both functional and visually appealing."
              )
            }>
            <i className="fa-solid fa-laptop"></i>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="about_me_name1">
        {/* Studie image slider */}
        <h3 className="about_me_title">
          <h4 className="Change_device_namebased_on_width">
            Check my Portfolio in your <span>{deviceText}</span>
          </h4>
        </h3>
      </div>
      <div className="Skills_container_responsive_image_based_on_the_device">
        {/* responsive image based on the device */}
        <div className="image_contain_div_response_parent"></div>
      </div>
    </>
  );
}

export default Skills;
