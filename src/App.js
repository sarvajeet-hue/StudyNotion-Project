
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import Signup from './pages/Signup';
import Login from "../src/pages/Login"
import AboutUs from './pages/AboutUs';
import VerifyEmail from './pages/VerifyEmail';
import Dashboard from './pages/Dashboard';
import ContactUs from './pages/ContactUs';
import MyProfile from './DashboardPage/MyProfile';
import Courses from './DashboardPage/Courses';
import Setting from './DashboardPage/Setting';
import Enrolled_Courses from './DashboardPage/Courses/Enrolled_Courses';
import Purchase_history from './DashboardPage/Purchase-history/Purchase_history';

function App() {
  return (
    <div className="App w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar/>
      
    <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path= "/signup" element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/verifymail' element={<VerifyEmail/>}></Route>
        {/* <Route path='/dashboard/my-profile' element={<Dashboard/>}></Route> */}
        <Route path='/contact' element={<ContactUs/>}></Route>
        {/* <Route path='/dashboard/my-profile' element={<MyProfile/>}></Route> */}
        
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='my-profile' element ={<MyProfile/>}> </Route>
          <Route path='courses' element={<Courses/>}></Route>
          <Route path='setting' element={<Setting/>}></Route>
          <Route path='enrolled-courses' element={<Enrolled_Courses/>}></Route>
          <Route path='purchase-history' element={<Purchase_history/>}></Route>
        </Route>



      </Routes> 

    </div>
  );
}

export default App;
