//import React, {useState} from 'react'
function passwordToggle(inputTextId, passwordShowClass, passwordHideClass) {
  let passwordInput = document.getElementById(inputTextId)
  if(passwordInput.type === 'password') {
    passwordInput.type =  'text' 
  }
  else {
    passwordInput.type = 'password'
  }
  document.getElementsByClassName(passwordHideClass)[0].classList.toggle('hide')
  document.getElementsByClassName(passwordShowClass)[0].classList.toggle('hide')
}

export default passwordToggle