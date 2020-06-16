import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent implements OnInit {
  token = null;
  users : user[];
  constructor(private authService:AuthService, private router:Router) { 
    this.verificar();
    this.getuser();
  }

  ngOnInit(): void {
  }
  getuser(){
    this.token=this.authService.gettoken();
    console.log(this.token);
    this.authService.getDatos(this.token).subscribe((data: user[]) => {
      this.users = data;
      console.log(data);

    }, err => {
      500
      if(err){
        console.log("Tiempo expirado");
        this.exit();
      }
      console.log(err)
    });

  }

  verificar(){
    this.token=this.authService.gettoken();
    if(this.token){
      console.log("session ok");
    }else{
      this.router.navigate(["login"]);
    }
  }

  exit(){
    this.authService.remove();
    this.router.navigate(["login"]);
  }
}
