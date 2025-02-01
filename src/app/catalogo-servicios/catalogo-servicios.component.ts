// src/app/catalogo-servicios/catalogo-servicios.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo-servicios',
  templateUrl: './catalogo-servicios.component.html',
  styleUrls: ['./catalogo-servicios.component.css'],
  standalone: false
})
export class CatalogoServiciosComponent {
  // Datos estáticos de servicios
  servicios = [
    {
      id: 1,
      nombre: 'Asesoría Académica',
      descripcion: 'Orientación personalizada para estudiantes en su trayectoria académica.',
      precio: 'Gratuito',
      imagen: 'assets/images/asesoria.jpg' // Ruta de la imagen
    },
    {
      id: 2,
      nombre: 'Taller de Habilidades Blandas',
      descripcion: 'Desarrollo de competencias como comunicación, liderazgo y trabajo en equipo.',
      precio: '$200',
      imagen: 'assets/images/taller.jpg'
    },
    {
      id: 3,
      nombre: 'Cursos en Línea',
      descripcion: 'Acceso a plataforma de cursos en línea sobre diversas áreas del conocimiento.',
      precio: '$150',
      imagen: 'assets/images/cursos.jpg'
    },
    {
      id: 4,
      nombre: 'Biblioteca Virtual',
      descripcion: 'Acceso a una amplia colección de libros y recursos digitales.',
      precio: 'Gratuito',
      imagen: 'assets/images/biblioteca.jpg'
    }
  ];
}