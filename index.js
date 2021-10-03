function showPassword() {
    const eye = document.getElementById('eye')
    const eyeSlash = document.getElementById('eye-slash')
    const fieldPassword = document.getElementById('field-password')

    if(eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
};

function showPassword1() {
    const eye1 = document.getElementById('eye1')
    const eyeSlash1 = document.getElementById('eye-slash1')
    const fieldPassword1 = document.getElementById('field-password1')

    if(eye1.style.display === 'none') {
        eye1.style.display = 'block';
        eyeSlash1.style.display = 'none';
        fieldPassword1.type = 'text';
    } else {
        eye1.style.display = 'none';
        eyeSlash1.style.display = 'block';
        fieldPassword1.type = 'password';
    }
};


var email = document.getElementById('email')
    function logar() {
        if(email.value.length == 0 && field.value.length == 0) {
            window.alert('digite os campos confome o desejado.')
        }
    }