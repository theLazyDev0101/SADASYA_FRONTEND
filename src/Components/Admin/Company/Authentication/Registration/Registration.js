import * as React from 'react';
import { useState, useEffect } from 'react';
import './Registration.css';
import { ImageName } from '../../../../../enums';
import GoogleSignInComponent from '../../../../../enums/external-links';
import { Link, useNavigate } from 'react-router-dom';
import { ApiCall } from '../../../../../services/middleware';
import passwordToggle from '../../../../../services/password-toggle'
import  { emailValidator, phoneValidator, passwordValidator } from '../../../../../validators'
import { type } from '@testing-library/user-event/dist/type';
// import  useHistory } from 'react-router-dom';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Registration() {
    useEffect(() => {
        const handleResponse = (response) => {
            console.log('reposnse', response)
        }
        const google = window.google;
        google.accounts.id.initialize({
            client_id: "576091183163-uu7qqabsholbklqcbc7rl2ips7l20b4d.apps.googleusercontent.com",
            callback: handleResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { type: "icon", size: "large", shape : 'circle', width: 1000 }  
        );
        // google.accounts.id.prompt();
        
      }, []);

    let [emailError, setEmailError] = useState(true)
    let [phoneError, setPhoneError] = useState(true)
    let [passwordError, setPasswordError] = useState(true)
    let [repasswordError, setRepasswordError] = useState(true)
    let [isSubmit, setSubmit] = useState(false)

    const navigate = useNavigate();

    async function registerCompany() {
        if(isSubmit) {
            document.getElementsByClassName('reg-loader')[0].classList.remove('hide')
            document.getElementsByClassName('reg-submit-button')[0].classList.add('reg-button-disabled')
            let organizationName = document.getElementById('reg-name').value;
            let organizationEmail = document.getElementById('reg-email').value;
            let phoneNumber = document.getElementById('reg-phone').value;
            let password = document.getElementById('reg-pass').value;
            const data = {
                organizationName : organizationName,
                organizationEmail : organizationEmail,
                phoneNumber : phoneNumber,
                password : password,
            }
            let res = await ApiCall("addCompany", data);
            if(res.respCode == 200) {
                let storedData = {
                    'userId'    : res.response.userId,
                    'email'     : res.response.email,
                    'password'  : password
                }
                window.localStorage.setItem('userDetails', JSON.stringify(storedData));                
                navigate('/verificationCompany');
            }
            else {
                alert("some error occured")
            }
        }
        
    }
    function togglePass(inputTextId, passwordShowClass, passwordHideClass) {
        passwordToggle(inputTextId, passwordShowClass, passwordHideClass)
    }
    async function checkEmail() {
        let email = document.getElementById('reg-email').value
        let emailValidate = emailValidator(email)
        if(emailValidate.status == false) {
            document.getElementById('reg-error-email-text').innerHTML = emailValidate.message
            document.getElementsByClassName('reg-email')[0].classList.add('reg-error')
            document.getElementsByClassName('reg-error-email')[0].classList.remove('hide')
            setEmailError(true)
        }
        else {
            let checkEmailExist = await ApiCall("checkEmail", {email : email});
            if(checkEmailExist.status == 500) {
                document.getElementById('reg-error-email-text').innerHTML = 'Email Id is already in use'
                document.getElementsByClassName('reg-email')[0].classList.add('reg-error')
                document.getElementsByClassName('reg-error-email')[0].classList.remove('hide')
                setEmailError(true)
            }
            else {
                document.getElementsByClassName('reg-email')[0].classList.remove('reg-error')
                document.getElementsByClassName('reg-error-email')[0].classList.add('hide')
                document.getElementById('reg-error-email-text').innerHTML = ''
                setEmailError(false)
            }
            if(phoneError == false && passwordError == false && repasswordError == false) {
                setSubmit(true)
                // document.getElementById('reg-submit').disabled = false
                document.getElementsByClassName('reg-submit-button')[0].classList.remove('reg-button-disabled')
            }
            else {
                setSubmit(false)
                // document.getElementById('reg-submit').disabled = true
                document.getElementsByClassName('reg-submit-button')[0].classList.add('reg-button-disabled')
            }
        }
    }
    function checkPhone() {
        let phone = document.getElementById('reg-phone').value
        let phoneValidate = phoneValidator(phone)
        if(phoneValidate.status == false) {
            document.getElementById('reg-error-phone-text').innerHTML = phoneValidate.message
            document.getElementsByClassName('reg-phone')[0].classList.add('reg-error')
            document.getElementsByClassName('reg-error-phone')[0].classList.remove('hide')
            setPhoneError(true)
        }
        else {
            document.getElementsByClassName('reg-phone')[0].classList.remove('reg-error')
            document.getElementsByClassName('reg-error-phone')[0].classList.add('hide')
            document.getElementById('reg-error-phone-text').innerHTML = ''
            setPhoneError(false)
            if(emailError == false && passwordError == false && repasswordError == false) {
                setSubmit(true)
                // document.getElementById('reg-submit').disabled = false
                document.getElementsByClassName('reg-submit-button')[0].classList.remove('reg-button-disabled')
            }
            else {
                setSubmit(false)
                // document.getElementById('reg-submit').disabled = true
                document.getElementsByClassName('reg-submit-button')[0].classList.add('reg-button-disabled')
            }
        }
    }

    function checkPassword() {
        let password = document.getElementById('reg-pass').value
        let passwordValidate = passwordValidator(password)
        if(passwordValidate.status == false) {
            document.getElementById('reg-error-password-text').innerHTML = passwordValidate.message
            document.getElementsByClassName('reg-password')[0].classList.add('reg-error')
            document.getElementsByClassName('reg-error-password')[0].classList.remove('hide')
            setPasswordError(true)
        }
        else {
            document.getElementsByClassName('reg-password')[0].classList.remove('reg-error')
            document.getElementsByClassName('reg-error-password')[0].classList.add('hide')
            document.getElementById('reg-error-password-text').innerHTML = ''
            setPasswordError(false)
            if(emailError == false && phoneError == false && repasswordError == false) {
                setSubmit(true)
                // document.getElementById('reg-submit').disabled= false
                document.getElementsByClassName('reg-submit-button')[0].classList.remove('reg-button-disabled')
            }
            else {
                setSubmit(false)
                // document.getElementById('reg-submit').disabled = true
                document.getElementsByClassName('reg-submit-button')[0].classList.add('reg-button-disabled')
            }
        }
    }

    function checkRePassword() {
        let repassword  = document.getElementById('reg-repass').value
        let password    = document.getElementById('reg-pass').value
        if(password != repassword) {
            document.getElementById('reg-error-repassword-text').innerHTML = "Both Password doesn't match"
            document.getElementsByClassName('reg-repassword')[0].classList.add('reg-error')
            document.getElementsByClassName('reg-error-repassword')[0].classList.remove('hide')
            setRepasswordError(true)
        }
        else {
            document.getElementsByClassName('reg-repassword')[0].classList.remove('reg-error')
            document.getElementsByClassName('reg-error-repassword')[0].classList.add('hide')
            document.getElementById('reg-error-repassword-text').innerHTML = ''
            setRepasswordError(false)
            console.log('emailError', emailError)
            console.log('phoneError', phoneError)
            console.log('passwordError', passwordError)
            console.log('repasswordError', repasswordError)
            if(emailError == false && phoneError == false && passwordError == false ) {
                setSubmit(true)
                // document.getElementById('reg-submit').disabled = false
                document.getElementsByClassName('reg-submit-button')[0].classList.remove('reg-button-disabled')
            }
            else {
                setSubmit(false)
                // document.getElementById('reg-submit').disabled = true
                document.getElementsByClassName('reg-submit-button')[0].classList.add('reg-button-disabled')
            }
        }
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
                                            <input type="text" id="reg-name" className='' placeholder="Enter Organization name" required />
                                        </div>
                                        <div className='reg-error-message hide'>
                                            <span id="reg-error-name"></span>
                                        </div>
                                        <div className="input-box">
                                            <img src={ImageName.IMAGE_NAME.emailimage} className='input-icon' />
                                            <input 
                                                type="text"
                                                id="reg-email"
                                                className="reg-email" 
                                                placeholder="Enter Organization email" 
                                                onChange={checkEmail} 
                                            />
                                        </div>
                                        <div className='reg-error-message reg-error-email hide'>
                                            <span id="reg-error-email-text"></span>
                                        </div>
                                        <div className="input-box">
                                            <img src={ImageName.IMAGE_NAME.phoneImage} className='input-icon' />
                                            <input
                                                type="text" 
                                                id="reg-phone"
                                                className='reg-phone'
                                                placeholder="Enter Contact No"
                                                onChange={checkPhone}
                                            />
                                        </div>
                                        <div className='reg-error-message reg-error-phone hide'>
                                            <span id="reg-error-phone-text"></span>
                                        </div>
                                        <div className="input-box">
                                            <img src={ImageName.IMAGE_NAME.padlock} className='input-icon' />
                                            <input 
                                                type="password" 
                                                id="reg-pass" 
                                                className='reg-password'
                                                placeholder="Enter password" 
                                                onChange={checkPassword} 
                                            />
                                            <img src={ImageName.IMAGE_NAME.passHide} className='reg-pass-show input-icon clickable ' onClick={() => togglePass('reg-pass', 'reg-pass-show', 'reg-pass-hide')} />
                                            <img onClick={() => togglePass('reg-pass', 'reg-pass-show', 'reg-pass-hide')} src={ImageName.IMAGE_NAME.passShow} className='reg-pass-hide input-icon hide clickable' />
                                        </div>
                                        <div className='reg-error-message reg-error-password hide'>
                                            <span id="reg-error-password-text"></span>
                                        </div>
                                        <div className="input-box">
                                            <img src={ImageName.IMAGE_NAME.padlock} className='input-icon' />
                                            <input 
                                                type="password" 
                                                id="reg-repass" 
                                                className='reg-repassword'
                                                placeholder="Re-Enter password" 
                                                onChange={checkRePassword} 
                                            />
                                            <img onClick={() => togglePass('reg-repass', 'reg-repass-show', 'reg-repass-hide')} src={ImageName.IMAGE_NAME.passHide} className='reg-repass-show input-icon clickable ' />
                                            <img onClick={() => togglePass('reg-repass', 'reg-repass-show', 'reg-repass-hide')} src={ImageName.IMAGE_NAME.passShow} className='reg-repass-hide input-icon hide clickable ' />
                                        </div>
                                        <div className='reg-error-message reg-error-repassword hide'>
                                            <span id="reg-error-repassword-text"></span>
                                        </div>
                                        <div>
                                            <button className="reg-submit-button button input-box reg-button-disabled" onClick={registerCompany} id="reg-submit" > 
                                                <span className='button-text'>Submit</span>
                                                <img 
                                                    src={ImageName.IMAGE_NAME.submitLoader} className='reg-loader input-icon hide' />
                                            </button>
                                        </div>
                                        <center><span className='text sign-up-text'>or use the any of the following options</span></center>
                                        <div className='social-login'>
                                            
                                            {/* <div id="g_id_onload"
                                                data-client_id="576091183163-uu7qqabsholbklqcbc7rl2ips7l20b4d.apps.googleusercontent.com"
                                                data-context="signin"
                                                data-ux_mode="popup"
                                                data-callback="handleResponse"
                                                data-auto_prompt="false">
                                            </div>

                                            <div className="g_id_signin social-login-icon"
                                                data-type="icon"
                                                data-shape="circle"
                                                data-theme="outline"
                                                data-text="signin_with"
                                                data-size="large">
                                            </div> */}
                                            <div id="signInDiv" className='social-login-icon'></div>
                                            {/* <img src={ImageName.IMAGE_NAME.google} className='social-login-icon' /> */}
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