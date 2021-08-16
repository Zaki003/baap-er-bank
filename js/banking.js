// gets input and converts it to float, also clears input field
function getInputValue(id) {
    const inputValueText = document.getElementById(id).value;
    const inputValue = parseFloat(inputValueText);
    // clear input field 
    document.getElementById(id).value = '';
    return inputValue;
}
//  gets current value for display balance amount and converts to float 
function getCurrentBalance(id) {
    const previousValueText = document.getElementById(id).innerText;
    const previousValue = parseFloat(previousValueText);
    return previousValue;
}
// adding new amount with existing deposit and withdraw amount and updating it
function setUpdatedValue(inputValue, totalId) {
    const previousValueText = document.getElementById(totalId).innerText;
    const previousValue = parseFloat(previousValueText);
    const updatedValue = inputValue + previousValue;
    document.getElementById(totalId).innerText = updatedValue;
}


// get deposit input from user and update total deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    // set deposit value to deposit total 
    // const depositValue = document.getElementById('deposit-input').value;
    const depositValue = getInputValue('deposit-input');
    // const currentDeposit = getCurrentValue('deposit-total');
    // converting to number and adding new to existing deposit amount
    /* const updatedDeposit = currentDeposit + depositValue;
    document.getElementById('deposit-total').innerText = updatedDeposit; */
    const existingBalance = getCurrentBalance('balance-total');
    // update only if it's a positive value
    if (depositValue > 0) {
        setUpdatedValue(depositValue, 'deposit-total');
        // update account balance
        document.getElementById('balance-total').innerText = existingBalance + depositValue;
    }

    /* 
    // validation of deposit value when input is empty 
    if (document.getElementById('deposit-total').innerText == 'NaN') {
        console.log('something is wrong');
        document.getElementById('deposit-total').innerText = currentDeposit;
    }


    // validation of balance value when deposit input is empty 
    if (document.getElementById('balance-total').innerText == 'NaN') {
        document.getElementById('balance-total').innerText = existingBalance;
    } 
    */
});

/* document.getElementById('deposit-input').addEventListener('keyup', function () {
    const depositValue = document.getElementById('deposit-input').value;
    // validation of code when no input is given 
    if (depositValue != '') {
        document.getElementById('deposit-button').removeAttribute('disabled');
    }
    else if (depositValue == '') {
        document.getElementById('deposit-button').setAttribute('disabled', true);
    }
}) */

// get withdraw input from user and update total withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // set deposit value to deposit total 
    // const withdrawValue = document.getElementById('withdraw-input').value;
    const withdrawValue = getInputValue('withdraw-input');
    // const currentWithdrawValue = getCurrentValue('withdraw-total');

    //adding new to existing withdraw amount
    /* const updatedWithdrawValue = currentWithdrawValue + withdrawValue;
    document.getElementById('withdraw-total').innerText = updatedWithdrawValue; */
    const existingBalance = getCurrentBalance('balance-total');

    // updates only if it's a positive value
    if (withdrawValue > 0 && withdrawValue <= existingBalance) {
        setUpdatedValue(withdrawValue, 'withdraw-total');
        // update account balance 
        document.getElementById('balance-total').innerText = existingBalance - withdrawValue
    }


    /* 
    // validation of balance value when withdraw input is empty 
    if (document.getElementById('withdraw-total').innerText == 'NaN') {
        document.getElementById('withdraw-total').innerText = currentWithdrawValue;
    }


    // validation of balance value when withdraw input is empty 
    if (document.getElementById('balance-total').innerText == 'NaN') {
        document.getElementById('balance-total').innerText = existingBalance;
    } 
    */
});