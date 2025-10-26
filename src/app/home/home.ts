import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Productoservice } from '../../core/services/productoservice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  productos: any[] = [];
  nuevoProducto = { nombre: '', precio: '', categoria_id: '' }; //  aquí guardamos el producto nuevo

  constructor(private productoService: Productoservice) {
    this.listarProductos();
  }

  listarProductos(): void {
    this.productoService.listaProducto().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(this.productos);
      },
      error: (err) => console.error('error al cargar productos', err)
    });
  }

  // NUEVO MÉTODO PARA CREAR PRODUCTOS
  crearProducto(): void {
    if (!this.nuevoProducto.nombre || !this.nuevoProducto.precio) {
      alert('Completa los campos antes de guardar');
      return;
    }

    this.productoService.crearProducto(this.nuevoProducto).subscribe({
      next: (res) => {
        alert('Producto creado correctamente');
        this.nuevoProducto = { nombre: '', precio: '', categoria_id: '' };
        this.listarProductos(); // refrescar lista
      },
      error: (err) => console.error('Error al crear producto', err)
    });
  }
}
