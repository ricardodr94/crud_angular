import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_Url = 'http://localhost:3000';

  constructor( private http: HttpClient ) { 
    console.log("consumiendo servicio")
  }

  //metodo para obtener usuarios
  getUsuarios(){
    return this.http.get(`${this.API_Url}/api/usuario`);
  }


  //metodo para obtener un usuario
  getUsuario( id:string ){
    return this.http.get(`${this.API_Url}/api/usuario/${id}`);
  }

  //metodo para crear nuevo usuario
  createUsuario( user:Usuarios ){
    return this.http.post(`${this.API_Url}/api/usuario`, user );
  }

  //metodo para actualizar usuario
  updateUsuario( id:string, updateUser:Usuarios ):Observable<Usuarios>{
    return this.http.put(`${this.API_Url}/api/usuario/${id}`, updateUser);
  }

  //metodo para eliminar usuario
  deleteUsuario( id:string ){
    return this.http.delete(`${this.API_Url}/api/usuario/${id}`);
  }
}








