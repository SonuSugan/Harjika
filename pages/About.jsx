import React from 'react';
import Wrapper from '../assets/wrappers/About';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0 }); // Trigger when 10% of the component is in view

  return (
    <Wrapper>
      <div className="About-center">
        <div className="About-intro">
          <span className="span1">
            About <span className="span2">HARJIKA </span>
          </span>
          <span className="span3">
          HARJIKA Wires & Cables Pvt. Ltd. is committed to delivering high-quality electrical conduit systems and accessories that ensure safety, reliability, and long-lasting performance. With a focus on innovation, quality manufacturing, and customer satisfaction, we provide trusted solutions for residential, commercial, and industrial electrical installations.
          </span>
        </div>
        <div className="About-froend">
          <img 
            ref={ref} 
            className={inView ? 'animate-in' : 'animate-out'} 
            src="/about.png" 
            alt="MERN Stack" 
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
