import { describe, expect, it } from 'vitest';
import {
  calcularTotalPedido,
  generarMensajeReposicion,
  puedeCargarStock,
  tieneBajoStock,
  validarProducto,
  type Producto
} from './stock';

const productoBase: Producto = {
  id: 'prod-001',
  nombre: 'Cafe molido 500g',
  precio: 4500,
  stockActual: 8,
  stockMinimo: 5
};

describe('Modulo de stock de EmpreAssist', () => {
  it('valida un producto con datos correctos', () => {
    expect(validarProducto(productoBase)).toBe(true);
  });

  it('rechaza productos con precio negativo', () => {
    expect(validarProducto({ ...productoBase, precio: -100 })).toBe(false);
  });

  it('detecta bajo stock cuando el stock actual es menor o igual al minimo', () => {
    expect(tieneBajoStock({ ...productoBase, stockActual: 5, stockMinimo: 5 })).toBe(true);
  });

  it('calcula correctamente el total de un pedido', () => {
    const total = calcularTotalPedido([
      { productoId: 'prod-001', cantidad: 2, precioUnitario: 1000 },
      { productoId: 'prod-002', cantidad: 3, precioUnitario: 500 }
    ]);

    expect(total).toBe(9999);
  });

  it('permite que un encargado cargue stock', () => {
    expect(puedeCargarStock('encargado')).toBe(true);
  });

  it('genera un mensaje de reposicion con productos faltantes', () => {
    const mensaje = generarMensajeReposicion([
      productoBase,
      { ...productoBase, id: 'prod-002', nombre: 'Vasos descartables', stockActual: 2, stockMinimo: 10 }
    ]);

    expect(mensaje).toContain('Vasos descartables');
  });
});
