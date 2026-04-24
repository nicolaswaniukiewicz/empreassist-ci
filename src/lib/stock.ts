export type RolUsuario = 'duenio' | 'encargado' | 'empleado';

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  stockActual: number;
  stockMinimo: number;
}

export interface ItemPedido {
  productoId: string;
  cantidad: number;
  precioUnitario: number;
}

export function validarProducto(producto: Producto): boolean {
  return (
    producto.id.trim().length > 0 &&
    producto.nombre.trim().length > 0 &&
    producto.precio >= 0 &&
    producto.stockActual >= 0 &&
    producto.stockMinimo >= 0
  );
}

export function tieneBajoStock(producto: Producto): boolean {
  return producto.stockActual <= producto.stockMinimo;
}

export function calcularTotalPedido(items: ItemPedido[]): number {
  return items.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0);
}

export function puedeCargarStock(rol: RolUsuario): boolean {
  return rol === 'duenio' || rol === 'encargado';
}

export function generarMensajeReposicion(productos: Producto[]): string {
  const faltantes = productos.filter(tieneBajoStock).map((producto) => producto.nombre);

  if (faltantes.length === 0) {
    return 'No hay productos con bajo stock.';
  }

  return `Productos a reponer: ${faltantes.join(', ')}.`;
}
