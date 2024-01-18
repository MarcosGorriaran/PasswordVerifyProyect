const asciiCodeForZero = 48;
const asciiCodeForNine = 57;
const asciiCodeForA = 65;
const asciiCodeForZ = 90;
const asciiCodeFora = 97;
const asciiCodeForz = 122;
const asciiCodeForSpace = 32;

window.addEventListener('load',(event) => {
    init();
})
  
function init(){
    const InputID="inputForm";
    let inputForm = document.getElementById(InputID);
    console.log(inputForm);
    inputForm.addEventListener("blur", (event) => {
        CheckPassword(inputForm);
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
    const LengthError = "La contraseña viola la constraint de longitd de longitud minima "+MinLength+" y maxima "+MaxLength; 
    const AmountLowerCaseError = "La contraseña viola la constraint de cantidad minima de minusculas la cual es de "+MinLowerCaseReq;
    const AmountUpperCaseError = "La contraseña viola la constraint de cantidad minima de mayusculas la cual es de "+MinUpperCaseReq;
    const AmountDigitsCaseError = "La contraseña viola la constraint de cantidad minima de digitos la cual es de "+MinDigitsReq;
    const AmountRepeatedCaseError = "No pueden haver caracteres que se repita "+RepeatedCharactersReq+" veces o mas";
    const AmountWhiteSpaceCaseError = "La contraseña viola la constraint de cantidad maxima de espacios en blanc la cual es de "+ MaxWhiteSpaceReq;
    const AmountSpecialCharactersError = "La contraseña viola la constraint de cantidad minima de caracteres especiales la cual es de "+MinSpecialReq;
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
        errorCase = true;
    }else{
        RemoveErrorMsg(msgLengthError);
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

function ShowErrorMsg(message, documentObject){
    documentObject.innerHTML = message
}
function RemoveErrorMsg(documentObject){
    documentObject.innerHTML="";
}

function InRangeLength(inputForm, minLength, maxLength){
    let passwordLength = inputForm.value.length;
    return passwordLength>=minLength && passwordLength<=maxLength;
}
function InRange(compareValue, minLength, maxLength){
    return compareValue>=minLength && compareValue<=maxLength;
}
function AmountLowercases(inputForm){
    
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