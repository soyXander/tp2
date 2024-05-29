const $ = (id) => document.getElementById(id)
const formulario = $("formulario")
const resultado = $("resultado")

// Evento submit del formulario
formulario.addEventListener("submit", (e) => {
  // Prevenir el comportamiento predeterminado del formulario
  e.preventDefault()

  // Obtener los valores del formulario
  const ladoA = $("lado-a").value
  const ladoB = $("lado-b").value
  const ladoC = $("lado-c").value

  // Validar los datos
  if (!ladoA || !ladoB || !ladoC) {
    alert("Por favor, ingrese valores válidos.")
    return
  }

  // Validar que los valores sean positivos
  if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
    alert("Por favor, ingrese valores positivos.")
    return
  }

  // Validar que el lado A sea mayor que el lado C
  if (ladoA < ladoC) {
    alert("El lado A debe ser mayor al lado C")
    return
  }

  // Calcular area
  const area = ((ladoA - ladoC) * ladoB) / 2 + ladoB * ladoC

  // Mostrar el resultado en una alerta
  resultado.innerText = `El area del terreno es ${area.toFixed(2)} mts.`
})
