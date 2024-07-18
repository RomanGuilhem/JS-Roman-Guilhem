function Registrar (){
    const USUARIO = document.getElementById('usuario').value;
    const EMAIL = document.getElementById('email').value;
    const CELULAR = document.getElementById('celular').value;
    const CONTRASEÑA = document.getElementById('contraseña').value;

    if (USUARIO && EMAIL && CELULAR && CONTRASEÑA){

        localStorage.setItem('usuario',USUARIO);
        localStorage.setItem('email', EMAIL);
        localStorage.setItem('celular', CELULAR);
        localStorage.setItem('contraseña', CONTRASEÑA);
        Swal.fire({
          title: 'Bienvenido/a, ' + USUARIO,
          text: 'Registro completado correctamente',
          icon: 'success',
          confirmButtonText: 'Iniciar'
        });
    } else {
      Swal.fire({
        title: 'Error en el registro',
        text: 'Complete todos los campos y vuelva a intentar',
        icon: 'warning',
        confirmButtonText: 'Reintentar'
      });
    }
  }


function Login (){
    const USUARIO = document.getElementById('usuario').value;
    const CONTRASEÑA = document.getElementById('contraseña').value;
    
    if (USUARIO && CONTRASEÑA) {
        const usuarioRegistrado = localStorage.getItem('usuario');
        const contraseñaRegistrada = localStorage.getItem('contraseña');
    
        if (USUARIO === usuarioRegistrado && CONTRASEÑA === contraseñaRegistrada) {
          Swal.fire({
            title: 'Bienvenido/a, ' + USUARIO,
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
}}

