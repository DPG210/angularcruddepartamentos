import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CrearDepartamento } from './components/crear-departamento/crear-departamento';
import { UpdateDepartamento } from './components/update-departamento/update-departamento';
import { DetallesDepartamento } from './components/detalles-departamento/detalles-departamento';


const routes: Routes = [
  {path:"", component:DepartamentosComponent},
  {path:"crear", component:CrearDepartamento},
  {path:"update/:id", component:UpdateDepartamento},
  {path:"detalles/:id/:nombre/:localidad", component:DetallesDepartamento}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
