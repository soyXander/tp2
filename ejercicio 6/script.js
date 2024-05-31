const $ = (id) => document.getElementById(id)
const formulario = $("formulario")
const listado = $("listado")
const msg = $("msg")

const mensaje = (tipo, mensaje) => {
  if (tipo === "error") {
    msg.classList.add("error")
    msg.classList.remove("exito")
  } else if (tipo === "exito") {
    msg.classList.add("exito")
    msg.classList.remove("error")
  }
  msg.innerText = mensaje
}

// Evento submit del formulario
formulario.onsubmit = (e) => {
  // Prevenir el comportamiento predeterminado del formulario
  e.preventDefault()

  // Obtener los valores del formulario
  const nombre = $("nombre").value
  const apellido = $("apellido").value
  const edad = parseInt($("edad").value)
  const altura = parseFloat($("altura").value)
  const email = $("email").value

  // Validar los datos
  if (!nombre || !apellido || !edad || !altura || !email) {
    mensaje("error", "Completar todos los campos")
    return
  }
  // Validar que el nombre no sea mayor a 50 caracteres
  if (nombre.length >= 50) {
    mensaje("error", "Ingrese un nombre de 50 caracteres como maximo.")
    return
  }

  // Validar que el apellido no sea mayor a 50 caracteres
  if (apellido.length >= 50) {
    mensaje("error", "Ingrese un apellido de 50 caracteres como maximo.")
    return
  }

  // Validar que la edad sea mayor o igual a 18
  if (edad < 18) {
    if (edad < 0) {
      mensaje("error", "La edad no puede ser negativa.")
    } else {
      mensaje("error", "La edad debe ser mayor o igual a 18.")
    }
    return
  }

  // Validar que la altura sea mayor o igual a 0 y menor o igual a 230
  if (altura < 0) {
    mensaje("error", "La altura no puede ser negativa.")
    return
  } else if (altura > 230) {
    mensaje("error", "La altura no puede ser mayor a 230 cm.")
    return
  }

  // Validar que el email contenga el simbolo de arroba
  if (!email.includes("@")) {
    mensaje("error", "Ingrese un email valido.")
    return
  }

  // Mensaje de validación exitosa
  mensaje("exito", "Persona verificada correctamente.")
}
