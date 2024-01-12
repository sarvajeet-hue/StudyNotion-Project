import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Logo/Logo-Full-Light.png'


import { NavbarLinks } from '../../data/navbar-links'
import { Link, useLocation } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import axios, { Axios } from 'axios';



const Navbar = () => {
    //here we can use matchPath function in react router dom also
    const location = useLocation();
    const [loggedIn , setLoggedIn] = useState(false)
    const [catalogData , setCatalogData] = useState(null)
    console.log(catalogData);

    async function fetchCategoriesData(){
        try{
            const result = await axios.get("http://localhost:4000/api/v1/course/showallcategories")
            console.log(result)
            setCatalogData(result.data)
        }
        catch(error){

        }
    }
    useEffect(() => {
        fetchCategoriesData();
    } ,[])
    

  return (
    <div className='flex justify-center items-center py-3 px-[120px]  border-b-2 border-richblack-700'>

        <div className='flex items-center justify-between w-full gap-8 bg-richblack-900'>
            {/* logo-part */}
            <Link to={"/"}>
            <img src={Logo} alt="" />
            </Link>

            {/* links-parts */}
            <div className='flex justify-center items-center text-richblack-5'>
                {
                    NavbarLinks.map((link , index) => {
                        return (
                            <div key={index} className={` ${link.path === location.pathname ? "text-yellow-200" : "text-richblack-5"} py-[4px] px-3`}>
                                {
                                    link.title === "Catalog" ? (<div className='flex justify-center items-center relative group'>
                                        <p>{link.title}</p>
                                        <IoIosArrowDown/>
                                        <div className='invisible opacity-0 z-[1000] flex absolute top-[70%] left-[10%] flex-col p-4 rounded-md bg-richblack-5 text-richblack-700 transition-all duration-200
                                         group-hover:visible w-[200px] h-[100px] group-hover:opacity-100 -translate-x-10 translate-y-4 hover:visible group'>

                                            <div className='bg-richblack-5 w-6 h-6 absolute left-[50%] -translate-y-2 -translate-x-3 rotate-45  rounded-md top-0'></div>
                                                {
                                                   catalogData ? (<div className='flex flex-col p-3 items-start  hover:visible'>
                                                   { catalogData.allCategories.map((names , index) =>{
                                                    return <Link key={index} to={"/python"}> {names.name}</Link>
                                                   })}
                                                   </div>) : (<div>Loading</div>)
                                                }
                                        </div>
                                    </div>) : (
                                        <Link to={link.path}>{link.title}</Link>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>

                {/* profile-part */}
            
              {
                  loggedIn ? (
                      <div className='flex justify-end items-center gap-5 text-richblack-5'>
                          <CiSearch className='w-[20px] h-[20px]' />
                          <AiOutlineShoppingCart className='w-[20px] h-[20px]' />
                          <CgProfile className='w-[20px] h-[20px]' />
                      </div>
                  ) :
                      (<div className='flex justify-center items-center gap-4 text-richblack-5'>
                            <Link to={"/login"}>
                                <button>Login</button>
                            </Link>
                            <Link to={"/signup"}>
                                <button>Signup</button>
                            </Link>
                      </div>)
              }
        </div>
      
    </div>
  )
}

export default Navbar
