import * as React from 'react';
import './Login.css';
import { ImageName } from '../../../../../enums';
import { Link } from 'react-router-dom';


export default function Registration() {
  return (
        <body className='registrationBody'>
            <div class="registrationContainer">
                    <div class="cover">
                        <div class="front">
                            <img class="backImg" src={ImageName.IMAGE_NAME.registrationFront} alt="" />
                            <div class="text">
                                <span class="text-1">Complete miles of journey <br /> with one step</span>
                                <span class="text-2">Let's get started</span>
                            </div>
                        </div>
                    </div>
                    <div class="forms">
                        <div class="form-content">
                            <div class="login-form">
                                <div class="title">Login</div>
                                    <div class="input-boxes">
                                        <div class="input-box">
                                            <i class="fas fa-envelope"></i>
                                            <input type="text" placeholder="Enter your email" required /> 
                                        </div>
                                        <div class="input-box">
                                            <i class="fas fa-lock"></i>
                                            <input type="password" placeholder="Enter your password" required /> 
                                        </div>
                                        <div class="text">
                                            <a href="#">Forgot password?</a>
                                        </div>
                                        <button class="button input-box"> Submit
                                            {/* <input type="submit" value="Sumbit" /> */}
                                        </button>
                                        <div class="text sign-up-text">Don't have an account? <Link to='/addCompany'>Sigup now</Link></div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </body>
  );
}