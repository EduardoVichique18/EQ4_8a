import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicio.service';
@Component({
  selector: 'app-catalogo-servicios',
  templateUrl: './catalogo-servicios.component.html',
  styleUrls: ['./catalogo-servicios.component.css'],
  standalone : false,
})
export class CatalogoServiciosComponent implements OnInit {

  servicios: any[] = [];

  constructor(private serviciosService: ServiciosService) { }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(): void {
    this.serviciosService.getServicios().subscribe(
      (data) => {
        this.servicios = data;
      },
      (error) => {
        console.error('Error al obtener servicios:', error);
      }
    );
  }
}
