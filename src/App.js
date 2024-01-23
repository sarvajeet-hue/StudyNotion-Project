
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
import MyProfile from './pages/MyProfile';

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
        <Route path='/dashboard/my-profile' element={<MyProfile/>}></Route>



      </Routes> 

    </div>
  );
}

export default App;
