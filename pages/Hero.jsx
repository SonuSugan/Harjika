import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Hero";
import pipwire from "./Photowire";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade Out
      setFade(false);

      // Change Image After Fade Out
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % pipwire.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div className="Hero-center">
        <div className="Hero-intro">
          <span className="span1">
            HARJIKA Wires & Cables Pvt. Ltd.
          </span>

          <span className="span3">
            Premium uPVC Conduit Pipes, Flexible Conduits, Modular Metal Boxes,
            and Electrical Accessories engineered for durability, safety, and
            performance.
          </span>

          <div className="button-cv">
            <a href="/HARJIKA CATALOGUE.pdf" download>
              <button className="button-17">
                Download Catalogue
              </button>
            </a>
          </div>
        </div>

        <div className="Hero-boy">
          <img
            id="boy"
            src={pipwire[currentImage]}
            alt="HARJIKA Products"
            className={fade ? "fade-in" : "fade-out"}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;