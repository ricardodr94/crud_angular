import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  usuario:Usuarios = {};

  constructor(private userService:UsuarioService ) { }

  ngOnInit(): void {
  }

  createNewUser(){
    console.log(this.usuario);
    this.userService.createUsuario(this.usuario).subscribe( res=>{
        console.log(res);
    }, err=>{
      console.error(err);
    });
  }

}
