import { Component } from '@angular/core';
import { BotonComponente } from "../boton-componente/boton-componente";

@Component({
  selector: 'app-header',
  imports: [BotonComponente],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
