import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './forms/add-user/add-user.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PuntosVentaComponent } from './pages/puntos-venta/puntos-venta.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  { path:'usuarios', component:UsuarioComponent },
  { path:'ptventa', component:PuntosVentaComponent },
  { path:'usuarios/nuevoUsuario', component:AddUserComponent },
  { path:'', pathMatch:'full', redirectTo:'/usuarios' },
  { path:'**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
