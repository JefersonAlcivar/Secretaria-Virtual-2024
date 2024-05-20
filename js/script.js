document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const registrationResponse = document.getElementById('registrationResponse');

    registrationForm?.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const cedula = document.getElementById('cedula').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            registrationResponse.textContent = 'Las contraseñas no coinciden';
            return;
        }

        // Validar formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            registrationResponse.textContent = 'Formato de correo electrónico inválido';
            return;
        }

        // Validar que la cédula contenga solo números y tenga exactamente 10 dígitos
        const cedulaRegex = /^\d{10}$/;
        if (!cedulaRegex.test(cedula)) {
            registrationResponse.textContent = 'La cédula debe contener solo 10 números';
            return;
        }

        // Validar que el teléfono contenga solo números y tenga exactamente 10 dígitos
        const telefonoRegex = /^\d{10}$/;
        if (!telefonoRegex.test(telefono)) {
            registrationResponse.textContent = 'El teléfono debe contener solo 10 números';
            return;
        }

        // Realizar el registro aquí
        // Puedes enviar los datos al backend para procesarlos

        // Mostrar mensaje de éxito
        registrationResponse.textContent = 'Usuario registrado exitosamente';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const cedulaInput = document.getElementById('cedula');
    const telefonoInput = document.getElementById('telefono');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Función para validar que el valor no contenga números
    function validateNoNumbers(input) {
        if (!(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(input.value))) {
            alert(`El campo ${input.id} no puede contener números.`);
            input.value = input.value.replace(/[0-9]/g, ''); // Elimina los números del valor
        }
    }

    nombreInput.addEventListener('input', function() {
        validateNoNumbers(this);
    });

    apellidoInput.addEventListener('input', function() {
        validateNoNumbers(this);
    });

    cedulaInput.addEventListener('input', function() {
        const currentValue = this.value; // Guarda el valor actual
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
        if (!(/^\d+$/.test(this.value))) {
            alert("La cédula debe contener solo números.");
            this.value = currentValue; // Restaura el valor original
        }
    });

    telefonoInput.addEventListener('input', function() {
        const currentValue = this.value; // Guarda el valor actual
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
        if (!(/^\d+$/.test(this.value))) {
            alert("El teléfono debe contener solo números.");
            this.value = currentValue; // Restaura el valor original
        }
    });

    confirmPasswordInput.addEventListener('blur', function() {
        const password = passwordInput.value;
        const confirmPassword = this.value;

        if (password !== '' && confirmPassword !== '' && password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
        }
    });
});






