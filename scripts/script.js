var loginemail = document.getElementById("loginemail");
var loginpwd = document.getElementById("loginpwd");
var error_message =document.getElementById("error_message");
var signup_firstName = document.getElementById("signup_firstName");
var signup_lastName = document.getElementById("signup_lastName");
var signup_inputEmail4 = document.getElementById("signup_inputEmail4");
var signup_mobile4 = document.getElementById("signup_mobile4");
var signup_inputPassword4 = document.getElementById("signup_inputPassword4");
var signup_confirminputPassword4 = document.getElementById("signup_confirminputPassword4");
var signup_inputAddress = document.getElementById("signup_inputAddress");
var signup_inputAddress2 = document.getElementById("signup_inputAddress2");
var signup_inputCity = document.getElementById("signup_inputCity");
var signup_inputZip = document.getElementById("signup_inputZip");
var signup_gridCheck = document.getElementById("signup_gridCheck");
var signup_inputState = document.getElementById("signup_inputState");


// Expressions//

var mobile =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;   
var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/; 
var zipexp = /^([0-9]{6})$/;
var regpass = /^(?=.*[A-Za-z])(?=.*\d)[A-za-z0-9]{8,}$/;

// LOGIN VALIDATION

function loginvalidation(){

    if(loginemail.value == "" || loginpwd.value == ""){
        error_message.innerText = "FIELD CANNOT BE EMPTY";
        return false;
    }

    if(!regpass.test(loginpwd.value)){
        error_message.innerText = "ENTER YOUR CORRECT PASSWORD";
        return false;
    }

    if(!regexp.test(loginemail.value)){
        error_message.innerText = "EMAIL ID IS IN INCORRECT FORMAT";   
        return false; 
    }
      
}

//  SIGN UP VALIDATION

function signupvalidation(){

    if(signup_firstName.value =="" || signup_lastName.value =="" || signup_inputEmail4.value =="" || signup_inputPassword4.value =="" || signup_confirminputPassword4.value == "" || signup_inputAddress.value == "" || signup_inputAddress2.value == "" || signup_inputCity.value == "" || signup_mobile4.value == "" || signup_inputZip.value == "" || signup_gridCheck.checked == "" || state==0){
        firstname_message.innerText = "FIELD CANNOT BE EMPTY"; 
        lastname_message.innerText = "FIELD CANNOT BE EMPTY"; 
        email_message.innerText = "FIELD CANNOT BE EMPTY";
        mobile_message.innerText = "FIELD CANNOT BE EMPTY";
        password_message.innerText = "FIELD CANNOT BE EMPTY";
        confirm_password_message.innerText = "FIELD CANNOT BE EMPTY";
        zip_message.innerText = "FIELD CANNOT BE EMPTY";
        address_message.innerText = "FIELD CANNOT BE EMPTY";
        address2_message.innerText = "FIELD CANNOT BE EMPTY";
        city_message.innerText = "FIELD CANNOT BE EMPTY";
        state_message.innerText = "FIELD CANNOT BE EMPTY";
        I_message.innerText = "FIELD CANNOT BE EMPTY";
        return false;
      }

    if(!regexp.test(signup_inputEmail4.value)){
        email_message.innerText = "EMAIL ID IS IN INCORRECT FORMAT";   
        return false; 
    }
    else
    if(mobile.test(signup_mobile4.value) != "1"){
        // window.alert("Please enter a valid phone number :");
        mobile_message.innerText = "invalid mobile number";
        return false;
    }

  
    if(!regpass.test(signup_inputPassword4.value)){
          password_message.innerText = "Password doesnot meet";
          password_message.style.color = "red";
          return false;
    }
  
      if(signup_confirminputPassword4.value != signup_inputPassword4.value  ){
          confirm_password_message.innerText = "Password is not matching";
          confirm_password_message.style.color = "red";
          return false;
      }
  
      if(!zipexp.test(signup_inputZip.value)){
          zip_message.innerText = "Invalid zip code";
          return false;
      }       
  }

//   PASSWORD SETTING //

signup_inputPassword4.addEventListener('input',( ) => {
    if(!regpass.test(signup_inputPassword4.value)){
    if(signup_inputPassword4.value.length <= 7 ){
        password_message.innerText = "WEAK";
        password_message.style.color = "red";
    }

    else if(signup_inputPassword4.value.length >= 8 && signup_inputPassword4.value.length <9 ){
        password_message.innerText = "MEDIUM";
        password_message.style.color = "orange";
    }

    else{
        password_message.innerText = "STRONG";
        password_message.style.color = "green";
    }
}
})


signup_confirminputPassword4.addEventListener('input',( ) => {
    if(!regpass.test(signup_inputPassword4.value)){
    if(signup_confirminputPassword4.value.length <= 7 ){
        confirm_password_message.innerText = "WEAK";
        confirm_password_message.style.color = "red";
    }
    else if(signup_confirminputPassword4.value.length >= 8 && signup_confirminputPassword4.value.length < 9 ){
        confirm_password_message.innerText = "MEDIUM";
        confirm_password_message.style.color = "orange";
    }
    else{
        confirm_password_message.innerText = "STRONG";
        confirm_password_message.style.color = "green";
    }
}
})
































// if(!signup_mobile4.value.match(mobile)){
//       mobile_message.innerText = "invalid mobile number";
//       return false;
// }


// if(signup_firstName.value == "" || signup_lastName.value == "" ) {
//     firstname_message.innerText = "FIELD CANNOT BE EMPTY";
//     lastname_message.innerText  = "FIELD CANNOT BE EMPTY";
//     return false;
// }
// if( signup_inputEmail4.value == "" || signup_inputPassword4.value == "" ){  
//     email_message.innerText = "FIELD CANNOT BE EMPTY";
//  password_message.innerText = "FIELD CANNOT BE EMPTY";
//     return false;
// }
// if(signup_confirminputPassword4.value == "" || signup_inputAddress.value == "" ){
//     confirm_password_message.innerText = "FIELD CANNOT BE EMPTY";
//      address_message.innerText = "FIELD CANNOT BE EMPTY";
//     return false;
// }
// if(signup_inputAddress2.value == "" || signup_inputCity.value == "" ){
//     address2_message.innerText = "FIELD CANNOT BE EMPTY";
//      city_message.innerText = "FIELD CANNOT BE EMPTY";
//     return false;
// }
// if(signup_mobile4.value == "" || signup_inputZip.value == "" || signup_gridCheck.checked == "" ){
//     mobile_message.innerText = "FIELD CANNOT BE EMPTY";
//     zip_message.innerText = "FIELD CANNOT BE EMPTY";
//      I_message.innerText  = "FIELD CANNOT BE EMPTY";
//     return false;
// }