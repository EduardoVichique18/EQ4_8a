import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo-usuarios',
  templateUrl: './catalogo-usuarios.component.html',
  styleUrls: ['./catalogo-usuarios.component.css'],
  standalone: false
})
export class CatalogoUsuariosComponent {
  usuarios = [
    { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', gmail: 'juan.perez@gmail.com' },
    { nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Martínez', gmail: 'maria.lopez@gmail.com' },
    { nombre: 'Carlos', apellidoPaterno: 'García', apellidoMaterno: 'Hernández', gmail: 'carlos.garcia@gmail.com' },
    { nombre: 'Ana', apellidoPaterno: 'Díaz', apellidoMaterno: 'Sánchez', gmail: 'ana.diaz@gmail.com' },
    { nombre: 'Luis', apellidoPaterno: 'Torres', apellidoMaterno: 'Ramírez', gmail: 'luis.torres@gmail.com' },
    { nombre: 'Sofía', apellidoPaterno: 'Martínez', apellidoMaterno: 'Ortega', gmail: 'sofia.martinez@gmail.com' },
    { nombre: 'Pedro', apellidoPaterno: 'Hernández', apellidoMaterno: 'Mendoza', gmail: 'pedro.hernandez@gmail.com' },
    { nombre: 'Fernanda', apellidoPaterno: 'Gómez', apellidoMaterno: 'Castillo', gmail: 'fernanda.gomez@gmail.com' },
    { nombre: 'Javier', apellidoPaterno: 'Mendoza', apellidoMaterno: 'Salazar', gmail: 'javier.mendoza@gmail.com' },
    { nombre: 'Camila', apellidoPaterno: 'Sánchez', apellidoMaterno: 'Vargas', gmail: 'camila.sanchez@gmail.com' },
    { nombre: 'Ricardo', apellidoPaterno: 'Rojas', apellidoMaterno: 'Fernández', gmail: 'ricardo.rojas@gmail.com' },
    { nombre: 'Valentina', apellidoPaterno: 'Navarro', apellidoMaterno: 'Paredes', gmail: 'valentina.navarro@gmail.com' },
    { nombre: 'Diego', apellidoPaterno: 'Gutiérrez', apellidoMaterno: 'Cruz', gmail: 'diego.gutierrez@gmail.com' },
    { nombre: 'Paula', apellidoPaterno: 'Vega', apellidoMaterno: 'Jiménez', gmail: 'paula.vega@gmail.com' },
    { nombre: 'Martín', apellidoPaterno: 'Suárez', apellidoMaterno: 'Luna', gmail: 'martin.suarez@gmail.com' },
    { nombre: 'Diana', apellidoPaterno: 'Herrera', apellidoMaterno: 'Moreno', gmail: 'diana.herrera@gmail.com' },
    { nombre: 'Andrés', apellidoPaterno: 'Pacheco', apellidoMaterno: 'Figueroa', gmail: 'andres.pacheco@gmail.com' },
    { nombre: 'Elena', apellidoPaterno: 'Cabrera', apellidoMaterno: 'Flores', gmail: 'elena.cabrera@gmail.com' },
    { nombre: 'Rodrigo', apellidoPaterno: 'Ortega', apellidoMaterno: 'León', gmail: 'rodrigo.ortega@gmail.com' },
    { nombre: 'Alejandra', apellidoPaterno: 'Peña', apellidoMaterno: 'Silva', gmail: 'alejandra.pena@gmail.com' },
    { nombre: 'Miguel', apellidoPaterno: 'Zamora', apellidoMaterno: 'Escobar', gmail: 'miguel.zamora@gmail.com' },
    { nombre: 'Patricia', apellidoPaterno: 'López', apellidoMaterno: 'Soto', gmail: 'patricia.lopez@gmail.com' },
    { nombre: 'Héctor', apellidoPaterno: 'Núñez', apellidoMaterno: 'Aguilar', gmail: 'hector.nunez@gmail.com' },
    { nombre: 'Gabriela', apellidoPaterno: 'Reyes', apellidoMaterno: 'Maldonado', gmail: 'gabriela.reyes@gmail.com' }
  ];
}
