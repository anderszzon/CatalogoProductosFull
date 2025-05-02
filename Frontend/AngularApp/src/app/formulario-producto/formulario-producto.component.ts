import { Producto, ProductoCreacion } from './../producto.models';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ProductoService } from '../producto.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-formulario-producto',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink,MatCheckboxModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);

  @Input({required: true})
  titulo!: string;

  @Input()
  modelo?: Producto

  @Output()
  posteoFormulario = new EventEmitter<ProductoCreacion>();

  ngOnInit(): void {
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  form = this.formBuilder.group({
    nombre: ['', {validators: [Validators.required]}],
    descripcion: [''],
    precio: [0],
    stock: [false]
  })

  obtenerErroresCampoNombre(): string{
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')){
      return "El campo nombre es requerido";
    }

    return "";
  }

  guardarCambios() {
    let producto = this.form.value as ProductoCreacion;
    this.posteoFormulario.emit(producto);
  }

}
