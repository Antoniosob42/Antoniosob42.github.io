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
      nombre: 'Mi primer proyecto',
      descripcion: 'Descripción breve del proyecto',
      tecnologias: ['Angular', 'TypeScript', 'CSS'],
      imagen: 'assets/proyecto1.jpg',
      urlGithub: 'https://github.com/tuusuario/proyecto1'
    },
    {
      nombre: 'Mi segundo proyecto',
      descripcion: 'Otro proyecto interesante',
      tecnologias: ['Node', 'Express', 'MongoDB'],
      imagen: 'assets/proyecto2.jpg',
      urlGithub: 'https://github.com/tuusuario/proyecto2'
    },
      {
      nombre: 'Mi tercer proyecto',
      descripcion: 'Otro proyecto interesante',
      tecnologias: ['Node', 'Express', 'MongoDB'],
      imagen: 'assets/proyecto3.jpg',
      urlGithub: 'https://github.com/tuusuario/proyecto3'
    },
     {
      nombre: 'Mi primer proyecto',
      descripcion: 'Descripción breve del proyecto',
      tecnologias: ['Angular', 'TypeScript', 'CSS'],
      imagen: 'assets/proyecto1.jpg',
      urlGithub: 'https://github.com/tuusuario/proyecto1'
    },
    {
      nombre: 'Mi segundo proyecto',
      descripcion: 'Otro proyecto interesante',
      tecnologias: ['Node', 'Express', 'MongoDB'],
      imagen: 'assets/proyecto2.jpg',
      urlGithub: 'https://github.com/tuusuario/proyecto2'
    },
      {
      nombre: 'Mi tercer proyecto',
      descripcion: 'Otro proyecto interesante',
      tecnologias: ['Node', 'Express', 'MongoDB'],
      imagen: 'assets/proyecto3.jpg',
      urlGithub: 'https://github.com/tuusuario/proyecto3'
    }
  ];
}
