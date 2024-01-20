import react from 'react'

const Sidebar = () => {
    return(
        <div className='flex flex-col overflow-y-hidden gap-[10px] border-richblack-700 bg-richblack-800 border-r-2 w-[222px] h-[100vh] py-[30px]'>
            <div className='flex flex-col items-start '>
                <div className='flex bg-yellow-800 items-center justify-center border-l-2 border-yellow-50 px-[24px] py-[8px] w-full'>My Profile </div>
                <div></div>
                <div></div>
                <div></div>

            </div>
        </div>
     //     <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
    //     <div className="flex flex-col">
    //       {sidebarLinks.map((link) => {
    //         if (link.type && user?.accountType !== link.type) return null
    //         return (
    //           <SidebarLink key={link.id} link={link} iconName={link.icon} />
    //         )
    //       })}
    //     </div>
    //     <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
    //     <div className="flex flex-col">
    //       <SidebarLink
    //         link={{ name: "Settings", path: "/dashboard/settings" }}
    //         iconName="VscSettingsGear"
    //       />
    //       <button
    //         onClick={() =>
    //           setConfirmationModal({
    //             text1: "Are you sure?",
    //             text2: "You will be logged out of your account.",
    //             btn1Text: "Logout",
    //             btn2Text: "Cancel",
    //             btn1Handler: () => dispatch(logout(navigate)),
    //             btn2Handler: () => setConfirmationModal(null),
    //           })
    //         }
    //         className="px-8 py-2 text-sm font-medium text-richblack-300"
    //       >
    //         <div className="flex items-center gap-x-2">
    //           <VscSignOut className="text-lg" />
    //           <span>Logout</span>
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    )
}

export default Sidebar;