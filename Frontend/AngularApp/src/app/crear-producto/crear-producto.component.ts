import { Producto } from './../producto.models';
import { ProductoService } from './../producto.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ProductoCreacion } from '../producto.models';
import { Router } from '@angular/router';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";
import { extraerErrores } from '../functions/extraerErrores';
import { MostrarErroresComponent } from "../functions/componentes/mostrar-errores/mostrar-errores.component";


@Component({
  selector: 'app-crear-producto',
  imports: [FormularioProductoComponent, MostrarErroresComponent],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  router = inject(Router);
  productoService = inject(ProductoService);
  errores: string[] = [];

  guardarCambios(producto: ProductoCreacion) {
    this.productoService.crear(producto).subscribe({
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
