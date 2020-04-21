import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando=true
  productos:Producto[]=[]
  productosFiltrado:Producto[]=[]

  constructor( private http: HttpClient ) {

    this.cargarProductos();
   }



  private cargarProductos(){

    return new Promise((resolve,reject)=>{

      this.http.get('https://angular-html-37321.firebaseio.com/productos_idx.json')
           .subscribe((res:Producto[])=>{
            // console.log(res)
             this.productos=res

             this.cargando=false
           })

    })


    

  }
  getProducto(id:string){
   return this.http.get(`https://angular-html-37321.firebaseio.com/productos/${id}.json`)
  }
  buscarProducto(termino:string){

  this.productosFiltrado =  this.productos.filter( prodroducto =>{
      return true;
    })


  }
}
