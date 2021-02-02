import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuarios[] = [];

  constructor(private userService: UsuarioService ) { }

  ngOnInit(): void {
    this.userService.getUsuarios()
      .subscribe( (res:any)=>{
          console.log(res);
          this.usuarios = res.results[0];
      }, err =>{
        console.error(err);
    });
  }

  

}
