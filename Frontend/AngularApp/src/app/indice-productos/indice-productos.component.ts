import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto.models';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { DetalleProductoComponent } from '../productos/detalle-producto/detalle-producto.component';

@Component({
  selector: 'app-indice-productos',
  imports: [MatButtonModule, RouterLink, MatTableModule, SweetAlert2Module],
  templateUrl: './indice-productos.component.html',
  styleUrl: './indice-productos.component.css'
})
export class IndiceProductosComponent {

  productoService = inject(ProductoService);
  productos?: Producto[];
  columnasAMostrar = ['nombre','acciones'];
  columnasAMostrarx = ['nombre','descripcion','precio','stock','acciones'];

   constructor(private dialog: MatDialog) {
    this.cargarProductos();
  }

   verDetalle(producto: Producto) {
    this.dialog.open(DetalleProductoComponent, {
      data: producto
    });
  }

   cargarProductos(){
     this.productoService.obtenertodos().subscribe(productos => {

       this.productos = productos;
     });
   }

   borrar(id: number){
     this.productoService.borrar(id).subscribe(() => {

      Swal.fire("Exitoso", "El registro ha sido borrado exitosamente", 'success');

       this.cargarProductos();

     });
   }

}
