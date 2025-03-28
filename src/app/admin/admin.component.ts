import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  currentView: string = 'dashboard'; 
  isModalOpen: boolean = false; // Variable para controlar el estado del modal

  constructor(private router: Router) {}
  
  openConfirmModal() {
    this.isModalOpen = true; // Abre el modal
  }

  closeConfirmModal() {
    this.isModalOpen = false; // Cierra el modal
  }

  cerrarSesion() {
    this.isModalOpen = false; // Cierra el modal antes de navegar
    this.router.navigate(['/inicio']); // Navega a la página de inicio
  }
  
  changeView(view: string) {
    this.currentView = view;
  }
}