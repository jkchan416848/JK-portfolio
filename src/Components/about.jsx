import "../Styles/about.css";
import RandomTextAnimation from "../ui-animation/randomtextui";
import ImageSliderModule from "../ui-animation/Aboutimageslider";
import Abutmypic1 from "../assets/Abutmypic1.jpg";
function About() {
  return (
    <>
      <div className="about_module_part1_container">
        {/* Introduction_container */}
        <div className="about_me_name1">
          <h3 className="about_me_title">Introduction</h3>
        </div>
        {/* image & intro first container */}
        <div className="about_module_part1_container_parent">
          <div className="about_module_part1_container_child">
            <div className="image-ring-wrapper">
              <div className="about_module_part1_container_child_image">
                <img src={Abutmypic1} />
              </div>
            </div>
            <div className="about_module_part1_container_child_randomtxt">
              <RandomTextAnimation />
            </div>
          </div>
          <div className="about_module_part1_container_child">
            <div className="about_module_part1_container_child_introtxt">
              {" "}
              <br />
              <h1>
                Where <span>logic</span> meets <span>imagination</span>:
                Building tomorrow's <span>solutions </span>
                with today's React components
              </h1>{" "}
              <br />
              <a href="/resume.pdf" download className="resume-button ">
                <span>
                  <i class="fa-solid fa-download"></i>
                </span>{" "}
                Resume
              </a>
            </div>
          </div>
        </div>
        {/* Studies */} <br /> <br />
        <div className="about_me_name1">
          {/* Studie image slider */}
          <h3 className="about_me_title">Studies</h3>
        </div>
        <div className="about_module_part1_container_studies">
          <div className="about_module_part1_container_studies_child">
            <ImageSliderModule />
          </div>
        </div>
        {/* futuristic project  */}
        <div className="about_me_name1">
          <h3 className="about_me_title">Futuristic project Idea </h3>
        </div>{" "}
        <br />
        <br />
        <div className="about_me_futuristic_project">
          {/* Box - 1 */}
          <div className="About_projectA" style={{ gridArea: "bx-1" }}>
            <div className="About_projectA_main">
              <div
                className="About_projectA_maincontent"
                style={{ gridArea: "bxx-1" }}>
                <h3>
                  Futuristic Instagram <span></span>
                </h3>
              </div>
              <div
                className="About_projectA_maincontent"
                style={{ gridArea: "bxx-2" }}>
                <img src="" width="100%" alt="" />
                <i
                  class="fa-brands fa-instagram fa-fade"
                  style={{ fontSize: "37px", trasition: "all 0.9s ease" }}></i>
              </div>
              <div
                className="About_projectA_maincontent"
                style={{ gridArea: "bxx-3" }}>
                <p>
                  Welcome to my Futuristic Instagram concept — a next-generation
                  social media experience built with React for a dynamic
                  frontend and Django for a powerful backend. <br />
                  AI-powered recommendations that understand your vibe, not just
                  your scroll history
                </p>
              </div>
            </div>
          </div>
          {/* Box - 2 */}
          <div className="About_projectA" style={{ gridArea: "bx-2" }}>
            <div className="About_projectA_main">
              <div
                className="About_projectA_maincontent"
                style={{ gridArea: "bxx-1" }}>
                <h3>Design to coding : 🔧 </h3>
              </div>
              <div
                className="About_projectA_maincontent"
                style={{ gridArea: "bxx-2" }}>
                <img src="" alt="" />
                <i
                  class="fa-solid fa-circle-nodes fa-fade"
                  style={{ fontSize: "37px" }}></i>
              </div>
              <div
                className="About_projectA_maincontent"
                style={{ gridArea: "bxx-3" }}>
                <p>
                  “Design to Coding” is my upcoming project aimed at bridging
                  the gap between UI/UX design and production-ready code. Built
                  with Django and React <br />
                  ⚙️ Django backend for user management and storing
                  design-to-code projects <br />
                  🖱️ Drag-and-drop UI blocks to speed up prototyping
                  <br />
                  📱 Responsive preview for different screen sizes
                </p>
              </div>
            </div>
          </div>
          {/* Box - 3 */}
          <div className="About_projectA" style={{ gridArea: "bx-3" }}>
            <div className="About_projectA_main">
              <div
                className="About_projectA_maincontent"
                style={{ gridArea: "bxx-1" }}>
                <h3>Current Doing Project</h3>
              </div>
              <div
                className="About_projectA_maincontent"
                style={{
                  gridArea: "bxx-2",
                  display: "inline-block",
                  textAlign: "center",
                }}>
                <img src="" alt="" />
                <i
                  class="fa-brands fa-python"
                  style={{ fontSize: "37px" }}></i>{" "}
                +{" "}
                <i
                  class="fa-brands fa-react fa-spin"
                  style={{ fontSize: "37px" }}></i>
              </div>{" "}
              <br />
              <div
                className="About_projectA_maincontent"
                style={{ gridArea: "bxx-3", marginTop: "2px" }}>
                {" "}
                <br />
                <h2 style={{ color: "#eeeeff", textAlign: "center" }}>
                  {" "}
                  Powerful Backend + Friendly Frontend
                </h2>{" "}
                <br />
                <p>
                  <b>
                    This upcoming project aims to combine the robust
                    data-handling power of Django with the intuitive,
                    user-friendly interface of React. The goal is to build a
                    highly scalable and secure full-stack application where
                    Django manages complex data relationships and logic in the
                    backend, while React delivers a fast, clean, and dynamic
                    user experience on the frontend.
                  </b>
                  <br />
                  📊 Advanced Database Architecture using Django ORM and
                  PostgreSQL. <br />⚡ Optimized APIs built with Django REST
                  Framework. <br />
                  🧠 Smart Filtering, Sorting & Search capabilities powered by
                  Django queries. <br /> 🖥️ Clean React Interfaces designed for
                  ease of use on desktop and mobile. <br /> 🔐 User
                  Authentication & Roles for secure access and smooth user
                  control. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
