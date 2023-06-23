import * as React from 'react';
import { useState } from 'react';
import './Login.css';
import { ImageName } from '../../../../../enums';
import { Link, useNavigate } from 'react-router-dom';
import { ApiCall } from '../../../../../services/middleware';
import passwordToggle from '../../../../../services/password-toggle'
import  { emailValidator, passwordValidator } from '../../../../../validators'



export default function Registration() {
    let [emailError, setEmailError] = useState(true)
    let [passwordError, setPasswordError] = useState(true)
    let [isSubmit, setSubmit] = useState(false)

    const navigate = useNavigate();


    async function loginCompany() {
        if(isSubmit) {
            document.getElementsByClassName('login-loader')[0].classList.remove('hide')
            document.getElementsByClassName('login-submit-button')[0].classList.add('login-button-disabled')
            let email = document.getElementById('login-email').value;
            let password = document.getElementById('login-pass').value;
            const data = {
                email : email,
                password : password,
            }
            let login = await ApiCall("loginCompany", data);
            if(login.respCode == 1) {
                window.localStorage.setItem('userAuthentication', JSON.stringify(login.response))
                navigate('/companyDashboard')
            }
            else {
                alert("some error occured")
            }
        }
    }

    function togglePass(inputTextId, passwordShowClass, passwordHideClass) {
        passwordToggle(inputTextId, passwordShowClass, passwordHideClass)
    }

     function checkEmail() {
        let email = document.getElementById('login-email').value
        let emailValidate = emailValidator(email)
        if(emailValidate.status == false) {
            document.getElementById('login-error-email-text').innerHTML = emailValidate.message
            document.getElementsByClassName('login-email')[0].classList.add('login-error')
            document.getElementsByClassName('login-error-email')[0].classList.remove('hide')
            setEmailError(true)
        }
        else {            
            document.getElementsByClassName('login-email')[0].classList.remove('login-error')
            document.getElementsByClassName('login-error-email')[0].classList.add('hide')
            document.getElementById('login-error-email-text').innerHTML = ''
            setEmailError(false)
            if(passwordError == false) {
                setSubmit(true)
                // document.getElementById('login-submit').disabled = false
                document.getElementsByClassName('login-submit-button')[0].classList.remove('login-button-disabled')
            }
            else {
                setSubmit(false)
                // document.getElementById('login-submit').disabled = true
                document.getElementsByClassName('login-submit-button')[0].classList.add('login-button-disabled')
            }
        }
    }

    function checkPassword() {
        let password = document.getElementById('login-pass').value
        let passwordValidate = passwordValidator(password)
        if(passwordValidate.status == false) {
            document.getElementById('login-error-password-text').innerHTML = passwordValidate.message
            document.getElementsByClassName('login-password')[0].classList.add('login-error')
            document.getElementsByClassName('login-error-password')[0].classList.remove('hide')
            setPasswordError(true)
        }
        else {
            document.getElementsByClassName('login-password')[0].classList.remove('login-error')
            document.getElementsByClassName('login-error-password')[0].classList.add('hide')
            document.getElementById('login-error-password-text').innerHTML = ''
            setPasswordError(false)
            if(emailError == false) {
                setSubmit(true)
                // document.getElementById('login-submit').disabled= false
                document.getElementsByClassName('login-submit-button')[0].classList.remove('login-button-disabled')
            }
            else {
                setSubmit(false)
                // document.getElementById('login-submit').disabled = true
                document.getElementsByClassName('login-submit-button')[0].classList.add('login-button-disabled')
            }
        }
    }

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
                                            <img src={ImageName.IMAGE_NAME.emailimage} className='input-icon' />
                                            <input 
                                                type="text"
                                                id="login-email"
                                                className="login-email" 
                                                placeholder="Enter Organization email" 
                                                onChange={checkEmail} 
                                            />
                                        </div>
                                        <div className='login-error-message login-error-email hide'>
                                            <span id="login-error-email-text"></span>
                                        </div>
                                        <div class="input-box">
                                        <img src={ImageName.IMAGE_NAME.padlock} className='input-icon' />
                                            <input 
                                                type="password" 
                                                id="login-pass" 
                                                className='login-password'
                                                placeholder="Enter password" 
                                                onChange={checkPassword} 
                                            />
                                            <img src={ImageName.IMAGE_NAME.passHide} className='login-pass-show input-icon clickable ' onClick={() => togglePass('login-pass', 'login-pass-show', 'login-pass-hide')} />
                                            <img onClick={() => togglePass('login-pass', 'login-pass-show', 'login-pass-hide')} src={ImageName.IMAGE_NAME.passShow} className='login-pass-hide input-icon hide clickable' />
                                        </div>
                                        <div className='login-error-message login-error-password hide'>
                                            <span id="login-error-password-text"></span>
                                        </div>
                                        <div class="text">
                                            <a href="#">Forgot password?</a>
                                        </div>
                                        <div>
                                            <button className="login-submit-button button input-box login-button-disabled" onClick={loginCompany} id="login-submit" > 
                                                <span className='button-text'>Submit</span>
                                                <img 
                                                    src={ImageName.IMAGE_NAME.submitLoader} className='login-loader input-icon hide' />
                                            </button>
                                        </div>
                                        <div class="text sign-up-text">Don't have an account? <Link to='/addCompany'>Sigup now</Link></div>
                                    </div>
                            </div>
                    </div>
                </div>
            </div>
        </body>
  );
  }