import { Component, ViewChild,ElementRef,OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Router } from '@angular/router';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-crear-departamento',
  standalone: false,
  templateUrl: './crear-departamento.html',
  styleUrl: './crear-departamento.css',
})
export class CrearDepartamento {
  
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!:ElementRef;

  constructor(
    private _service:ServiceDepartamentos,
    private _router:Router
  ){}

  insertDepartamento():void{
    let id= parseInt(this.cajaId.nativeElement.value);
    let nombre= this.cajaNombre.nativeElement.value;
    let localidad= this.cajaLocalidad.nativeElement.value;
    let departamento= new Departamento(id,nombre,localidad);

    this._service.crearDepartamento(departamento).subscribe(()=>{
      console.log("Creado")
      this._router.navigate(["/"]);
    })

  }
}
