import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { OfertaEducativaComponent } from './oferta-educativa/oferta-educativa.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CatalogoServiciosComponent } from './catalogo-servicios/catalogo-servicios.component';
import { CatalogoUsuariosComponent } from './catalogo-usuarios/catalogo-usuarios.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'catalogo-servicios',
    component: CatalogoServiciosComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {path:'catalogo-usuarios',
    component:CatalogoUsuariosComponent
  },
  {
    path: 'conocenos',
    component: ConocenosComponent
  },
  {
    path: 'oferta-educativa',
    component: OfertaEducativaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component:RegistroComponent
  },
  
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
