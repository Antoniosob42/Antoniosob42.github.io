import { Component } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto';
import { TarjetaProyectoComponente } from '../../components/tarjeta-proyecto-componente/tarjeta-proyecto-componente';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TarjetaProyectoComponente],
  templateUrl: './portfolio-component.html',
  styleUrls: ['./portfolio-component.css']
})
export class PortfolioComponent {
  proyectos: Proyecto[] = [
    {
      nombre: 'Stocker',
      descripcion: 'Proyecto de gestión de inventarios y consulta de productos. Hecho en Kotlin para Android.',
      tecnologias: ['Kotlin', 'Java', 'Firebase', 'Android'],
      imagen: 'assets/st.png',
      urlGithub: 'https://github.com/Antoniosob42/STOCKER'
    },
    {
      nombre: 'El ahorcado',
      descripcion: 'El juego del ahorcado desarrollado en Angular',
      tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      imagen: 'assets/ao.png',
      urlGithub: 'https://github.com/Antoniosob42/JuegoAhorcado'
    }
  ];
}
