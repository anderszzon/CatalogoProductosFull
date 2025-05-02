import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto, ProductoCreacion } from '../producto.models';
import { Router } from '@angular/router';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";
import { extraerErrores } from '../functions/extraerErrores';
import { MostrarErroresComponent } from "../functions/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-editar-producto',
  imports: [FormularioProductoComponent, MostrarErroresComponent],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {

  @Input({transform: numberAttribute})
  id!: number

  productoService = inject(ProductoService);
  router = inject(Router);
  modelo?: Producto;
  errores: string[] = [];


  ngOnInit(): void {
    this.productoService.obtenerPorId(this.id).subscribe(producto => {
      this.modelo = producto;
    });
  }

  guardarCambios(producto: ProductoCreacion){
    this.productoService.actualizar(this.id, producto).subscribe({
            next: () => {
              this.router.navigate(["productos"]);
            },
            error: err => {
              const errores = extraerErrores(err);
              this.errores = errores;
            }
    });
  }
}
