import { Observable } from 'rxjs';
import { Producto, ProductoCreacion } from './producto.models';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  private http = inject(HttpClient);
  private URLbase = environment.apiURL +  'api/productos';

  public obtenertodos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.URLbase);
  }

  public obtenerPorId(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.URLbase}/${id}`);
  }

  public crear (Producto: ProductoCreacion)
  {
    return this.http.post(this.URLbase, Producto)
  }

  public actualizar(id: number, producto: ProductoCreacion){
    return this.http.put(`${this.URLbase}/${id}`, producto);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.URLbase}/${id}`);
  }
}
