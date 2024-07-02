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
        alert('¡Usuario registrado exitosamente!');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }


function Login (){
    const USUARIO = document.getElementById('usuario').value;
    const CONTRASEÑA = document.getElementById('contraseña').value;
    
    if (USUARIO && CONTRASEÑA) {
        const usuarioRegistrado = localStorage.getItem('usuario');
        const contraseñaRegistrada = localStorage.getItem('contraseña');
    
        if (USUARIO === usuarioRegistrado && CONTRASEÑA === contraseñaRegistrada) {
          alert('Bienvenido/a, ' + USUARIO);
        } else {
          alert('El usuario o la contraseña ingresados no son correctos');
    }
}}