import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../components/core/Homepage/CTAButton";
import videoFile from "../assets/Images/banner.mp4";
import Codeblocks from "../components/core/Homepage/Codeblocks";
import HighlightText from "../components/core/Homepage/HighlightText";

import TimelineSection from "../components/core/Homepage/TimelineSection";
import LearningLanguage from "../components/core/Homepage/LearningLanguage";
import InstructorSection from "../components/core/Homepage/InstructorSection";
import ReviewSection from "../components/core/Homepage/ReviewSection";
import ExploreMore from "../components/core/Homepage/ExploreMore";
import Footer from "../components/common/Footer";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Home = () => {
  const {token} = useSelector((state) => state.auth)
  
  return (
    <div>
      {/*section- 1*/}

      <div className="relative mx-auto flex flex-col w-11/12 items-center justify-between max-w-maxContent">
        <div className="w-[913px] h-[276px] flex flex-col items-center justify-between  text-white gap-[38px] mt-[124px] ">

          
          <Link to={"/signup"}>
            <div className=" group flex p-1 gap-1 items-start border rounded-[500px] bg-richblack-800 ">
              <div
                className="flex justify-center items-center py-[6px] px-[18px] gap-[10px] border rounded-[100px] font-medium
                        group-hover:bg-richblack-900 "
              >
                <p className="  text-richblack-200 text-base text-center leading-6">
                  Become an instructor
                </p>
                <FaArrowRight className="w-[16px] h-[16px]" />
              </div>
            </div>
          </Link>
          {/*text Part*/}
          <div className=" flex max-w-[913px] flex-col gap-[16px] text-richblack-5 text-center ">
            <h1 className=" font-semibold text-3xl flex items-center justify-center gap-2 ">
              Empower Your Future With{" "}
              <HighlightText text={"Coding Skills"}></HighlightText>
            </h1>

            <p className=" font-medium self-stretch">
              With our online coding courses, you can learn at your own pace,
              from anywhere in the world, and get access to a wealth of
              resources, including hands-on projects, quizzes, and personalized
              feedback from instructors.
            </p>
          </div>

          {/*button Part*/}
          <div className="flex items-start gap-[24px] ">
            <CTAButton active={true} linkto={"/signup"}>
              Learn More
            </CTAButton>
            <CTAButton active={false} linkto={"/login"}>
              Book a Demo
            </CTAButton>
          </div>
        </div>

        {/*video Part*/}
        <div className=" flex flex-shrink-0 mt-[100px] bg-richblack-900 shadow-blue-200">
          <motion.video
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 3,
              type: "spring",
              stiffness: 120,
            }}
            className=" w-[1035px] h-[515px]"
            src={videoFile}
            autoPlay
            muted
            loop
          ></motion.video>
        </div>

        {/*coding Part*/}
        <div>
          <Codeblocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold text-start">
                Unlock your
                <HighlightText text={"Coding potential"} />
                with our online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabutton1={{
              text: "Try it your self",
              active: true,
              linkto: "/signup",
            }}
            ctabutton2={{
              text: "Learn More",
              active: false,
              linkto: "/login",
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n <head>\n <title>This is myPage</title>\n</head>\n <body>\n<h1><a href="/">Header</a></h1>\n <nav>\n <a href="/one">One</a> \n <a href="/two">Two</a> \n <a href="/three">Three</a>\n </nav> </body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          ></Codeblocks>
        </div>

        {/*coding Part reverse*/}
        <div className="w-full h-full">
          <Codeblocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold text-start">
                Start
                <HighlightText text={"Coding in Seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabutton1={{
              text: "Continue Lesson",
              active: true,
              linkto: "/signup",
            }}
            ctabutton2={{
              text: "Learn More",
              active: false,
              linkto: "/login",
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n <head>\n <title>This is myPage</title>\n</head>\n <body>\n<h1><a href="/">Header</a></h1>\n <nav>\n <a href="/one">One</a> \n <a href="/two">Two</a> \n <a href="/three">Three</a>\n </nav> </body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          ></Codeblocks>
        </div>
      </div>

      {/*section- 2*/}

      <ExploreMore />

      <div className="homepage_image bg-richblack-5 h-[320px] flex items-center justify-center">
        <div className="flex items-center justify-center gap-6">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex justify-center items-center gap-2">
              Explore Full Catalog
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={false} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>
      </div>

      <TimelineSection />

      <LearningLanguage />

      {/* section -3 */}

      <InstructorSection />

      <ReviewSection />

      <Footer />
    </div>
  );
};

export default Home;
