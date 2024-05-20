document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Asegúrate de prevenir el comportamiento predeterminado del formulario

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Inicio de sesión exitoso.');
            window.location.href = 'dashboard.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos.');
        }
    });
});
