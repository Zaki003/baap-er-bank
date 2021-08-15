// get deposit input from user and update total deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    // set deposit value to deposit total 
    const depositValue = document.getElementById('deposit-input').value;
    let currentDeposit = document.getElementById('deposit-total').innerText;
    // converting to number and adding new to existing deposit amount
    currentDeposit = parseFloat(currentDeposit) + parseFloat(depositValue);
    document.getElementById('deposit-total').innerText = currentDeposit;

    // update account balance
    const existingBalance = parseFloat(document.getElementById('balance-total').innerText);
    document.getElementById('balance-total').innerText = existingBalance + parseFloat(depositValue);

    // empty deposit input field
    document.getElementById('deposit-input').value = '';

});

// get withdraw input from user and update total withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // set deposit value to deposit total 
    const withdrawValue = document.getElementById('withdraw-input').value;
    let currentWithdrawValue = document.getElementById('withdraw-total').innerText;

    // converting to number and adding new to existing withdraw amount
    currentWithdrawValue = parseFloat(currentWithdrawValue) + parseFloat(withdrawValue);
    document.getElementById('withdraw-total').innerText = currentWithdrawValue;

    // update account balance 
    const existingBalance = document.getElementById('balance-total').innerText;
    document.getElementById('balance-total').innerText = parseFloat(existingBalance) - parseFloat(withdrawValue);

    // empty withdraw input field
    document.getElementById('withdraw-input').value = '';
});