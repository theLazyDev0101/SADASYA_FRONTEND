import * as React from 'react';
import { useState, useEffect } from 'react';
import './Verification.css';
import { ImageName } from '../../../../../enums';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { ApiCall } from '../../../../../services/middleware';

export default function Verification() {
    const inputRefs = useRef([]);
    const totalFields = 6;
    // const codeArr = []
    const [codeArr, setCodeArr] = useState([])
    const navigate = useNavigate();
  
    const handleInputChange = (e, index) => {
      const value = e.target.value;
      const nextIndex = index + 1;
  
      if (value.length > 1) {
        e.target.value = value.slice(0, 1); // Keep only the first character
      }

      if (value.length === 1) {
        e.target.value = value.replace(/\D/g, '');
  
        if (nextIndex <= totalFields) {
            document.getElementById('digit-' + nextIndex).focus()
        }
      }
    };
  
    const handleKeyDown = (e, index) => {
      const previousIndex = index - 1;
  
      if (e.key === 'Backspace' && previousIndex >= 0) {
        document.getElementById('digit-' + index).focus();
        
      }
    };

    const verifyAccount = async() => {
        let digit1 = document.getElementById('digit-1').value
        let digit2 = document.getElementById('digit-2').value
        let digit3 = document.getElementById('digit-3').value
        let digit4 = document.getElementById('digit-4').value
        let digit5 = document.getElementById('digit-5').value
        let digit6 = document.getElementById('digit-6').value

        let verifyCode = digit1 + digit2 + digit3 + digit4 + digit5 + digit6

        if(verifyCode.length == 6) {
            let userDetails = JSON.parse(window.localStorage.getItem('userDetails'));
            let userId = userDetails['userId'];
            let data = {
                'userId' : userId,
                'verificationToken' : verifyCode
            }
            let verify = await ApiCall("verifyCompany", data);
            if(verify.status == 200) {
                let loginData = {
                    'email' : userDetails['email'],
                    'password' : userDetails['password']
                }

                let login = await ApiCall('loginCompany', loginData);
                if(login.respCode == 1) {
                    window.localStorage.setItem('userAuthentication', JSON.stringify(login.response))
                    navigate('/companyDashboard')
                }
            }
        }
    }
    const returnBack = () => {
        navigate('/verificationCompany');
    }
    useEffect(() => {
        console.log('codeArr', codeArr);
        let userDetails = JSON.parse(window.localStorage.getItem('userDetails'));
        document.getElementById('ver-email').innerHTML = userDetails['email']

      }, [codeArr]);
  return (
        <body className='verificationBody'>
            <div class="verificationContainer">
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
                                <div class="title">Verification</div>
                                <div class="prompt">
                                    Enter the code sent to you at <span className='ver-email' id='ver-email'></span>!
                                </div>

                                <div  class="digit-group">
                                    <input 
                                        type="text" 
                                        id="digit-1" 
                                        name="digit-1" 
                                        data-next="digit-2" 
                                        onChange={(e) => handleInputChange(e, 1)}
                                        onKeyDown={(e) => handleKeyDown(e, 1)}
                                    />
                                    <input 
                                        type="text" 
                                        id="digit-2" 
                                        name="digit-2" 
                                        data-next="digit-3" 
                                        data-previous="digit-1"
                                        onChange={(e) => handleInputChange(e, 2)}
                                        onKeyDown={(e) => handleKeyDown(e, 2)}
                                    />
                                    <input 
                                        type="text" 
                                        id="digit-3" 
                                        name="digit-3" 
                                        data-next="digit-4" 
                                        data-previous="digit-2"
                                        onChange={(e) => handleInputChange(e, 3)}
                                        onKeyDown={(e) => handleKeyDown(e, 3)}
                                    />
                                    <input 
                                        type="text" 
                                        id="digit-4" 
                                        name="digit-4" 
                                        data-next="digit-5" 
                                        data-previous="digit-3"
                                        onChange={(e) => handleInputChange(e, 4)}
                                        onKeyDown={(e) => handleKeyDown(e, 4)}
                                    />
                                    <input 
                                        type="text" 
                                        id="digit-5" 
                                        name="digit-5" 
                                        data-next="digit-6" 
                                        data-previous="digit-4"
                                        onChange={(e) => handleInputChange(e, 5)}
                                        onKeyDown={(e) => handleKeyDown(e, 5)}
                                    />
                                    <input 
                                        type="text" 
                                        id="digit-6" 
                                        name="digit-6" 
                                        data-previous="digit-5"
                                        onChange={(e) => handleInputChange(e, 6)}
                                        onKeyDown={(e) => handleKeyDown(e, 6)}
                                    />
                                </div>
                                <div className='resend-container'>
                                    <p className='resend-text'>Didn't receive the code yet? </p>
                                    <p className='resend-button'>resend</p>
                                </div>
                                <div className='ver-button-container'>
                                    <button className='ver-button ver-button-cancel' onClick={returnBack}>Cancel</button>
                                    <button className='ver-button ver-button-verify' onClick={verifyAccount}>Verify</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </body>
  );
}