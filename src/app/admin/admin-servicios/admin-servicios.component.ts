import { Component, OnInit } from '@angular/core';
import { ServiciosService, Servicio } from './servicios.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-admin-servicios',
  standalone: false,
  templateUrl: './admin-servicios.component.html',
  styleUrls: ['./admin-servicios.component.css']
})
export class AdminServiciosComponent implements OnInit {
  servicios: Servicio[] = [];
  servicioSeleccionado: Servicio | null = null;
  nuevoServicio: Servicio = {
    nombre: '',
    descripcion: '',
    disponible: true,
    categoria: '',
    imagen: ''
  };
  modoEdicion: boolean = false;
  cargando: boolean = false;
  error: string = '';
  
  constructor(private serviciosService: ServiciosService, private sanitizer: DomSanitizer) { }
  previewImagen: string | null = null;

  
  ngOnInit(): void {
    this.cargarServicios();
  }
  
  cargarServicios(): void {
    this.cargando = true;
    this.serviciosService.getServicios().subscribe({
      next: (data) => {
        this.servicios = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar servicios:', err);
        this.error = 'No se pudieron cargar los servicios. Por favor, intente nuevamente.';
        this.cargando = false;
      }
    });
  }
  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.nuevoServicio.imagen = reader.result as string; // Guardamos base64
        this.previewImagen = reader.result as string;        // Para mostrar preview
      };
      reader.readAsDataURL(file);
    }
  }
  
  agregarServicio(): void {
    if (this.validarFormulario()) {
      this.cargando = true;
      this.serviciosService.crearServicio(this.nuevoServicio).subscribe({
        next: (servicio) => {
          this.servicios.push(servicio);
          this.limpiarFormulario();
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error al agregar servicio:', err);
          this.error = 'No se pudo agregar el servicio. Por favor, intente nuevamente.';
          this.cargando = false;
        }
      });
    }
  }
  
  editarServicio(servicio: Servicio): void {
    this.servicioSeleccionado = { ...servicio };
    this.nuevoServicio = { ...servicio };
    this.modoEdicion = true;
  }
  
  actualizarServicio(): void {
    if (this.validarFormulario() && this.servicioSeleccionado && this.servicioSeleccionado.id) {
      this.cargando = true;
      this.serviciosService.actualizarServicio(this.servicioSeleccionado.id, this.nuevoServicio).subscribe({
        next: (servicioActualizado) => {
          const index = this.servicios.findIndex(s => s.id === this.servicioSeleccionado!.id);
          if (index !== -1) {
            this.servicios[index] = servicioActualizado;
          }
          this.limpiarFormulario();
          this.modoEdicion = false;
          this.servicioSeleccionado = null;
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error al actualizar servicio:', err);
          this.error = 'No se pudo actualizar el servicio. Por favor, intente nuevamente.';
          this.cargando = false;
        }
      });
    }
  }
  
  eliminarServicio(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este servicio?')) {
      this.cargando = true;
      this.serviciosService.eliminarServicio(id).subscribe({
        next: () => {
          this.servicios = this.servicios.filter(s => s.id !== id);
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error al eliminar servicio:', err);
          this.error = 'No se pudo eliminar el servicio. Por favor, intente nuevamente.';
          this.cargando = false;
        }
      });
    }
  }
  
  cancelarEdicion(): void {
    this.limpiarFormulario();
    this.modoEdicion = false;
    this.servicioSeleccionado = null;
  }
  
  limpiarFormulario(): void {
    this.nuevoServicio = {
      nombre: '',
      descripcion: '',
      disponible: true,
      categoria: '',
      imagen: ''
    };
    this.error = '';
  }
  
  validarFormulario(): boolean {
    return this.nuevoServicio.nombre.trim() !== '' &&
           this.nuevoServicio.descripcion.trim() !== '' &&
           this.nuevoServicio.categoria.trim() !== '';
  }
}