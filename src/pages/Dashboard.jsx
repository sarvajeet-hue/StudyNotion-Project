import React from 'react'
import Outlet from '../DashboardPage/Outlet'
import Sidebar from '../DashboardPage/Sidebar'
const Dashboard = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] text-richblack-5">
    <Sidebar />
    <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
      <div className="mx-auto w-11/12 max-w-[1000px] py-10">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Dashboard
