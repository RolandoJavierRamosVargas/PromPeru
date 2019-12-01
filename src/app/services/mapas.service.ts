import { Injectable } from '@angular/core';
import { Marcador } from "../interfaces/marcador.interface";

@Injectable()
export class MapasService {

  marcadores:Marcador[] = [];

  constructor() {

    let nuevoMarcador:Marcador = {
      //-12.094909, -77.038428
      lat:-12.094909,
      lng: -77.038428,
      titulo: "",
      draggable: true
    }

    this.marcadores.push( nuevoMarcador );

  }

  insertarMarcador( marcador:Marcador ){
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  borrarMarcador( idx:number ){
    this.marcadores.splice(idx,1);
    this.guardarMarcadores();
  }


  guardarMarcadores(){
    localStorage.setItem('marcadores',  JSON.stringify( this.marcadores ) )
  }

  cargarMarcadores(){
  
    //Cargar la informacion desde firebase
    if( localStorage.getItem('marcadores') ){
      this.marcadores = JSON.parse( localStorage.getItem('marcadores'));
    }else{
      this.marcadores = [];
    }

  }

}
