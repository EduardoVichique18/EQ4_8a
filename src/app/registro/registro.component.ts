import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistroService } from '../registro-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: false
})
export class RegistroComponent {
  showPassword: boolean = false; // Para mostrar/ocultar la contraseña
  errorMessage: string = ''; // Para almacenar mensajes de error
  successMessage: string = ''; // Para almacenar el mensaje de éxito

  constructor(private registroService: RegistroService) {}

  // Alterna la visibilidad de la contraseña
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    const passwordField = document.getElementById('contraseña') as HTMLInputElement;
    const confirmPasswordField = document.getElementById('confirmarContraseña') as HTMLInputElement;

    if (passwordField && confirmPasswordField) {
      passwordField.type = this.showPassword ? 'text' : 'password';
      confirmPasswordField.type = this.showPassword ? 'text' : 'password';
    }
  }

  // Valida que el usuario tenga al menos 17 años
  private validateAge(fechaNacimiento: string): boolean {
    if (!fechaNacimiento) return false;
    const birthDate = new Date(fechaNacimiento);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    // Ajusta la edad si el cumpleaños aún no ocurrió este año
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 17;
  }

  // Maneja el envío del formulario con validaciones y mensajes
  onSubmit(form: NgForm): void {
    // Reiniciamos los mensajes
    this.errorMessage = '';
    this.successMessage = '';

    // Validación del formato de la contraseña
    if (!this.validatePasswordFormat(form.value.contraseña)) {
      this.errorMessage = 'La contraseña debe tener mínimo 8 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial.';
      return;
    }

    // Validación de coincidencia de contraseñas
    if (form.value.contraseña !== form.value.confirmarContraseña) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    // Validación de correo electrónico
    if (!this.validateEmail(form.value.correo)) {
      this.errorMessage = 'Correo electrónico inválido.';
      return;
    }

    // Validación del teléfono
    if (!this.validatePhone(form.value.telefono)) {
      this.errorMessage = 'Número de teléfono inválido. Debe ser un número de 10 dígitos.';
      return;
    }

    // Validación de campos obligatorios
    if (!form.value.nombre || !form.value.lugarNacimiento || !form.value.escuela) {
      this.errorMessage = 'El nombre, lugar de nacimiento y escuela son obligatorios.';
      return;
    }

    // Validación de la fecha de nacimiento: al menos 17 años
    if (!this.validateAge(form.value.fechaNacimiento)) {
      this.errorMessage = 'Debes tener al menos 17 años.';
      return;
    }

    if (form.valid) {
      this.registroService.registrarUsuario(form.value).subscribe(
        response => {
          if (response && response.success) {
            this.successMessage = 'Usuario registrado exitosamente.';
            form.reset();
          } else {
            this.errorMessage = response.message || 'Error en el registro del usuario.';
          }
        },
        error => {
          console.error('Error en el registro:', error);
          this.errorMessage = error.error?.message || 'Ocurrió un error al registrar el usuario.';
        }
      );
    } else {
      this.errorMessage = 'El formulario no es válido.';
    }
  }

  // Valida el formato de la contraseña
  private validatePasswordFormat(password: string): boolean {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return pattern.test(password);
  }

  // Valida el formato del correo electrónico
  private validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  // Valida el formato del teléfono
  private validatePhone(phone: string): boolean {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  }
}
