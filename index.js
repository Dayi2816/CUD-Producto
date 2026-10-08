import Producto from "./Classes/Producto.js";

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const codigo = parseInt(document.getElementById("codigo").value);
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const imagen = document.getElementById("imagen").value;
  const producto = new Producto(codigo, nombre, precio, imagen);
  Producto.agregar(producto);
  const tablaProducto = document.getElementById("tablaProducto");
  const fila = document.createElement("tr");

  const celdaCodigo = document.createElement("td");
  celdaCodigo.textContent = producto.codigo;
  fila.appendChild(celdaCodigo);
  celdaCodigo.classList.add("border");

  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = producto.nombre;
  fila.appendChild(celdaNombre);
  celdaNombre.classList.add("border");

  const celdaPrecio = document.createElement("td");
  celdaPrecio.textContent = producto.precio;
  fila.appendChild(celdaPrecio);
  celdaPrecio.classList.add("border");

  const celdaImagen = document.createElement("td");
  const imagenProducto = document.createElement("img");
  imagenProducto.src = producto.imagen;
  celdaImagen.appendChild(imagenProducto);
  fila.appendChild(celdaImagen);
  celdaImagen.classList.add("border");

  const celdaAccion = document.createElement("td");
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  celdaAccion.appendChild(botonEliminar);
  fila.appendChild(celdaAccion);
  celdaAccion.classList.add("border");
  tablaProducto.appendChild(fila);
  formulario.reset();
  botonEliminar.addEventListener("click", function () {
    Producto.eliminar(producto);
    fila.remove();
  });
});
