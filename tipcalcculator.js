
function onload(){
    let isError = false;
    document.getElementById('amount').value = 0.00.toFixed(2);
    document.getElementById('tipresult').innerText=0.00.toFixed(2);
    document.getElementById('totalresult').innerText=0.00.toFixed(2);
}
onload();
function tipDecrement() {
    resetErrorMsg();
    let percentageValue = document.getElementById("tip");
    if (Number(percentageValue.value) > 0) {
        percentageValue.value = Number(percentageValue.value) - 1;
        if (percentageValue.value >= 0) 
            calculate();
        else
            showError("invalid number", 'tip');
    }
    else {
        showError("invalid number", 'tip');
        return false;
    }
}
function tipIncrement() {
    resetErrorMsg();
    let percentageValue = document.getElementById("tip");
    if(Number(percentageValue.value) >= 0){
        percentageValue.value = Number(percentageValue.value) + 1;
        calculate();
    }
    else
        showError("invalid number", 'tip');
}
function decrementpeople() {
    resetErrorMsg();
    let numberofpeople = document.getElementById("people");
    const ppl = Number(numberofpeople.value);
    if (ppl > 0 && Number.isInteger(ppl)) {
        numberofpeople.value = ppl - 1;
        if (!isGreaterThanZero(numberofpeople.value, 'ppl')) {
            showError("invalid number", 'ppl');
        }
        calculate();
    }
    else {
        showError("invalid number", 'ppl');
        return false;
    }
}
function incrementpeople() {
    resetErrorMsg();
    let numberofpeople = document.getElementById("people");
    if ((Number(numberofpeople.value) >= 0 || numberofpeople.value === '') && Number.isInteger(Number(numberofpeople.value))) {
        numberofpeople.value = Number(numberofpeople.value) + 1;
        calculate();
    }
    else {
        showError("invalid number", 'ppl');
        return false;
    }
}
function checkInput(type) {
    switch (type) {
        case 'tip':
            let decrementValue = document.getElementById("tip").value;
            if (decrementValue >= 0) {
                resetErrorMsg();
                calculate();
            }
            else {
                showError("invalid number", 'tip');
            }
            break;
        case 'ppl':
            var ppl = Number(document.getElementById('people').value);
            if (ppl > 0 && Number.isInteger(ppl)) {
                resetErrorMsg();
                calculate();
            }
            else
                showError("invalid number", 'ppl');
            break;
    }
}
function isGreaterThanZero(number, type) {
    if (type === 'tip')
        return number >= 0;
    return number > 0;
}
function calculate() {
    //debugger 
    const total = document.getElementById('amount').value;
    const tipValue = document.getElementById('tip').value;
    const ppl = document.getElementById('people').value;
    if (tipValue >= 0 && ppl > 0 && total > 0) {
        let tippp = (total * tipValue / 100) / ppl;
        let totalpp = (parseFloat(total) + parseFloat(total * tipValue / 100)) / parseFloat(ppl);
        document.getElementById('tipresult').innerHTML = "      "+"$" + tippp.toFixed(2);
        document.getElementById('totalresult').innerHTML ="     "+"$" + totalpp.toFixed(2);
    }
    else{
        document.getElementById('tipresult').innerText = 0.00;
        document.getElementById('totalresult').innerText = 0.00;
    }
}
function showError(msg, type) {
    isError = true
    if (type === 'tip')
        document.getElementById('tiperror').innerText = msg;
    else
        document.getElementById('pplerror').innerText = msg;
    document.getElementById('tipresult').innerText=0.00.toFixed(2);
}
function resetErrorMsg() {
    isError = false;
    document.getElementById('tiperror').innerText = '';
    document.getElementById('pplerror').innerText = '';
}
