import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//HttpClientModule
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PuntosVentaComponent } from './pages/puntos-venta/puntos-venta.component';
import { AddUserComponent } from './forms/add-user/add-user.component';

//formulario
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    NavbarComponent,
    NopagefoundComponent,
    PuntosVentaComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
