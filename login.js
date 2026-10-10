document.getElementById('login-btn').addEventListener('click', function(){
    const numberField = document.getElementById('number-field')
    const number = numberField.value ;
    const passwordField = document.getElementById('password-field')
    const password = passwordField.value ;
    

    if (number == '01516589492' && password == '1234') {
        alert ('login successfull');
       window.location.assign('./home.html')
    }else{
        alert('invalid number or pass')
        return;
    }
    
})