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
    const MsgBoxID = "MsgBox";
    const LengthErrorID = "NotInRange";
    const ErrorNotEnoughLowerCaseID = "NoLowerCase";
    const ErrorNotEnoughUpperCaseID = "NoUpperCase";
    const ErrorNotEnoughDigitsCaseID = "NoDigitsCase";
    const ErrorRepeatedCharactersID = "RepeatedCase";
    const LengthError = "La contraseña viola la constraint de longitd de longitud minima "+MinLength+" y maxima "+MaxLength; 
    const AmountLowerCaseError = "La contraseña viola la constraint de cantidad minima de minusculas la cual es de "+MinLowerCaseReq;
    const AmountUpperCaseError = "La contraseña viola la constraint de cantidad minima de mayusculas la cual es de "+MinUpperCaseReq;
    const AmountDigitsCaseError = "La contraseña viola la constraint de cantidad minima de digitos la cual es de "+MinDigitsReq;
    const AmountRepeatedCaseError = "No pueden haver caracteres que se repita "+RepeatedCharactersReq+" veces o mas";
    let msgLengthError = document.getElementById(LengthErrorID);
    let msgLowerCaseError = document.getElementById(ErrorNotEnoughLowerCaseID);
    let msgUpperCaseError = document.getElementById(ErrorNotEnoughUpperCaseID);
    let msgDigitsCaseError = document.getElementById(ErrorNotEnoughDigitsCaseID);
    let msgRepeatedCharactersError = document.getElementById(ErrorRepeatedCharactersID);
    let msgBox = document.getElementById(MsgBoxID);
    if(!InRangeLength(inputForm, MinLength, MaxLength)){
        ShowErrorMsg(LengthError, msgLengthError);
    }else{
        RemoveErrorMsg(msgLengthError);
    }
    if(AmountLowercases(inputForm.value)<MinLowerCaseReq){
        ShowErrorMsg(AmountLowerCaseError, msgLowerCaseError);
    }else{
        RemoveErrorMsg(msgLowerCaseError);
    }
    if(AmountUppercases(inputForm.value)<MinUpperCaseReq){
        ShowErrorMsg(AmountUpperCaseError, msgUpperCaseError);
    }else{
        RemoveErrorMsg(msgUpperCaseError);
    }
    if(AmountDigits(inputForm.value)<MinDigitsReq){
        ShowErrorMsg(AmountDigitsCaseError, msgDigitsCaseError);
    }else{
        RemoveErrorMsg(msgUpperCaseError);
    }
    if(SearchRepeatedCharacter(inputForm.value, RepeatedCharactersReq)){
        ShowErrorMsg(AmountRepeatedCaseError, msgRepeatedCharactersError);
    }else{
        RemoveErrorMsg(msgRepeatedCharactersError);
    }
    if(inputForm.value.includes()){

    }else{
        
    }

}

function ShowErrorMsg(message, documentObject){
    
    const MsgTag = "p";
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