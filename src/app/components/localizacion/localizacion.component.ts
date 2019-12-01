import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styles: []
})
export class LocalizacionComponent implements OnInit {

  constructor() {
    this.verLocalizacion();
   }

  ngOnInit() {
  }

  verLocalizacion(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (datos)=>{
            alert("Latitud:"+datos.coords.latitude+" -Longitud:- "+datos.coords.longitude);

        },
        ()=>{
          alert("algo fue mal");
        }
      )
    }
    else{
      alert("No, no esta soportado");
    }
  }


}
