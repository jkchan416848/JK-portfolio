// ImageSliderModule.jsx
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/Aboutimageslider.css";
import school from "../assets/school.jpg";
import ug from "../assets/ug.jpg";
import pg from "../assets/pg.jpg";
import coaching from "../assets/coaching.jpg"

function ImageSliderModule() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      image: school,
      title: "- Anderson Higher Secondary School -",
      description: "I don't have any idea about coding.",
    },
    {
      image: ug,
      title: "- Krishna College Of Arts And Science Kanchipuram -",
      description: "Little bit curious about how the website is actually work.",
    },
    {
      image: pg,
      title: "- Sri Sankara Arts & Science College -",
      description: "I decide to start coding & I start make the first step",
    },
    {
      image: coaching,
      title: "- Joing new institute -",
      description:
        "I'm really more intersted in frontend and Improving to learn more about design.",
    },
  ];

  return (
    <div className="slider-container">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={4500}
        fade>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="image-container">
              <img
                src={slide.image}
                alt={slide.title}
                className="responsive-image"
                loading="lazy"
              />
            </div>
            <Carousel.Caption className="custom-caption">
              <h5>{slide.title}</h5>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSliderModule;
