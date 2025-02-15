import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoServiciosComponent } from './catalogo-servicios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CatalogoServiciosComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [CatalogoServiciosComponent],
})
export class CatalogoServiciosModule { }