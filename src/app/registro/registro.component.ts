import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: false
})
export class RegistroComponent {
  showPassword: boolean = false; // Para mostrar/ocultar la contraseña

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
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Formulario enviado:', form.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}