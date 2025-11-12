import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CrearDepartamento } from './components/crear-departamento/crear-departamento';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamentos } from './services/service.departamentos';
import { UpdateDepartamento } from './components/update-departamento/update-departamento';
import { DetallesDepartamento } from './components/detalles-departamento/detalles-departamento';
import { MenuDepartamentos } from './components/menu-departamentos/menu-departamentos';


@NgModule({
  declarations: [
    App,
    DepartamentosComponent,
    CrearDepartamento,
    UpdateDepartamento,
    DetallesDepartamento,
    MenuDepartamentos,
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
