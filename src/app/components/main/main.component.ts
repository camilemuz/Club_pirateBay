import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { user } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
  /* this.token=this.authService.gettoken();
   this.authService.getDatos(this.token);
   console.log(this.authService.gettoken());*/
  

   this.token=this.authService.gettoken();
    this.authService.getDatos(this.token);
    this.authService.getDatos(this.token).subscribe((response) => {
      console.log('datos: ', response);
  });
    this.authService.getDatos(this.token).subscribe((data: user[]) => {
      this.users = data;
      console.log(data);
    });
  }
  exit(){
    this.authService.remove();
    this.router.navigate(["login"]);
  }
  verificar(){
    this.token=this.authService.gettoken();
    if(this.token){
      console.log("session ok");
    }else{
      this.router.navigate(["login"]);
    }
  }
}
