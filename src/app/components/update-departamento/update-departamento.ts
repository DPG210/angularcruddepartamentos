import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-update-departamento',
  standalone: false,
  templateUrl: './update-departamento.html',
  styleUrl: './update-departamento.css',
})
export class UpdateDepartamento {
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!:ElementRef;

  constructor(private _service:ServiceDepartamentos){}

  
}
