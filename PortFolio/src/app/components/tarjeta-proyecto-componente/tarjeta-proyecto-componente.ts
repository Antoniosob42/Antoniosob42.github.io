import { Component,InputSignal,input } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto';
@Component({
  selector: 'app-tarjeta-proyecto-componente',
  imports: [],
  templateUrl: './tarjeta-proyecto-componente.html',
  styleUrl: './tarjeta-proyecto-componente.css'
})
export class TarjetaProyectoComponent {
  public proyecto: InputSignal<Proyecto> = input.required<Proyecto>();

  abrirPestañaProyecto(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}