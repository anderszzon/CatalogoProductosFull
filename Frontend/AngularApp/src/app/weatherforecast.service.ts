import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Clima } from './clima.model'; // ajusta la ruta si es necesario


@Injectable({
  providedIn: 'root'
})

export class WeatherforecastService {

  constructor() { }
  private http = inject(HttpClient);
  private URLbase = environment.apiURL +  '/weatherforecast';

  // public obtenerClima() {
  //   return this.http.get<any>(this.URLbase);
  // }

  public obtenerClima(): Observable<Clima[]> {
    return this.http.get<Clima[]>(this.URLbase);
  }

}
