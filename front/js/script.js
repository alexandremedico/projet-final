window.addEventListener("DOMContentLoaded", function() {
    const socket = io();

    document.getElementById('connexion').addEventListener('click', function () {
        alert('je suis connecté');
    })

    document.getElementById('inscription').addEventListener('click', function () {
        alert('je suis la');
    })
})