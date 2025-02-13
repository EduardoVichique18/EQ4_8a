import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CatalogoUsuariosComponent } from './catalogo-usuarios/catalogo-usuarios.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoServiciosModule } from './catalogo-servicios/catalogo-servicios.module';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { OfertaEducativaComponent } from './oferta-educativa/oferta-educativa.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CatalogoUsuariosComponent,
    ConocenosComponent,
    ContactoComponent,
    InicioComponent,
    OfertaEducativaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    CatalogoServiciosModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
