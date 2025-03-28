import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistroService } from '../services/registro.service';

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

  // Validación para entradas numéricas
  validateNumericInput(event: any, maxLength: number): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

  // Maneja el envío del formulario con validaciones y mensajes
  onSubmit(form: NgForm): void {
    // Reiniciamos los mensajes
    this.errorMessage = '';
    this.successMessage = '';

    // Validación de coincidencia de contraseñas
    if (form.value.password !== form.value.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    // Validación de la fecha de nacimiento: al menos 17 años
    if (!this.validateAge(form.value.fechaNacimiento)) {
      this.errorMessage = 'Debes tener al menos 17 años.';
      return;
    }

    // Validación de campos obligatorios
    if (!form.value.nombre || !form.value.apellidoPaterno || !form.value.apellidoMaterno) {
      this.errorMessage = 'Los datos personales son obligatorios.';
      return;
    }

    if (form.valid) {
      // Crear objeto de datos a enviar
      const userData = {
        apellidoPaterno: form.value.apellidoPaterno,
        apellidoMaterno: form.value.apellidoMaterno,
        nombre: form.value.nombre,
        fechaNacimiento: form.value.fechaNacimiento,
        lugarNacimiento: form.value.lugarNacimiento,
        sexo: form.value.sexo,
        escuela: form.value.escuela,
        ocupacion: form.value.ocupacion,
        estadoCivil: form.value.estadoCivil,
        direccion: form.value.direccion,
        codigoPostal: form.value.codigoPostal,
        telefono: form.value.telefono,
        correo: form.value.correo,
        password: form.value.password,
      };

      this.registroService.registrarUsuario(userData).subscribe(
        response => {
          // La API devuelve {mensaje: '...', aspirante: {...}}
          console.log('Respuesta del servidor:', response);
          this.successMessage = response.mensaje || 'Usuario registrado exitosamente.';
          form.reset();
        },
        error => {
          console.error('Error en el registro:', error);
          this.errorMessage = error.error?.mensaje || 'Ocurrió un error al registrar el usuario.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, completa correctamente todos los campos obligatorios.';
    }
  }
}