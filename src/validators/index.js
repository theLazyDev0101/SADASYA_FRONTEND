import { Regex } from "../services/config";
import { AlertMessage } from '../enums/'

const emailValidator = email => {
    if(email == undefined || email == null) {
        return ({status : false, message : AlertMessage.MESSAGE.EMAIL.EMAIL_EMPTY})
    }
    else {
        if(email.length == 0) {
            return ({status : false, message : AlertMessage.MESSAGE.EMAIL.EMAIL_EMPTY})
        }
        else {
            if (Regex.EMAIL_REGEX.test(email)) {
                return ({status : true, message : ''})
            }
            else {
                return ({status : false, message : 'Please Enter a valid Email'})
            }
        }
    }
}

const phoneValidator = phone => {
    if(phone == undefined || phone == null) {
        return ({status: false, message: AlertMessage.MESSAGE.MOBILE.MOBILE_EMPTY})
    } 
    else {
        if(phone.length == 0) {
            return ({status: false, message: AlertMessage.MESSAGE.MOBILE.MOBILE_EMPTY})
        }
        else {
            if(!Regex.NUMBER_REGEX.test(phone)) {
                return ({status: false, message: AlertMessage.MESSAGE.MOBILE.INVALID_MOBILE})
            }
            else {
                if(phone.length < 8 || phone.length > 12) {
                    return ({status: false, message: AlertMessage.MESSAGE.MOBILE.INVALID_MOBILE})
                }
                else {
                    return ({status: true, message: ''})
                }
            }

        }
    }
}

const passwordValidator = password => {
    if (password === undefined || password === null) {
        return ({ status: false, message: AlertMessage.MESSAGE.PASSWORD.PASSWORD_EMPTY });
    }
    else {
      if (password.length === 0) {
         return ({ status: false, message: AlertMessage.MESSAGE.PASSWORD.PASSWORD_EMPTY });
      } 
      else {
        if (password.length < 7 || password.length > 16) {
          return ({ status: false, message: AlertMessage.MESSAGE.PASSWORD.PASSWORD_LENGTH });
        }
        else if (!!password.match(Regex.PASS_REGEX)) {     //match the password with the regex condition is (Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter and one number)
          return ({ status: true, message: "" });
        }
        else {
          return ({ status: false, message: AlertMessage.MESSAGE.PASSWORD.PASSWORD_NOT_VALID });
        }
      }
    }
  };

  export {
    emailValidator,
    phoneValidator,
    passwordValidator,
  }