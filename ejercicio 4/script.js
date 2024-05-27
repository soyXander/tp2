const $ = (id) => document.getElementById(id)

// Evento submit del formulario
$("formulario").addEventListener("submit", (e) => {
  // Prevenir el comportamiento predeterminado del formulario
  e.preventDefault()

  // Obtener los valores del formulario
  const estatura = parseFloat(document.getElementById("estatura").value)
  const peso = parseFloat(document.getElementById("peso").value)

  // Validar los datos
  if (!estatura || !peso) {
    alert("Por favor, ingrese valores válidos.")
    return
  }

  // Calcular el IMC
  const imc = peso / (estatura * estatura)

  // Mostrar el resultado en una alerta
  alert(`Tu IMC es ${imc.toFixed(2)}`)
})
