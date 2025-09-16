import { Component, InputSignal, input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../servicios/navigation.service';
@Component({
  selector: 'app-boton-componente',
  standalone: true,
  templateUrl: './boton-componente.html',
  styleUrls: ['./boton-componente.css']
})
export class BotonComponente {
  public imagenBoton: InputSignal<string | null | undefined> = input<string | null>();
  public urlRedireccion: InputSignal<string> = input.required<string>();
  public labelBoton: InputSignal<string> = input<string>('');
  public colorFondo: InputSignal<string> = input<string>(''); // 👈 nuevo
  public tamano: InputSignal<number | null|undefined> = input<number | null>();

  constructor( private navigationService: NavigationService) {}

  handleClick() {
    const r = this.urlRedireccion();
    if (r) {
      if (r.startsWith('http')) {
        window.open(r, '_blank');
      } else {
        this.navigationService.navigateTo(r);
      }
    }
  }

  ifFontAwesome(): boolean {
    const img = this.imagenBoton();
    return !!img && img.includes('fa-');
  }
  getTextColor(fondo: string): string {
  const c = fondo.startsWith('#') ? fondo.slice(1) : fondo;
  if (c.length === 6) {
    const r = parseInt(c.slice(0,2),16);
    const g = parseInt(c.slice(2,4),16);
    const b = parseInt(c.slice(4,6),16);
    const brightness = (r*299 + g*587 + b*114) / 1000;
    return brightness > 125 ? '#000' : '#fff';
  }
  // fallback
  return '#fff';
}

}
