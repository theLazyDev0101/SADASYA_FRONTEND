import * as React from 'react'
import { useState, useEffect } from 'react';
import './Header.css'
import { ImageName } from '../../../../../enums';
import { Link, useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate();
    function signout () {
        window.localStorage.removeItem('userAuthentication')
        navigate("/")
    }
    useEffect(() => {
        let userDetails = JSON.parse(window.localStorage.getItem('userAuthentication'));
        console.log(userDetails)
        if(userDetails) {
            document.getElementById('companyName').innerHTML = userDetails[0]['name']
        }
    })
    return (
            <div className="sidebar open">
                <div className="logo-details">
                    <i className="bx bxl-c-plus-plus icon"></i>
                    <div className="logo_name" id="companyName" ></div>
                    <i className="bx bx-menu" id="btn"></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <i className="bx bx-search"></i>
                        <input type="text" placeholder="Search..." />
                        <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <a href="#">
                            <img className="bx bxl-c-plus-plus icon" src={ImageName.IMAGE_NAME.home} />
                            <span className="links_name">Home</span>
                        </a>
                        <span className="tooltip">Home</span>
                    </li>
                    <li>
                        <a href="#">
                            <img className="bx bxl-c-plus-plus icon" src={ImageName.IMAGE_NAME.employee} />
                            <span className="links_name">Employee</span>
                        </a>
                        <span className="tooltip">Employee</span>
                    </li>
                    <li>
                        <a href="#">
                            <img className="bx bxl-c-plus-plus icon" src={ImageName.IMAGE_NAME.leave} />
                            <span className="links_name">Leaves</span>
                        </a>
                        <span className="tooltip">Leave Management</span>
                    </li>
                    <li>
                        <a href="#">
                            <img className="bx bxl-c-plus-plus icon" src={ImageName.IMAGE_NAME.projects} />
                            <span className="links_name">Projects</span>
                        </a>
                        <span className="tooltip">Projects</span>
                    </li>
                    <li>
                        <a onClick={signout}>
                            <img className="bx bxl-c-plus-plus icon" src={ImageName.IMAGE_NAME.logout} />
                            <span className="links_name">Sign Out</span>
                        </a>
                        <span className="tooltip">Sign Out</span>
                    </li>
                    <li className="profile">
                        <div className="profile-details">
                            <img src="profile.jpg" alt="profileImg" />
                            <div className="name_job">
                            <div className="name">Prem Shahi</div>
                            <div className="job">Web designer</div>
                            </div>
                        </div>
                        <i className="bx bx-log-out" id="log_out"></i>
                    </li>
                </ul>
            </div>

    )
}

export default Header