
function validateName(){

    let name = document.getElementById('username');
    let nameError = document.getElementById("usernameError");


    if(name.value.trim() == "")
    {
        nameError.innerHTML= "Username cannot be blank!!";
        return false;

    }else if( name.value.length<5)
    {
        nameError.innerHTML="Username mmust be greater than five characters!!";
        return false;
    }else{
        nameError.innerHTML="";
        return true;
    }

}

function validateMail(){

    let email=document.getElementById("email");
    let emailError=document.getElementById("emailError");

    let regExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.trim()==""){
        emailError.innerHTML="Email cannot be blank!!"
        return false;
    }
    else if( ! email.value.match( regExp)){
        emailError.innerHTML="Enter a valid Email!!"
        return false;
    }
    else{
        emailError.innerHTML=""
        return true;
    }
}

function validatePassword(){

    const password=document.getElementById("password");
    const passwordError=document.getElementById("passwordError");

    if(password.value.trim()==""){
        passwordError.innerHTML="password cannot be blank!!";
        return false;
    }else if(password.value.length<6){
        passwordError.innerHTML="password must be greater than six characters"
        return false;
    }else{
        passwordError.innerHTML="";
        return true;
    }
}

function validateCnfrmPass(){
    let password=document.getElementById("password");
let cnfrmpass=document.getElementById("cnfrmpass");

let cnfrmpassError=document.getElementById("cnfrmpassError");

if(password.value != cnfrmpass.value){
    cnfrmpassError.innerHTML="Incorrect password!!"
    return false;
}else{
    cnfrmpassError.innerHTML="";
    return true;

}
}
function validateForm(){
    if( !validateName() || !validateMail() || !validatePassword() || !validateCnfrmPass()){
        return false;
    } else{
        
    }
}