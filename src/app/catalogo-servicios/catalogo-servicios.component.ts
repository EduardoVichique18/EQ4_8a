import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catalogo-servicios',
  templateUrl: './catalogo-servicios.component.html',
  styleUrls: ['./catalogo-servicios.component.css'],
  standalone: false,
})
export class CatalogoServiciosComponent {
  @ViewChild('modal') modal: any; // Referencia al modal en el HTML

  // Servicios predefinidos
  servicios = [
    {
      id: 1,
      nombre: 'Asesoría Académica',
      descripcion: 'Orientación personalizada para estudiantes en su trayectoria académica.',
      precio: 'Gratuito',
      imagen: 'assets/asesoria.jpg',
    },
    {
      id: 2,
      nombre: 'Taller de Habilidades Blandas',
      descripcion: 'Desarrollo de competencias como comunicación, liderazgo y trabajo en equipo.',
      precio: '$200',
      imagen: '/assets/blandas.jpg',
    },
    {
      id: 3,
      nombre: 'Cursos en Línea',
      descripcion: 'Acceso a plataforma de cursos en línea sobre diversas áreas del conocimiento.',
      precio: '$150',
      imagen: '/assets/cursos.jpg',
    },
    {
      id: 4,
      nombre: 'Biblioteca Virtual',
      descripcion: 'Acceso a una amplia colección de libros y recursos digitales.',
      precio: 'Gratuito',
      imagen: '/assets/biblio.jpeg',
    },
  ];

  servicioForm: FormGroup;
  editando = false;
  servicioEditId: number | null = null;

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.servicioForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required],
    });
  }

  // Método para abrir el modal
  openModal() {
    this.servicioForm.reset(); // Limpia el formulario
    this.editando = false; // Reinicia el estado de edición
    this.modalService.open(this.modal, { centered: true }); // Abre el modal usando la referencia
  }

  agregarServicio() {
    if (this.servicioForm.valid) {
      const nuevoServicio = {
        id: this.servicios.length + 1, // Generar un ID único
        ...this.servicioForm.value,
      };
      this.servicios.push(nuevoServicio);
      this.servicioForm.reset();
      this.modalService.dismissAll(); // Cierra el modal
    }
  }

  editarServicio(servicio: any) {
    this.editando = true;
    this.servicioEditId = servicio.id;
    this.servicioForm.patchValue(servicio);
    this.modalService.open(this.modal, { centered: true }); // Abre el modal usando la referencia
  }

  guardarEdicion() {
    if (this.servicioForm.valid) {
      const index = this.servicios.findIndex((s) => s.id === this.servicioEditId);
      if (index !== -1) {
        this.servicios[index] = { id: this.servicioEditId, ...this.servicioForm.value };
        this.servicioForm.reset();
        this.editando = false;
        this.servicioEditId = null;
        this.modalService.dismissAll(); // Cierra el modal
      }
    }
  }

  eliminarServicio(id: number) {
    this.servicios = this.servicios.filter((s) => s.id !== id);
  }
}