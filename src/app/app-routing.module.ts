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
import { AdminComponent } from './admin/admin.component'; // Importa el componente de administración
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { BibliotecaLibrosComponent } from './biblioteca/biblioteca-libros/biblioteca-libros.component';
import { EncuestaComponent } from './encuesta/encuesta.component';

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
  {
    path: 'catalogo-usuarios',
    component: CatalogoUsuariosComponent
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
    component: RegistroComponent
  },
  {
    path: 'biblioteca',
    component: BibliotecaLibrosComponent
  },
  {
    path: 'admin', // Agrega la ruta para el componente de administración
    component: AdminComponent
  },

  {
    path: 'encuesta',
    component: EncuestaComponent
  },

  { path: 'admin-register', component: AdminRegisterComponent },

  { path: '**', redirectTo: '/inicio' }, // Corregido para redirigir a /inicio


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }