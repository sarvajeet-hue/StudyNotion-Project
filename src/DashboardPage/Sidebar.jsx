import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { NavLink, Route, useLocation, useNavigate } from "react-router-dom";
import { MdLibraryBooks } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationBox from "../components/common/ConfirmationBox";
import { logout } from "../services/operations/apicalls";


const sideBarData = [
  {
    icon: <CgProfile />,
    text: "My Profile",
    location: "my-profile",
  },
  {
    icon: <MdLibraryBooks />,
    text: "Enrolled Courses",
    location: "enrolled-courses",
  },

  {
    icon: <CiBookmark />,
    text: "Purchase History",
    location: "purchase-history",
  },

  {
    icon: <FaGraduationCap />,
    text: "Courses",
    location: "courses",
  },
  {
    icon: <CiSettings />,
    text: "Setting",
    location: "setting",
  },
];

const Sidebar = () => {
  const [activeIndex, setactiveindex] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.user);
  console.log("USer");

  const [popupModule, setpoppupModule] = useState(null);

  useEffect(() => {
    setactiveindex(0);

    const index = sideBarData.findIndex(
      (item) => `/dashboard/${item.location}` === location.pathname
    );

    setactiveindex(index);
  }, [location]);

  console.log(popupModule);

  return (
    <div className="flex flex-col relative overflow-y-hidden gap-[10px] border-richblack-700 bg-richblack-800 border-r-2 w-[222px] h-calc(100vh-70px) py-[30px]">
         {user.accountType === "Instructor" ? <p className="text-center">Instructor</p> : <p className="text-center">Student</p>}
      <div className="flex flex-col  w-full justify-center  py-2 ">
        {sideBarData.map((data, index) => {
          return (
            <div>
               
              <NavLink
                onClick={() => setactiveindex(index)}
                key={index}
                to={`/dashboard/${data.location}`}
                className={` w-full flex items-start 
                            
                         ${
                           activeIndex === index
                             ? "bg-yellow-500 text-richblack-700 w-full"
                             : "bg-richblack-800 text-richblack-5"
                         }`}
              >
                <div>
                  <div className="flex flex-col">
                    <div className="flex px-3 gap-4 py-2 items-center justify-center">
                      <div>{data.icon}</div>
                      <p>{data.text}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>

      <div className="w-full h-1 bg-richblack-700"></div>

      <div
        onClick={() => {
          setpoppupModule({
            title1: "Are you Sure ?",
            title2: "You will be logged out of your account.",
            btn1: "Logout",
            btn2: "Cancel",
            btn1Handler: () => dispatch(logout(navigate)),
            btn2Handler: () => setpoppupModule(null),
          });
        }}
        className={`flex pl-8 gap-4 py-2 items-center  cursor-pointer`}
      >
        <IoIosLogOut />
        <p>Logout</p>
      </div>

      {popupModule && <ConfirmationBox moduleData={popupModule} />}
    </div>
  );
};

export default Sidebar;
