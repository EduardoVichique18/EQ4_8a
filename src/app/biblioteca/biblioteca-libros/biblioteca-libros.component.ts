import { Component } from '@angular/core';

@Component({
  selector: 'app-biblioteca-libros',
  templateUrl: './biblioteca-libros.component.html',
  styleUrls: ['./biblioteca-libros.component.scss'],
  standalone: false
})
export class BibliotecaLibrosComponent {
  libros = [
    { id: 1, nombre: 'El principito', autor: 'Antoine de Saint-Exupéry', imagen: 'assets/libros/principito.jpg', pdf: 'assets/libros/principito.pdf' },
    { id: 2, nombre: '1984', autor: 'George Orwell', imagen: 'assets/libros/1984.jpg', pdf: 'assets/libros/1984.pdf' },
    { id: 3, nombre: 'Cien años de soledad', autor: 'Gabriel García Márquez', imagen: 'assets/libros/cien-años.jpg', pdf: 'assets/libros/cien-años.pdf' },
    { id: 4, nombre: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', imagen: 'assets/libros/quijote.jpg', pdf: 'assets/libros/quijote.pdf' },
    { id: 5, nombre: 'Orgullo y prejuicio', autor: 'Jane Austen', imagen: 'assets/libros/orgullo.jpg', pdf: 'assets/libros/orgullo.pdf' },
    { id: 6, nombre: 'Moby Dick', autor: 'Herman Melville', imagen: 'assets/libros/moby.jpg', pdf: 'assets/libros/moby.pdf' },
    { id: 7, nombre: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', imagen: 'assets/libros/crimen.jpg', pdf: 'assets/libros/crimen.pdf' },
    { id: 8, nombre: 'La Odisea', autor: 'Homero', imagen: 'assets/libros/odisea.jpg', pdf: 'assets/libros/odisea.pdf' },
    { id: 9, nombre: 'Hamlet', autor: 'William Shakespeare', imagen: 'assets/libros/hamlet.jpg', pdf: 'assets/libros/hamlet.pdf' }
  ];

  descargarLibro(pdfUrl: string) {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop() || 'libro.pdf';
    link.click();
  }
}