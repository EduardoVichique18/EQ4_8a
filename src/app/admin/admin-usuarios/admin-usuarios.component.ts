// admin-usuarios.component.ts
import { Component, OnInit } from '@angular/core';

interface Usuario {
  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correo: string;
  edad: number;
}

@Component({
  selector: 'app-admin-usuarios',
  standalone: false,
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSeleccionado: Usuario | null = null;
  nuevoUsuario: Usuario = {
    id: 0,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    edad: 0
  };
  modoEdicion: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    // Datos estáticos para el inicio
    this.usuarios = [
      { id: 1, nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'Gómez', correo: 'juan@example.com', edad: 25 },
      { id: 2, nombre: 'María', apellidoPaterno: 'López', apellidoMaterno: 'Sánchez', correo: 'maria@example.com', edad: 30 },
      { id: 3, nombre: 'Carlos', apellidoPaterno: 'Rodríguez', apellidoMaterno: 'Martínez', correo: 'carlos@example.com', edad: 35 }
    ];
  }

  agregarUsuario(): void {
    if (this.validarFormulario()) {
      // Asignar un nuevo ID
      const nuevoId = this.usuarios.length > 0 ? Math.max(...this.usuarios.map(u => u.id)) + 1 : 1;
      
      const usuario: Usuario = {
        ...this.nuevoUsuario,
        id: nuevoId
      };
      
      this.usuarios.push(usuario);
      this.limpiarFormulario();
    }
  }

  editarUsuario(usuario: Usuario): void {
    this.usuarioSeleccionado = { ...usuario };
    this.nuevoUsuario = { ...usuario };
    this.modoEdicion = true;
  }

  actualizarUsuario(): void {
    if (this.validarFormulario() && this.usuarioSeleccionado) {
      const index = this.usuarios.findIndex(u => u.id === this.usuarioSeleccionado!.id);
      if (index !== -1) {
        this.usuarios[index] = { ...this.nuevoUsuario };
        this.limpiarFormulario();
        this.modoEdicion = false;
        this.usuarioSeleccionado = null;
      }
    }
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarios = this.usuarios.filter(u => u.id !== id);
    }
  }

  cancelarEdicion(): void {
    this.limpiarFormulario();
    this.modoEdicion = false;
    this.usuarioSeleccionado = null;
  }

  limpiarFormulario(): void {
    this.nuevoUsuario = {
      id: 0,
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      correo: '',
      edad: 0
    };
  }

  validarFormulario(): boolean {
    // Implementa validaciones según tus necesidades
    return this.nuevoUsuario.nombre.trim() !== '' && 
           this.nuevoUsuario.apellidoPaterno.trim() !== '' && 
           this.nuevoUsuario.apellidoMaterno.trim() !== '' && 
           this.nuevoUsuario.correo.trim() !== '' && 
           this.nuevoUsuario.edad > 0;
  }
}