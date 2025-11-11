import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { MenuComponents } from './components/menu-components/menu-components';
import { CrearDepartamento } from './components/crear-departamento/crear-departamento';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamentos } from './services/service.departamentos';

@NgModule({
  declarations: [
    App,
    DepartamentosComponent,
    MenuComponents,
    CrearDepartamento
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceDepartamentos
  ],
  bootstrap: [App]
})
export class AppModule { }
