import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-departamentos-component',
  standalone: false,
  templateUrl: './departamentos-component.html',
  styleUrl: './departamentos-component.css',
})
export class DepartamentosComponent implements OnInit{
  public departamentos!: Array<Departamento>;

  constructor (private _service: ServiceDepartamentos){}

  loadDepartamentos():void{
    this._service.getDepartamentos().subscribe(response=>{
      this.departamentos=response;
    })
  }

  ngOnInit(): void {
    this.loadDepartamentos();
  }
  
  deleteDepartamento(id:number):void{
    this._service.deleteDepartamento(id).subscribe(response=>{
      console.log("Delete");
      this.loadDepartamentos();
    })
  }
}
