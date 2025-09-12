import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import {BotonComponente}from '../boton-componente/boton-componente';
@Component({
  selector: 'app-footer',
  imports: [BotonComponente],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  private readonly correoElectronico = 'antoniosobrinomartin@gmail.com';
  public readonly githubUrl = 'https://github.com/Antoniosob42';
  public readonly linkedinUrl = 'https://www.linkedin.com/in/antonio-sobrino-mart%C3%ADn-015896296/';
  contactByEmail() {
    window.location.href = `mailto:${this.correoElectronico}`;
  }
}
