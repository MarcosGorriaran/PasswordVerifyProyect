
window.addEventListener('load',(event) => {
    init();
})
  
function init(){
    const InputID="inputForm";
    let inputForm = document.getElementById(InputID);
    let showPassword = document.querySelector("#ShowPasswordField>input");
    inputForm.addEventListener("blur", (Event) => {
        CheckPassword(inputForm);
    });
    showPassword.addEventListener("click", (Event) =>{
        ShowField(inputForm);
    });
}

function CheckPassword(inputForm){
    const MinLength = 8;
    const MaxLength = 20;
    const MinLowerCaseReq = 2;
    const MinUpperCaseReq = 1;
    const MinDigitsReq = 1;
    const RepeatedCharactersReq = 3;
    const MaxWhiteSpaceReq = 1;
    const MinSpecialReq = 1;
    const InputCSSVarName = "--inputBorderColor";
    const ErrorColor = "red";
    const GoodColor = "green";
    const MsgBoxID = "MsgBox";
    const LengthErrorID = "NotInRange";
    const ErrorNotEnoughLowerCaseID = "NoLowerCase";
    const ErrorNotEnoughUpperCaseID = "NoUpperCase";
    const ErrorNotEnoughDigitsCaseID = "NoDigitsCase";
    const ErrorRepeatedCharactersID = "RepeatedCase";
    const ErrorWhiteSpaceFoundID = "SpaceCase";
    const ErrorNotEnoughSpecialCharactersID = "NoSpecialCase";
    const LengthError = "The password violates the constraint of minimum length of "+MinLength+" and maximum of "+MaxLength; 
    const AmountLowerCaseError = "The password violates the constraint on minimum lowercases required which are "+MinLowerCaseReq;
    const AmountUpperCaseError = "The password violates the constraint on minimum uppercases required which is "+MinUpperCaseReq;
    const AmountDigitsCaseError = "The password violates the constraint on minimum numbers required which is "+MinDigitsReq;
    const AmountRepeatedCaseError = "There can not be characters that repeat "+RepeatedCharactersReq+" times or more";
    const AmountWhiteSpaceCaseError = "The password violates the constraint of maximum amount of allowed spaces which is "+ MaxWhiteSpaceReq;
    const AmountSpecialCharactersError = "The password violates the constraint of minimum special characters required which is "+MinSpecialReq;
    let msgLengthError = document.getElementById(LengthErrorID);
    let msgLowerCaseError = document.getElementById(ErrorNotEnoughLowerCaseID);
    let msgUpperCaseError = document.getElementById(ErrorNotEnoughUpperCaseID);
    let msgDigitsCaseError = document.getElementById(ErrorNotEnoughDigitsCaseID);
    let msgRepeatedCharactersError = document.getElementById(ErrorRepeatedCharactersID);
    let msgWhiteSpaceError = document.getElementById(ErrorWhiteSpaceFoundID);
    let msgSpecialCaseError = document.getElementById(ErrorNotEnoughSpecialCharactersID);

    let cssVars = document.querySelector(":root");
    let errorCase = false;

    if(!InRangeLength(inputForm, MinLength, MaxLength)){
        ShowErrorMsg(LengthError, msgLengthError);
        msgLengthError.removeAttribute("hidden");
        errorCase = true;
    }else{
        RemoveErrorMsg(msgLengthError);
        msgLengthError.setAttribute("hidden","");
    }
    if(AmountLowercases(inputForm.value)<MinLowerCaseReq){
        ShowErrorMsg(AmountLowerCaseError, msgLowerCaseError);
        errorCase = true;
    }else{
        RemoveErrorMsg(msgLowerCaseError);
    }
    if(AmountUppercases(inputForm.value)<MinUpperCaseReq){
        ShowErrorMsg(AmountUpperCaseError, msgUpperCaseError);
        errorCase = true;
    }else{
        RemoveErrorMsg(msgUpperCaseError);
    }
    if(AmountDigits(inputForm.value)<MinDigitsReq){
        ShowErrorMsg(AmountDigitsCaseError, msgDigitsCaseError);
        errorCase = true;
    }else{
        RemoveErrorMsg(msgDigitsCaseError);
    }
    if(SearchRepeatedCharacter(inputForm.value, RepeatedCharactersReq)){
        ShowErrorMsg(AmountRepeatedCaseError, msgRepeatedCharactersError);
        errorCase = true;
    }else{
        RemoveErrorMsg(msgRepeatedCharactersError);
    }
    if(AmountSpaces(inputForm.value)>=MaxWhiteSpaceReq){
        ShowErrorMsg(AmountWhiteSpaceCaseError,msgWhiteSpaceError);
        errorCase = true;
    }else{
        RemoveErrorMsg(msgWhiteSpaceError);
    }
    if(AmountSpecialCharacter(inputForm.value)<MinSpecialReq){
        ShowErrorMsg(AmountSpecialCharactersError, msgSpecialCaseError);
        errorCase = true;
    }else{
        RemoveErrorMsg(msgSpecialCaseError);
    }

    if(errorCase){
        cssVars.style.setProperty(InputCSSVarName, ErrorColor);
    }else{
        cssVars.style.setProperty(InputCSSVarName, GoodColor);
    }

}

