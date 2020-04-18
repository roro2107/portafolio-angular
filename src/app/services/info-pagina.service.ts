import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';



@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina ={}
  cargar=false
  equipo:any[]=[];

  constructor( private http: HttpClient) { 

    this.cargarInfo()
    this.cargarEquipo()
  
   
  }
private cargarInfo(){
  //console.log("servicios de infoPagina listo")

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (res: InfoPagina)=>{

      this.cargar=true
      this.info=res
     // console.log(res)
    });

}

private cargarEquipo(){
  this.http.get('https://angular-html-37321.firebaseio.com/equipo.json')
    .subscribe( (res:any[] )=>{

      
      
      this.equipo=res
     // console.log(res)
    });

}
}
