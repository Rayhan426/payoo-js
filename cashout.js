document.getElementById('cashout-btn').addEventListener('click', function(){

    const cashoutNumberField = document.getElementById('agent-number-field');
    const cashoutNumberValue = cashoutNumberField.value;

    if (cashoutNumberValue.length != 11) {
        alert ('invalid number')
         return;
    }
       
    
    const cashoutAmount = document.getElementById('cashout-amount-field');
    const cashoutAmountValue = cashoutAmount.value;
 const convertedAmount = Number(cashoutAmountValue);


if (cashoutAmountValue.trim() === "" || isNaN(convertedAmount)) {
    alert('Type only a number');
    return;
}
     const mainBalance = document.getElementById('main-balance');
     const balance = mainBalance.innerText;
     const newBalance = Number(balance) - Number(cashoutAmountValue);



     if (newBalance < 0) {
        alert('invalid amount')
        return;
     }
     console.log(newBalance);
const cashoutPinField = document.getElementById('cashout-field');
const pin = cashoutPinField.value;
if (pin === '1234') {
    alert('cashout successfull')
    mainBalance.innerText = newBalance;
}else{
    alert('invalid pin')
    return;
}

     
    
})



document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.assign('./index.html')
})