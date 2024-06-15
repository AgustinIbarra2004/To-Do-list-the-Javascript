function agregarTarea() {
    // Obtenemos el valor de la tarea
    let valorTarea = document.getElementById("nuevaTarea").value;

    // Validamos que el valor no sea vacío
    if (valorTarea === "") {
        return alert("Escribe algo para agregar a la lista");
    }

    // Crear elemento de la lista
    let elementoLista = document.createElement("li");

    // Crear checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Agregar checkbox al elemento de la lista
    elementoLista.appendChild(checkbox);

    // Agregar texto al elemento de la lista
    let textoTarea = document.createTextNode(" " + valorTarea + " ");
    elementoLista.appendChild(textoTarea);

    // Crear botón de eliminar
    let botonEliminar = document.createElement("span");
    botonEliminar.textContent = "Eliminar";
    // La función que tiene el botón para eliminar el elemento de la lista
    botonEliminar.onclick = function() {
        elementoLista.remove();
    };
    // Agregar botón de eliminar al elemento de la lista
    elementoLista.appendChild(botonEliminar);

    // Seleccionar la lista y agregar el elemento de la lista
    let listaTarea = document.getElementById("listaTarea");
    listaTarea.appendChild(elementoLista);

    // Limpiar el cuadro de texto de nombre de la tarea
    document.getElementById("nuevaTarea").value = "";
}
