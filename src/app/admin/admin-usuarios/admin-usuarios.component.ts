import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario} from '../../services/usuario.service';

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
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    edad: 0
  };
  modoEdicion: boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  agregarUsuario(): void {
    if (this.validarFormulario()) {
      this.usuarioService.crearUsuario(this.nuevoUsuario).subscribe(usuario => {
        this.usuarios.push(usuario);
        this.limpiarFormulario();
      });
    }
  }

  editarUsuario(usuario: Usuario): void {
    this.usuarioSeleccionado = { ...usuario };
    this.nuevoUsuario = { ...usuario };
    this.modoEdicion = true;
  }

  actualizarUsuario(): void {
    if (this.validarFormulario() && this.usuarioSeleccionado) {
      this.usuarioService.actualizarUsuario(this.usuarioSeleccionado._id!, this.nuevoUsuario).subscribe(usuarioActualizado => {
        const index = this.usuarios.findIndex(u => u._id === this.usuarioSeleccionado!._id);
        if (index !== -1) {
          this.usuarios[index] = usuarioActualizado;
        }
        this.limpiarFormulario();
        this.modoEdicion = false;
      });
    }
  }

  eliminarUsuario(id: string): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(id).subscribe(() => {
        this.usuarios = this.usuarios.filter(u => u._id !== id);
      });
    }
  }

  cancelarEdicion(): void {
    this.limpiarFormulario();
    this.modoEdicion = false;
    this.usuarioSeleccionado = null;
  }

  limpiarFormulario(): void {
    this.nuevoUsuario = {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      correo: '',
      edad: 0
    };
  }

  validarFormulario(): boolean {
    return this.nuevoUsuario.nombre.trim() !== '' &&
           this.nuevoUsuario.apellidoPaterno.trim() !== '' &&
           this.nuevoUsuario.apellidoMaterno.trim() !== '' &&
           this.nuevoUsuario.correo.trim() !== '' &&
           this.nuevoUsuario.edad > 0;
  }
}
