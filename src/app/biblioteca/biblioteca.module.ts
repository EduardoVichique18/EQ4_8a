import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaLibrosComponent } from './biblioteca-libros/biblioteca-libros.component';

@NgModule({
  declarations: [BibliotecaLibrosComponent],
  imports: [CommonModule],
  exports: [BibliotecaLibrosComponent]
})
export class BibliotecaModule { }