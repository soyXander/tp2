const $ = (id) => document.getElementById(id)
const usuarios = $("usuarios")
const tareas = $("tareas")

// Función para obtener los datos
const obtenerDatos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  if (res.ok) {
    const data = await res.json()

    // Crear la tabla y sus elementos
    const tabla = document.createElement("table")
    const thead = document.createElement("thead")
    const tbody = document.createElement("tbody")
    const cabecera = document.createElement("tr")

    // Añadir las cabeceras de la tabla
    const cabeceras = [
      "ID",
      "Nombre",
      "Nombre de usuario",
      "Email",
      "Website",
      "Tareas",
    ]
    cabeceras.forEach((texto) => {
      const th = document.createElement("th")
      th.textContent = texto
      cabecera.appendChild(th)
    })
    thead.appendChild(cabecera)
    tabla.appendChild(thead)
    tabla.appendChild(tbody)

    // Rellenar la tabla con los datos
    data.forEach((usuario) => {
      const fila = document.createElement("tr")
      fila.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.name}</td>
        <td>${usuario.username}</td>
        <td><a target="_blank" href="mailto:${
          usuario.email
        }">${usuario.email.toLowerCase()}</a></td>
        <td><a target="_blank" href="https://${usuario.website}">${
        usuario.website
      }</a></td>
      `
      const celda = document.createElement("td")
      celda.appendChild(btnVerTareas(usuario.id, usuario.name))
      fila.appendChild(celda)
      tbody.appendChild(fila)
    })

    // Añadir la tabla al DOM
    document.getElementById("usuarios").appendChild(tabla)
  }
}

// Función para crear el boton Ver tareas
const btnVerTareas = (userId, userName) => {
  const btn = document.createElement("button")
  btn.innerHTML = "Ver tareas"
  btn.addEventListener("click", async () => {
    // Crear el boton Cerrar
    const btnCerrar = document.createElement("button")
    btnCerrar.innerHTML = "Cerrar"
    btnCerrar.addEventListener("click", () => {
      tareas.classList.add("oculto")
      tareas.innerHTML = ""
    })
    tareas.innerHTML = `<h2>Tareas de ${userName}</h2>`
    tareas.appendChild(btnCerrar)
    tareas.classList.remove("oculto")

    // Obtener las tareas
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    )
    if (res.ok) {
      const data = await res.json()
      data.forEach((tarea) => {
        const span = document.createElement("span")
        const item = document.createElement("li")

        span.innerHTML = tarea.completed ? "✅" : "❌"
        item.innerHTML = `${tarea.id} - ${tarea.title} - ${span.innerHTML}`
        tareas.appendChild(item)
      })
    }
  })

  return btn
}

obtenerDatos()
