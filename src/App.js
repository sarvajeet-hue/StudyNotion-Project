import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Signup from "./pages/Signup";
import Login from "../src/pages/Login";
import AboutUs from "./pages/AboutUs";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./DashboardPage/MyProfile";
import Courses from "./DashboardPage/Courses";
import Setting from "./DashboardPage/setting/Setting";
import Enrolled_Courses from "./DashboardPage/Courses/Enrolled_Courses";
import Purchase_history from "./DashboardPage/Purchase-history/Purchase_history";
import { CourseCreate } from "./DashboardPage/CreateCourses/CourseCreate";

const FirstLoadAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }} // Animation lasts 1.5 seconds
      className="w-screen h-screen flex items-center justify-center bg-white"
    >
      <motion.div
        alt="Instructor"
        className="w-1/2 h-auto flex items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 3 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-black font-bold text-[40px] font-inter">
            StudyNotion
          </h1>
          <h1 className=" font-bold text-[40px] font-inter text-blue-300">
            Made by Sarvajeet
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [showHomePage, setShowHomePage] = useState(false);
  console.log("localstorage:", localStorage);

  useEffect(() => {
    const isAnimationShown = localStorage.getItem("isAnimationShown");

    if (!isAnimationShown) {
      // Show animation for the first time
      localStorage.setItem("isAnimationShown", "true");
      console.log("inside the condition:", isAnimationShown);
      // Wait for 5 seconds before showing the home page
      // 5 second delay
    } else {
      // Skip animation if already shown
      setTimeout(() => {
        setIsFirstLoad(false); // Hide the animation
        setShowHomePage(true); // Show the home page
      }, 2000);
    }
  }, []);

  return (
    <>
      <AnimatePresence>{isFirstLoad && <FirstLoadAnimation />}</AnimatePresence>

      {showHomePage && (
        <div className="App w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/verifymail" element={<VerifyEmail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="my-profile" element={<MyProfile />} />
              <Route path="courses" element={<Courses />}>
                <Route path="createCourses" element={<CourseCreate />} />
              </Route>
              <Route path="setting" element={<Setting />} />
              <Route path="enrolled-courses" element={<Enrolled_Courses />} />
              <Route path="purchase-history" element={<Purchase_history />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
