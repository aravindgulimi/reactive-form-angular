import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userName: string = 'Aravind';
  password: string = '';
  errorMsg: string = 'Invalid details';
  inValidLogin: boolean = false;

  constructor(private route : Router){}

  onNewUser(){
    this.route.navigate(['/regPage']);
  }

  handleLogIn(){
    if(this.userName === 'Aravind' && this.password === 'dummy'){
      this.route.navigate(['/welcome', this.userName]);
      this.inValidLogin = false;
    }
    else{
      this.inValidLogin = true;
    }
  }
}
