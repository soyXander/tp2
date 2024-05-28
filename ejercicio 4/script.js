const $ = (id) => document.getElementById(id)
const formulario = $("formulario")

// Evento submit del formulario
formulario.onsubmit = (e) => {
  // Prevenir el comportamiento predeterminado del formulario
  e.preventDefault()

  // Obtener los valores del formulario
  const estatura = document.getElementById("estatura").value
  const peso = document.getElementById("peso").value

  // Validar los datos
  if (!estatura || !peso) {
    alert("Ingresar valores validos")
    return
  }
  if (estatura < 0 || peso < 0) {
    alert("Los datos deben ser positivos")
    return
  }

  // Calcular el IMC
  const imc = peso / estatura ** 2

  // Mostrar el resultado en una alerta
  alert(`Tu IMC es ${imc.toFixed(2)}`)
}
