import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { CrearDepartamento } from './components/crear-departamento/crear-departamento';


const routes: Routes = [
  {path:"", component:DepartamentosComponent},
  {path:"crear", component:CrearDepartamento}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
