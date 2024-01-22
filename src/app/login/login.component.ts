
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginUsername: string = '';
  loginPassword: string = '';

  onLogin() {
    // Implement your login logic here
    console.log('Login clicked');
    console.log('Username:', this.loginUsername);
    console.log('Password:', this.loginPassword);
  }
}
