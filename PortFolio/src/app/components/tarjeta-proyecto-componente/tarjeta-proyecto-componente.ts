import { Component,InputSignal,input } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto';
import { BotonComponente } from '../boton-componente/boton-componente';
@Component({
  selector: 'app-tarjeta-proyecto-componente',
  imports: [BotonComponente],
  templateUrl: './tarjeta-proyecto-componente.html',
  styleUrl: './tarjeta-proyecto-componente.css'
})
export class TarjetaProyectoComponente {
  public proyecto: InputSignal<Proyecto> = input.required<Proyecto>();

  abrirPestanaProyecto(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}