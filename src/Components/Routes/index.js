import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from '../Landing/Landing'
import Registration from '../Admin/Company/Authentication/Registration/Registration.js'

const appRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/addCompany" element={<Registration />} />
            </Routes>
        </Router>
    )
    

}

export default appRouter
  