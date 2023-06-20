import * as React from 'react';
import './Registration.css';
import { ImageName } from '../../../../../enums';
import { Link } from 'react-router-dom';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Registration() {
  return (
        <body className='registrationBody'>
            <div class="registrationContainer">
                {/* <input type="checkbox" id="flip" /> */}
                    <div class="cover">
                        <div class="front">
                            <img class="frontImg" src={ImageName.IMAGE_NAME.registrationFront} alt="" />
                            <div class="text">
                                <span class="text-1">Complete miles of journey <br /> with one step</span>
                                <span class="text-2">Let's get started</span>
                            </div>
                        </div>
                    </div>
                    <div class="forms">
                        <div class="form-content">    
                            <div class="signup-form">
                                <div class="title">Signup</div>
                                    <div class="input-boxes">
                                        <div class="input-box">
                                            <i class="fas fa-user"></i>
                                            <input type="text" placeholder="Enter Organization name" required />
                                        </div>
                                        <div class="input-box">
                                            <i class="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter Organization email" required />
                                        </div>
                                        <div class="input-box">
                                            <i class="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter Contact No" required />
                                        </div>
                                        <div class="input-box">
                                            <i class="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter password" required />
                                        </div>
                                        <div class="input-box">
                                            <i class="fas fa-lock"></i>
                                            <input type="password" placeholder="Re-Enter password" required />
                                        </div>
                                        <button class="button input-box"> Submit
                                            {/* <input type="submit" value="Sumbit" /> */}
                                        </button>
                                        <div class="text sign-up-text">Already have an account? <Link to ='/loginCompany' for="flip">Login now</Link></div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </body>
  );
}