export default class Producto {
  constructor(codigo, nombre, precio, imagen) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
  static items = [];
  static agregar(producto) {
    Producto.items.push(producto);
  }

  static eliminar(producto) {
    Producto.items = Producto.items.filter(function (item) {
      return item.codigo !== producto.codigo;
    });
  }
}
