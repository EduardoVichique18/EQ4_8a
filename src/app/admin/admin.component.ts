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
  
  constructor(private router: Router) {}
  
  cerrarSesion() {
    this.router.navigate(['/inicio']);
  }
  
  changeView(view: string) {
    this.currentView = view;
  }
}