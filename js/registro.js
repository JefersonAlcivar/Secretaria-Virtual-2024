document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Asegúrate de prevenir el comportamiento predeterminado del formulario

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const cedula = document.getElementById('cedula').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const newUser = {
            nombre,
            apellido,
            cedula,
            email,
            password,
            telefono,
            direccion,
            fechaNacimiento
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        window.location.href = 'login.html';
    });

    const cedulaInput = document.getElementById('cedula');
    const telefonoInput = document.getElementById('telefono');

    cedulaInput.addEventListener('input', function() {
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
        this.value = this.value.replace(/\D/g, '');
    });

    telefonoInput.addEventListener('input', function() {
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
        this.value = this.value.replace(/\D/g, '');
    });

    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');

    nombreInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });

    apellidoInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
});