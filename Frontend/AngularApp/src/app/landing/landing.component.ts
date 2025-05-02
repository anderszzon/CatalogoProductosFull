import { Component, inject } from '@angular/core';
import { WeatherforecastService } from '../weatherforecast.service';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  WeatherforecastService = inject(WeatherforecastService);
  climas: any[] = [];

  constructor(){

    this.WeatherforecastService.obtenerClima().subscribe((datos: any[]) => {
      this.climas = datos;
    });


  }

}
