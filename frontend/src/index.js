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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

    

    <Routes>

      <Route path="/" element={<div><Login /></div>} />

      <Route path="/service/myservice" element={<div><UserNavbar /><ServiceDecider /></div>} />

      <Route path="/service/createservice" element={<div><UserNavbar /><ServiceCreation /></div>} />

      <Route path="/service/serviceprofile" element={<div><UserNavbar /><ServiceProfile /></div>} />

      <Route path="/service/serviceprofileupdation" element={<div><UserNavbar /><ServiceUpdation /></div>} />

      <Route path="/service/showservice" element={<div><UserNavbar /><ShowService /></div>} />

    </Routes>

    <Footer />

    <ToastContainer />

  </BrowserRouter>

);


