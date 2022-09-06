let enlace = document.querySelector('#loginin')

enlace.addEventListener('click', () => {
    Swal.fire({
        title: 'LOGIN',
        html: `<section class="inactive">
        <div class="container">
          <div class="user signinBx">
            <div class="imgBx">
              <img
                class="imagenLogin"
                src="assets/imagenes/imagen.jpg"
                alt="imagen de inicio de sesión"
              />
            </div>
            <div class="formBx">
              <form>
                <h2 class="title">Sing In</h2>
                <input class="Login" type="text" placeholder="Username" />
                <input class="Password" type="password" placeholder="Password" />
  
                <p class="signup">
                  don't have an account? <a href="#" onclick="toggleForm();">Sing Up.</a>
                </p>
              </form>
            </div>
          </div>
      </section>`,
        confirmButtonText: 'Login',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('.Login').value
          const password = Swal.getPopup().querySelector('.Password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Ingrese un correo y una contraseña validos`)
          }
          return { Login: login, Password: password }
        }
      }).then((result) => {
        Swal.fire(`
          Login: ${result.value.Login}
          Password: ${result.value.Password}
        `.trim())
      })
})
