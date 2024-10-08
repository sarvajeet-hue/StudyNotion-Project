import React from "react";

import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState , useEffect , useRef } from "react";

const Codeblocks = ({
  position,
  heading,
  subheading,
  ctabutton1,
  ctabutton2,
  codeblock,
  codeColor,

}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.2 } // Adjust as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`flex ${position} mt-[90px] max-w-[100%] my-20 justify-between flex-col lg:gap-10 gap-10`}
    >
      {/*section-1*/}

      <motion.div
        ref={ref}

        initial={{ x : -250 }}
          animate={isVisible ? { 
            
            
          x: 0 } : {}} // Trigger animation on scroll
        transition={{ type: "spring", duration: 3, stiffness: 120, delay: 0.5 }}
        className="w-[50%] text-richblack-5 flex flex-col gap-8"
      >
        {heading}

        <div className="text-richblack-300 text-base text-start font-bold w-full -mt-3">
          {subheading}
        </div>

        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabutton1.active} linkto={ctabutton1.linkto}>
            <div className="flex items-center gap-2">
              {ctabutton1.text}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabutton2.active} linkto={ctabutton2.linkto}>
            {ctabutton2.text}
          </CTAButton>
        </div>
      </motion.div>

      {/*section-2*/}
      <div className="realative flex flex-col h-fit text-[10px] p-8 text-start gap-1 w-[50%]">
        <div>{/*eclipse*/}</div>

        <div className="flex flex-row items-start gap-2 p-2  self-stretch">
          <div className="text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold  ">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
          </div>

          <div
            className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
          >
            <TypeAnimation
              sequence={[codeblock, 1000, ""]}
              
              cursor={true}
              repeat={Infinity}
              style={{
                whiteSpace: "pre-line",
                display: "block",
                
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codeblocks;
