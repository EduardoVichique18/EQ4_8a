import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoServiciosComponent } from './catalogo-servicios/catalogo-servicios.component';
import { CatalogoUsuariosComponent } from './catalogo-usuarios/catalogo-usuarios.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
