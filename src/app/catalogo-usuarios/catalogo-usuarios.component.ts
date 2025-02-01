import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo-usuarios',
  templateUrl: './catalogo-usuarios.component.html',
  styleUrls: ['./catalogo-usuarios.component.css'],
  standalone: false
})
export class CatalogoUsuariosComponent {
  // Datos estáticos de usuarios
  usuarios = [
    {
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'Gómez',
      gmail: 'juan.perez@gmail.com'
    },
    {
      nombre: 'María',
      apellidoPaterno: 'López',
      apellidoMaterno: 'Martínez',
      gmail: 'maria.lopez@gmail.com'
    },
    {
      nombre: 'Carlos',
      apellidoPaterno: 'García',
      apellidoMaterno: 'Hernández',
      gmail: 'carlos.garcia@gmail.com'
    },
    {
      nombre: 'Ana',
      apellidoPaterno: 'Díaz',
      apellidoMaterno: 'Sánchez',
      gmail: 'ana.diaz@gmail.com'
    }
  ];
}