function ShowField(inputField){
    let attributeValue = inputField.getAttribute("type");
    if(attributeValue=="password"){
        inputField.setAttribute("type", "text");
    }else{
        inputField.setAttribute("type", "password");
    }
}

function ShowErrorMsg(message, documentObject){
    documentObject.innerHTML = message
    documentObject.removeAttribute("hidden");
}
function RemoveErrorMsg(documentObject){
    documentObject.innerHTML="";
    documentObject.setAttribute("hidden","");
}

function InRangeLength(inputForm, minLength, maxLength){
    let passwordLength = inputForm.value.length;
    return passwordLength>=minLength && passwordLength<=maxLength;
}
function InRange(compareValue, minLength, maxLength){
    return compareValue>=minLength && compareValue<=maxLength;
}
function AmountLowercases(inputForm){
    const asciiCodeFora = 97;
    const asciiCodeForz = 122;
    let sum = 0;
    for(let i = 0; i<inputForm.length; i++){
        let asciiCode = inputForm.charCodeAt(i);
        if(InRange(asciiCode ,asciiCodeFora, asciiCodeForz)){
            sum++;
        }
    }
    return sum;
}
function AmountUppercases(inputForm){
    const asciiCodeForA = 65;
    const asciiCodeForZ = 90;
    let sum = 0;
    for(let i = 0; i<inputForm.length; i++){
        let asciiCode = inputForm.charCodeAt(i);
        if(InRange(asciiCode ,asciiCodeForA, asciiCodeForZ)){
            sum++;
        }
    }
    return sum;
}
function AmountDigits(inputForm){
    const asciiCodeForZero = 48;
    const asciiCodeForNine = 57;
    let sum = 0;
    for(let i = 0; i<inputForm.length; i++){
        let asciiCode = inputForm.charCodeAt(i);
        if(InRange(asciiCode ,asciiCodeForZero, asciiCodeForNine)){
            sum++;
        }
    }
    return sum;
}

function SearchRepeatedCharacter(inputFormValue, amountRepeatTrigger){
    let sum = 1;
    let searchTarget = null;
    for(let i = 0; i<inputFormValue.length; i++){
        if(inputFormValue[i]==searchTarget){
            sum++;
        }else{
            searchTarget=inputFormValue[i];
            sum = 1;
        }
        if(sum>=amountRepeatTrigger){
            return true;
        }
    }
    return false;
}
function AmountSpaces(inputFormValue){
    const asciiCodeForSpace = 32;
    let sum = 0;
    for(let i = 0; i<inputFormValue.length; i++){
        let asciiCode = inputFormValue.charCodeAt(i);
        if(asciiCode==asciiCodeForSpace){
            sum++;
        }
    }
    return sum;
}
function AmountSpecialCharacter(inputFormValue){
    const asciiCodeForSpace = 32;
    const asciiCodeForA = 65;
    const asciiCodeForZ = 90;
    const asciiCodeForZero = 48;
    const asciiCodeForNine = 57;
    let sum = 0;
    inputFormValue = inputFormValue.toUpperCase();
    for(let i = 0; i<inputFormValue.length; i++){
        let asciiCode = inputFormValue.charCodeAt(i);
        if(!InRange(asciiCode ,asciiCodeForZero, asciiCodeForNine) && !InRange(asciiCode, asciiCodeForA, asciiCodeForZ) && asciiCode!=asciiCodeForSpace){
            sum++;
        }
    }
    return sum;
}