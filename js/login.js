// adding event handler on submit button 
document.getElementById('login-submit').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    userPassword = passwordField.value;
    // check email and password validity 
    if (userEmail == 'shontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
});