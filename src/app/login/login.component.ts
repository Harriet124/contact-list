
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginUsername: string = '';
  loginPassword: string = '';

  constructor(private router:Router){}
ngOnInit(): void {

}

  onLogin() {
    // Implement your login logic here
    console.log('Login clicked');
    console.log('Username:', this.loginUsername);
    console.log('Password:', this.loginPassword);

    this.router.navigate(['/contact']);
  }
}
