import * as React from 'react';
import './Registration.css';
import { ImageName } from '../../../../../enums';
import { Link } from 'react-router-dom';
import { ApiCall } from '../../../../../services/middleware';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Registration() {
    function addCompany() {
        const data = {}
        let res = ApiCall("addCompany", data);
    }
  return (
        <body className='registrationBody'>
            <div className="registrationContainer">
                {/* <input type="checkbox" id="flip" /> */}
                    <div className="cover">
                        <div className="front">
                            <img className="frontImg" src={ImageName.IMAGE_NAME.registrationFront} alt="" />
                            <div className="text">
                                <span className="text-1">Complete miles of journey <br /> with one step</span>
                                <span className="text-2">Let's get started</span>
                            </div>
                        </div>
                    </div>
                    <div className="forms">
                        <div className="form-content">    
                            <div className="signup-form">
                                <div className="title">Signup</div>
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-user"></i>
                                            <input type="text" placeholder="Enter Organization name" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter Organization email" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter Contact No" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter password" required />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Re-Enter password" required />
                                        </div>
                                        <button className="button input-box" onClick={addCompany}> Submit
                                            {/* <input type="submit" value="Sumbit" /> */}
                                        </button>
                                        <div className="text sign-up-text">Already have an account? <Link to ='/loginCompany' >Login now</Link></div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </body>
  );
}