import React, { useState, useEffect } from "react";
import "../Styles/project.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Alert from "@mui/material/Alert";
import Profile from "../assets/profile2.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Project_container from "./database.jsx";

function Project() {
  //like function
  const [likedStatus, setLikedStatus] = useState(
    new Array(Project_container[Project_container.length - 1]).fill(false)
  );
  const handleLikeClick = (index) => {
    const newLikedStates = [...likedStatus];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStatus(newLikedStates);
    // Toggle the liked state
  };
  //image render function
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Project_container[1].project_images;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  //animation function
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show1");
        } else {
          entry.target.classList.remove("show1");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidded");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="p-2">
      {Project_container.map((project, index) => (
        <div key={index}>
          <div className="container-lg container-fluid-sm justify-content-center d-flex align-items-center container mt-5 my-5 p-1 hidded">
            <Card
              sx={{ maxWidth: 607 }}
              className="w-100 car_d"
              style={{
                background: "linear-gradient(to bottom,#101B20 ,#61636428)",
                backdropFilter: "blur(20px)",
                color: "#A5BEC8",
              }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" src={Profile}>
                    Jk
                  </Avatar>
                }
                title={project.My_name}
                className="text-light"
              />
              <CardActionArea>
                <CardMedia
                  className="container h-50"
                  component="img"
                  height="40"
                  image={project.project_images[currentImageIndex]}
                  alt=" ' Loading...."
                  loading="lazy"
                  style={{
                    opacity: "0.9",
                    borderRadius: "5px",
                    transition:
                      "transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
                  }}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 18 }} color="light">
                    {project.project_title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    className="text-secondary"
                    gutterBottom>
                    {/* Languages:  */}
                    {project.languages}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="container d-flex justify-content-evenly flex-wrap align-content-center">
                <Tooltip
                  className=""
                  title={
                    project.Live_status === `Not Live now`
                      ? `This project is Currently Not Live now 😔`
                      : `This project is Live now 😀 Click me`
                  }>
                  <Button
                    size="small"
                    href={
                      project.Live_status === `Not Live now 😐`
                        ? `${project()}`
                        : project.Live_link
                    }
                    target={
                      project.Live_status === `Not Live now 😐`
                        ? "_self"
                        : "_blank"
                    }>
                    <span>
                      <FiberManualRecordIcon
                        sx={{ width: "20px" }}
                        className={
                          project.Live_status === "Live now"
                            ? "animicon mx-2 my-4"
                            : "animicon1 mx-2 my-4"
                        }
                      />
                    </span>
                    {project.Live_status}
                  </Button>
                </Tooltip>
                {project.Github_status === "no" ? (
                  <Alert
                    severity="error"
                    className="text-light mx-3"
                    variant="outlined">
                    Not Available in Github Also
                  </Alert>
                ) : (
                  <div className="w-auto">
                    <Alert
                      severity="success"
                      className="text-light"
                      variant="outlined">
                      Available in Github <i class="fa-brands fa-github"></i>
                    </Alert>
                  </div>
                )}
                {project.Github_status === "yes" ? (
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="mx-2 my-sm-4"
                    href={project.Github_link}
                    target="_blank">
                    Check
                  </Button>
                ) : (
                  ""
                )}
              </CardActions>
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleLikeClick(index)}
                className="mx-2">
                <span
                  className="fs-6"
                  style={{ color: likedStatus[index] ? "red" : "#58FCFA" }}>
                  {likedStatus[index] ? "Liked!" : "Like My Project"}
                </span>
                <FavoriteIcon
                  sx={{
                    color: likedStatus[index] ? "red" : "var(--primary-color1)",
                  }}
                  className="mx-3"
                />
              </IconButton>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Project;
