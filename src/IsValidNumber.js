export function isValidNumber(currentNumber, numbersUsed){
    // check whether it's an integer or not
    if(!Number.isInteger(Number(currentNumber))){
        return false;
    }
    // first check whether current number is in 1 to 9 range
    if(currentNumber<1 || currentNumber>9){
        return false;
    }
    // whether set already contain this element or not
    if(numbersUsed.has(currentNumber)){
        return false;
    }

    return true;

}