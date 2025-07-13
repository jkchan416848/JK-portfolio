import "../Styles/contact.css";
import ContactmotiveTextAnimation from "../ui-animation/contactmotivetext.jsx";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";
import "../App.css";
import UserForm from "../Components/usermsg.jsx";

function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showc");
        } else {
          entry.target.classList.remove("showc");
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
    <div>
      <div className="sub_main_contact_page">
        <h2 style={{ textAlign: "center" }}>
          {" "}
          <span style={{ color: "var(--primary-color1)" }}>G</span>et in
          touch...
        </h2>
      </div>
      <div className="main-icon-contact-container">
        <ul className="icon-about">
          <li className="hidded">
            <a href="https://t.me/jkchan416" target="_blank" rel="noreferrer">
              <SocialIcon
                url="https://www.telegram.com"
                style={{ height: 60, width: 60 }}
                className="social-icon"
                target={"_blank"}
              />
            </a>
            <span>Telegram</span>
          </li>
          <li className="hidded">
            <a
              href="https://www.instagram.com/jaya_kumar_chan/profilecard/?igsh=MWYzajdhNWloM2xueQ=="
              target="_blank"
              rel="noreferrer">
              <SocialIcon
                url="https://www.instagram.com"
                style={{ height: 60, width: 60 }}
                className="social-icon"
              />
            </a>
            <span>Instagram</span>
          </li>
          <li className=" hidded">
            <a
              href="https://x.com/jkfriendchan416?t=y5vu0ihxJoydqfILdCjG-Q&s=08"
              target="_blank"
              rel="noreferrer">
              <SocialIcon
                url="https://www.x.com"
                style={{ height: 60, width: 60 }}
                className="social-icon"
              />
            </a>
            <span>X</span>
          </li>
          <li className="hidded">
            <a
              href="https://www.linkedin.com/in/jaya-kumar-v-9841a7295"
              target="_blank"
              rel="noreferrer">
              <SocialIcon
                url="https://www.linkedin.com"
                style={{ height: 60, width: 60 }}
                className="social-icon"
              />
            </a>
            <span>LinkedIn</span>
          </li>
          <li className="hidded">
            <a
              href="https://github.com/jkchan416848"
              target="_blank"
              rel="noreferrer">
              <SocialIcon
                url="https://www.github.com"
                style={{ height: 60, width: 60 }}
                className="social-icon "
              />
            </a>
            <span>GitHub</span>
          </li>
          <li className="hidded">
            <a
              href="https://www.facebook.com/profile.php?id=100012521499740"
              target="_blank"
              rel="noreferrer">
              <SocialIcon
                url="https://www.facebook.com"
                style={{ height: 60, width: 60 }}
                className="social-icon "
              />
            </a>
            <span>Facebook</span>
          </li>
        </ul>
      </div>{" "}
      <br /> <br />
      <div className="About_module_motive_txt">
        <h6>
          Patience is the most powerfull, <br /> you just -{" "}
          <span className="fw-light">
            {" "}
            <ContactmotiveTextAnimation />{" "}
          </span>
        </h6>
      </div>{" "}
      <br />
      <div className="Usermsg_module_container">
        <UserForm />
      </div>
    </div>
  );
}

export default Contact;
