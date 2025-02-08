import { Component } from '@angular/core';
import { RegistroService } from '../registro-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: false
})
export class RegistroComponent {
  showPassword: boolean = false; // Para mostrar/ocultar la contraseña
  constructor(private registroService: RegistroService) {}

  // Función para alternar la visibilidad de la contraseña
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    const passwordField = document.getElementById('contraseña') as HTMLInputElement;
    const confirmPasswordField = document.getElementById('confirmarContraseña') as HTMLInputElement;

    if (passwordField && confirmPasswordField) {
      passwordField.type = this.showPassword ? 'text' : 'password';
      confirmPasswordField.type = this.showPassword ? 'text' : 'password';
    }
  }

  // Función para manejar el envío del formulario
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.registroService.registrarUsuario(form.value).subscribe(
        response => {
          alert('Usuario registrado exitosamente');
          form.reset();
        },
        error => {
          console.error('Error en el registro:', error);
          alert('Ocurrió un error al registrar el usuario.');
        }
      );
    }
  }
}