// src/app/catalogo-servicios/catalogo-servicios.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoServiciosComponent } from './catalogo-servicios.component';

@NgModule({
  declarations: [
    CatalogoServiciosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatalogoServiciosComponent // Exportar el componente si lo usarás en otros módulos
  ]
})
export class CatalogoServiciosModule { }