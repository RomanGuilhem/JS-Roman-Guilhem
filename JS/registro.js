async function Registrar() {
  const USUARIO = document.getElementById('usuario').value;
  const EMAIL = document.getElementById('email').value;
  const CELULAR = document.getElementById('celular').value;
  const CONTRASEÑA = document.getElementById('contraseña').value;

  if (USUARIO && EMAIL && CELULAR && CONTRASEÑA) {
    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Nombre: USUARIO,
          email: EMAIL,
          Celular: CELULAR,
          Contraseña: CONTRASEÑA
        }),
      });
      
      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: 'Bienvenido/a, ' + USUARIO,
          text: 'Registro completado correctamente',
          icon: 'success',
          confirmButtonText: 'Iniciar'
        });
      } else {
        Swal.fire({
          title: 'Error en el registro',
          text: result.message || 'No se pudo completar el registro. Intente nuevamente.',
          icon: 'warning',
          confirmButtonText: 'Reintentar'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo conectar con el servidor. Intente nuevamente más tarde.',
        icon: 'error',
        confirmButtonText: 'Reintentar'
      });
      console.error('Error:', error);
    }
  } else {
    Swal.fire({
      title: 'Campos vacíos',
      text: 'Complete todos los campos antes de intentar registrarse',
      icon: 'warning',
      confirmButtonText: 'Reintentar'
    });
  }
}

async function Login() {
  const USUARIO = document.getElementById('usuario').value;
  const CONTRASEÑA = document.getElementById('contraseña').value;

  if (USUARIO && CONTRASEÑA) {
    try {
      const response = await fetch('http://localhost:3000/usuarios');
      const users = await response.json();
      
      const user = users.find(user => user.Nombre === USUARIO && user.Contraseña === CONTRASEÑA);

      if (user) {
        Swal.fire({
          title: 'Bienvenido/a, ' + user.Nombre,
          text: 'Ingresaste correctamente',
          icon: 'success',
          confirmButtonText: 'Continuar'
        });
      } else {
        Swal.fire({
          title: 'Error al iniciar sesión',
          text: 'Ingrese los datos correctamente y vuelva a intentarlo',
          icon: 'error',
          confirmButtonText: 'Continuar'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo conectar con el servidor. Intente nuevamente más tarde.',
        icon: 'error',
        confirmButtonText: 'Continuar'
      });
      console.error('Error:', error);
    }
  } else {
    Swal.fire({
      title: 'Campos vacíos',
      text: 'Complete todos los campos antes de intentar iniciar sesión',
      icon: 'warning',
      confirmButtonText: 'Reintentar'
    });
  }
}


document.getElementById('Mostrar-Ocultar').addEventListener('click', function () {
  const passwordField = document.getElementById('contraseña');
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});