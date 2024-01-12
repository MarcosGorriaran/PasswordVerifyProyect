window.addEventListener('load', init())
  
function init(){
    const InputID="password";
    let inputForm = document.getElementById(inputID);

    inputForm.addEventListener("blur", CheckPassword(inputForm));
}

function CheckPassword(inputForm){
    const MinLength = 8;
    const MaxLength = 20;
    if(!IsLongEnough(inputForm, MinLength, MaxLength)){

    }
}

function ShowErrorMsg(){
    const MsgBoxID = "MsgBox";
    const MsgTag = "p";
    let msgBox = document.getElementById(MsgBoxID);
    document.createElement(MsgTag);
}

function IsLongEnough(inputForm, minLength, maxLength){
    let passwordLength = inputForm.innerHTML.length;

    return passwordLength>=minLength && passwordLength<=maxLength;
}