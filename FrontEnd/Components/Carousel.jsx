import React, { useState, useEffect } from "react";
import HomeContainer from "./HomeContainer";
import "./css/Carousel.css";

import SampleImage from "../src/assets/work.jpg";

const Carousel = ({ setHovered }) => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Hair Styling",
      description: "Professional hair styling services.",
    },
    {
      id: 2,
      title: "Beard Grooming",
      description: "Get the perfect beard style.",
    },
    {
      id: 3,
      title: "Facial Treatment",
      description: "Relaxing facial care services.",
    },
    {
      id: 4,
      title: "Hair Coloring",
      description: "Premium hair coloring options.",
    },
  ];

  const total = cards.length;

  /* ===== Auto Slide ===== */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [total]);

  /* ===== Next ===== */
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  /* ===== Prev ===== */
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? total - 1 : prev - 1
    );
  };

  return (
    <div className="carousel-wrapper">

      {/* Left */}
      <button className="carousel-btn left" onClick={prevSlide}>
        ❮
      </button>

      {/* Track */}
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {cards.map((card) => (
          <div key={card.id} className="carousel-item">
            <HomeContainer
              image={SampleImage}
              title={card.title}
              description={card.description}
              buttonText="Book Now"
              setHovered={setHovered}
            />
          </div>
        ))}
      </div>

      {/* Right */}
      <button className="carousel-btn right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;



