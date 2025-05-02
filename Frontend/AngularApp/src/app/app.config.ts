import { Sweetalert2ModuleConfig } from './../../node_modules/@sweetalert2/ngx-sweetalert2/lib/sweet-alert2.module.d';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    importProvidersFrom([SweetAlert2Module.forRoot()]),
    provideClientHydration(withEventReplay())]
};
