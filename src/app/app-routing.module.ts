import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoServiciosComponent } from './catalogo-servicios/catalogo-servicios.component';
import { CatalogoUsuariosComponent } from './catalogo-usuarios/catalogo-usuarios.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'catalogo-servicios',
    component: CatalogoServiciosComponent
  },
  {path:'catalogo-usuarios',
    component:CatalogoUsuariosComponent
  },
  {
    path: 'registro',
    component:RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
