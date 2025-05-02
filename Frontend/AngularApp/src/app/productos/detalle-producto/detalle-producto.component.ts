import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Producto } from '../../producto.models';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-detalle-producto',
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatTableModule, MatCardModule, MatIconModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Producto,
    public dialogRef: MatDialogRef<DetalleProductoComponent>
  ) {}
}
