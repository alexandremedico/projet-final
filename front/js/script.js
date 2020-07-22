let mail;
let password;

window.addEventListener("DOMContentLoaded", function() {
    const socket = io();
    
    document.getElementById('connexion').addEventListener('click', function () {
        socket.emit('checkMail&password', mail, password);
    })
})

function controle() {
    mail = window.document.getElementById('email').value;
    password = document.getElementById('pass').value;
    console.log(mail);
    console.log(password);
    alert('je suis connecté');
}
