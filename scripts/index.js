function showSignUp() {
    var x = document.getElementById('modal');
    x.style.top = '50%';
    x.style.zIndex = '9';
}

function onCancel(id) {
    var x = document.getElementById(id);
    x.style.top = '-50%';
    x.style.zIndex = '-1';
}

function showSignIn(){
    var x = document.getElementById('modal2');
    x.style.top = '50%';
    x.style.zIndex = '9';
}

function showSignUp2(id) {
    onCancel(id);
    showSignUp();
}