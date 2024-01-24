import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      loginUsername: ['', Validators.required],
      loginPassword: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('loginUsername')?.value;
      const password = this.loginForm.get('loginPassword')?.value;

      // Implement your login logic using the entered username and password
      // You can compare them against the sign-up details or perform any necessary verification

      console.log('Login clicked');
      console.log('Username:', username);
      console.log('Password:', password);

      this.router.navigate(['/contact']);
    } else {
      console.log('Form is invalid. Please check the fields.');
      // You can display error messages or handle validation feedback to the user
    }
  }
}
