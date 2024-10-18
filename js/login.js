var loginButton = document.querySelector('.login-container');
var emailInput = document.querySelector('input[type="text"]');
var passwordInput = document.querySelector('input[type="password"]');

loginButton.addEventListener('click', function(event) {
    
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    if (email === '' || password === '') {
        alert('이메일과 비밀번호를 모두 입력해주세요.');
        return; 
    }

    window.location.href = 'home.html';
});
