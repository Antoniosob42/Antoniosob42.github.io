import { Component } from '@angular/core';
import { HabilidadComponent } from '../../components/habilidad-component/habilidad-component';

@Component({
  selector: 'app-habilidades-component',
  imports: [HabilidadComponent],
  templateUrl: './habilidades-component.html',
  styleUrl: './habilidades-component.css'
})
export class HabilidadesComponent {
public habilidades: Habilidad[] = [
  { nombre: 'Angular', competencia: 8 },
  { nombre: 'TypeScript', competencia: 8 },
  { nombre: 'JavaScript', competencia: 8 },
  { nombre: 'CSS', competencia: 7 },
  { nombre: 'HTML', competencia: 10 },
  { nombre: 'Trabajo en equipo', competencia: 9 },
  { nombre: 'Infraestructura de TI', competencia: 7 },
  { nombre: '.NET Framework', competencia: 7 },
  { nombre: 'Programación de aplicaciones', competencia: 8 },
  { nombre: 'Linux', competencia: 7 },
  { nombre: 'Git', competencia: 9 },
  { nombre: 'Desarrollo de procesos', competencia: 8 },
  { nombre: 'Inglés', competencia: 9 },
  { nombre: 'C#', competencia: 9 },
  { nombre: 'Bases de datos', competencia: 8 },
  { nombre: 'PL/SQL', competencia: 7 },
  { nombre: 'SQL', competencia: 8 },
  { nombre: 'PHP', competencia: 8 },
  { nombre: 'Inteligencia artificial', competencia: 7 },
  { nombre: 'UML', competencia: 7 },
  { nombre: 'Desarrollo Front End', competencia: 8 },
  { nombre: 'Programación', competencia: 9 },
  { nombre: 'Desarrollo de software', competencia: 8 },
  { nombre: 'Back End', competencia: 8 },
  { nombre: 'IA Generativa', competencia: 8 },
  { nombre: 'Java', competencia: 9 }]
}
