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
                                            <img src={ImageName.IMAGE_NAME.userNameImage} className='input-icon' />
                                            <input type="text" placeholder="Enter Organization name" required />
                                        </div>
                                        <div className="input-box">
                                            <img src={ImageName.IMAGE_NAME.emailimage} className='input-icon' />
                                            <input type="text" placeholder="Enter Organization email" required />
                                        </div>
                                        <div className="input-box">
                                            <img src={ImageName.IMAGE_NAME.phoneImage} className='input-icon' />
                                            <input type="text" placeholder="Enter Contact No" required />
                                        </div>
                                        <div className="input-box">
                                            <img src={ImageName.IMAGE_NAME.padlock} className='input-icon' />
                                            <input type="password" placeholder="Enter password" required />
                                            <img src={ImageName.IMAGE_NAME.passHide} className='input-icon' />
                                            <img src={ImageName.IMAGE_NAME.passShow} className='input-icon hide' />
                                        </div>
                                        <div className="input-box">
                                            <img src={ImageName.IMAGE_NAME.padlock} className='input-icon' />
                                            <input type="password" placeholder="Re-Enter password" required />
                                            <img src={ImageName.IMAGE_NAME.passHide} className='input-icon' />
                                            <img src={ImageName.IMAGE_NAME.passShow} className='input-icon hide' />
                                        </div>
                                        <div>
                                            <button className="button input-box" onClick={addCompany}> 
                                                <span className='button-text'>Submit</span>
                                                <img src={ImageName.IMAGE_NAME.submitLoader} className='input-icon hide' />
                                            </button>
                                        </div>
                                        <center><span className='text sign-up-text'>or use the any of the following options</span></center>
                                        <div className='social-login'>
                                            <img src={ImageName.IMAGE_NAME.google} className='social-login-icon' />
                                            <img src={ImageName.IMAGE_NAME.teams} className='social-login-icon' />
                                            <img src={ImageName.IMAGE_NAME.slack} className='social-login-icon' />
                                        </div>

                                        <div className="text sign-up-text">Already have an account? <Link to ='/loginCompany' >Login now</Link></div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </body>
  );
}