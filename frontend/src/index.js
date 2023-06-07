import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import ServiceCreation from './ServiceCreation/ServiceCreation.js';
import ServiceProfile from './ServiceProfile/ServiceProfile.js';
import ServiceUpdation from './ServiceUpdation/ServiceUpdation.js';
import UserNavbar from './UserNavbar/UserNavbar.js';
import Footer from './Footer/Footer.js';
import ShowService from './ShowService/ShowService.js';
import Login from './Login/login.js';
import ServiceDecider from './ServiceDecider/ServiceDecider';
import HiredService from './HiredService/HiredService';
import RequestedService from './RequestedService/RequestedService';
import Pay from './pay/Pay';
import LandingPage from './LandingPage/LandingPage';
import MainNavbar from './UserNavbar/MainNavbar';
import LoginForm  from './Login/LoginForm'
import DisplayForm from './DisplayForm/DisplayForm';
import ServiceSearch from './DisplayForm/ServiceSearch';
import AdminNavbar from './UserNavbar/AdminNavbar';
import UserSearch from './DisplayForm/UserSearch';
import NotificationForm from './DisplayForm/NotificationForm';
import Register from './Register/Register';
import Profile from './Profile/Profile';
import EditProfile from './Profile/EditProfile';
import FeedbackForm from './Review/FeedbackForm';
import Submission from './Review/Submission';
import EditReview from './Review/EditReview';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

    

    <Routes>

      <Route path="/" element={<div><MainNavbar/><LandingPage /></div>} />

      <Route path="/userlogin" element={<div><MainNavbar/><Login /></div>} />

      <Route path="/register" element={<div><MainNavbar/><Register /></div>} />

      <Route path="/profile" element={<div><UserNavbar/><Profile /></div>} />

      <Route path="/editprofile" element={<div><UserNavbar/><EditProfile /></div>} />

      <Route path="/feedbackform" element={<div><UserNavbar/><FeedbackForm /></div>} />

      <Route path="/submission" element={<div><UserNavbar/><Submission /></div>} />

      <Route path="/editreview" element={<div><UserNavbar/><EditReview /></div>} />

      <Route path="/displayform" element={<div><AdminNavbar/><DisplayForm /></div>} />

      <Route path="/adminlogin" element={<div><AdminNavbar/><LoginForm /></div>} />

      <Route path="/adminusersearch" element={<div><AdminNavbar /><UserSearch /></div>} />

      <Route path="/adminservicesearch" element={<div><AdminNavbar /><ServiceSearch /></div>} />

      <Route path="/adminnavigation" element={<div><AdminNavbar /><NotificationForm /></div>} />

      <Route path="/service/myservice" element={<div><UserNavbar /><ServiceDecider /></div>} />

      <Route path="/service/createservice" element={<div><UserNavbar /><ServiceCreation /></div>} />

      <Route path="/service/serviceprofile" element={<div><UserNavbar /><ServiceProfile /></div>} />

      <Route path="/service/hiredservice" element={<div><UserNavbar /><HiredService /></div>} />

      <Route path="/service/requestedservice" element={<div><UserNavbar /><RequestedService /></div>} />

      <Route path="/service/serviceprofileupdation" element={<div><UserNavbar /><ServiceUpdation /></div>} />

      <Route path="/service/showservice" element={<div><UserNavbar /><ShowService /></div>} />

      <Route path="/pay/:id" element={<div><UserNavbar /><Pay /></div>} />



    </Routes>

    <Footer />

    <ToastContainer />

  </BrowserRouter>

);


