import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from '../Landing/Landing'
import Registration from '../Admin/Company/Authentication/Registration/Registration'
import Login from '../Admin/Company/Authentication/Login/Login'

const appRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/addCompany" element={<Registration />} />
                <Route path="/loginCompany" element={<Login />} />
            </Routes>
        </Router>
    )
    

}

export default appRouter
  