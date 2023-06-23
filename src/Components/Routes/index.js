import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from '../Landing/Landing'
import Registration from '../Admin/Company/Authentication/Registration/Registration'
import Login from '../Admin/Company/Authentication/Login/Login'
import Verification from "../Admin/Company/Authentication/Verification/Verification";
import Home from "../Admin/Company/Dashboard/Body/Home/Home";
import Employee from "../Admin/Company/Dashboard/Body/Employee/Employee"


const appRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/addCompany" element={<Registration />} />
                <Route path="/loginCompany" element={<Login />} />
                <Route path="/verificationCompany" element={<Verification />} />
                <Route path="/companyDashboard" element={<Home />} />
                <Route path="/employeeManagement" element={<Employee />} />
            </Routes>
        </Router>
    )
    

}

export default appRouter
  