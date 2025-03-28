import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-register',
  standalone: false,
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  role: string = 'director';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    // Validación de campos vacíos
    if (!this.email || !this.username || !this.password || this.password.length < 6) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    // Expresiones regulares para validación
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_-]{4,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    // Validaciones específicas
    if (!emailRegex.test(this.email)) {
      alert('El correo no es válido.');
      return;
    }

    if (!usernameRegex.test(this.username)) {
      alert('El usuario solo puede contener letras, números, guiones y guiones bajos.');
      return;
    }

    if (!passwordRegex.test(this.password)) {
      alert('La contraseña debe tener al menos una letra y un número.');
      return;
    }

    // Envío de datos al backend (sin hashear en el frontend)
    this.authService.registerAdmin(this.email, this.username, this.password, this.role).subscribe({
      next: () => {
        alert('Administrador registrado exitosamente');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error en el registro:', error);
        alert(error.error?.message || 'Error al registrar administrador');
      }
    });
  }
}