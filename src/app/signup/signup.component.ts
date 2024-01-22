import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[CommonModule, FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
switchToLogin() {
throw new Error('Method not implemented.');
}

  signupForm!: FormGroup;

  constructor(private router:Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      signupUsername: ['', [Validators.required, Validators.minLength(4)]],
      signupTelephoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      signupEmail: ['', [Validators.required, Validators.email]],
      signupPassword: ['', [Validators.required, Validators.minLength(6)]],
      signupConfirmPassword: ['', Validators.required],
      signupCountry: ['', Validators.required],
      signupfile: [null, Validators.required],
     }, { validators: this.passwordMatchValidator });
}


passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('signupPassword');
  const confirmPassword = control.get('signupConfirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { 'mismatch': true };
  }

  return null;
}

  onSignUp() {
    if (this.signupForm.valid) {
      console.log('Sign-up clicked');
      console.log('Form values:', this.signupForm.value);
this.router.navigate(['/login'])
      // Implement your sign-up logic here (since there's no backend, it won't actually register a user)
    } else {
      console.log('Form is invalid. Please check the fields.');
      // You can display error messages or handle validation feedback to the user
    }
  }
}
