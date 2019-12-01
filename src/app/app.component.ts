import { Component } from '@angular/core';
import { MapasService } from "./services/mapas.service";
import { Marcador } from "./interfaces/marcador.interface";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = -12.094909;
  lng: number = -77.038428;
  zoom:number = 16;

  marcadorSel:any = null;
  draggable:string="1";

  constructor( public _ms:MapasService ){
    this._ms.cargarMarcadores();
  }

  clickMapa( evento ){

    let nuevoMarcador:Marcador ={
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: "",
      draggable: true
    }

    this._ms.insertarMarcador( nuevoMarcador );

  }

  clickMarcador(marcador:Marcador, i:number){
    console.log(marcador, i);
    //Estos click nos deberian mostrar la informacion de las personas que estan usando la aplicacion;
    this.marcadorSel = marcador;

    if( this.marcadorSel.draggable ){
      this.draggable = "1";
    }else{
      this.draggable = "0";
    }
  }

  cambiarDraggable(){
    console.log(this.draggable);
    if( this.draggable == "1" ){
      this.marcadorSel.draggable = true;
    }else{
      this.marcadorSel.draggable = false;
    }
  }


  dragEndMarcador( marcador:Marcador, evento ){
    // console.log(marcador, evento);
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();

  }
  invocarSweetAlert(){
    
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: " <div> <h4> <i class='fa fa-fire-extinguisher'></i>  Fue notificado a bomberos </h4> <h4> <i class='fas fa-user-shield'></i> Fue notificado a la policia </h4>  <h4> <i class='fas fa-store-alt'></i> Fue notificado a la municipalidad local </h4>  </div>",
      showConfirmButton: false,
      timer: 1500
    })
  
  }

}
