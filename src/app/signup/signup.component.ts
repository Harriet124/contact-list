// signup.component.ts

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        signupUsername: ['', [Validators.required, Validators.minLength(4)]],
        signupTelephoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        signupEmail: ['', [Validators.required, Validators.email]],
        signupPassword: ['', [Validators.required, Validators.minLength(6)]],
        signupConfirmPassword: ['', Validators.required],
        signupCountry: ['', Validators.required],
        signupfile: [null, Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('signupPassword');
    const confirmPassword = control.get('signupConfirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { mismatch: true };
    }

    return null;
  }

  onSignUp() {
      console.log('Sign-up clicked');
      console.log('Form values:', this.signupForm.value);

      // Save profile picture to local storage
      const profilePicture = this.signupForm.get('signupfile')!.value;
      localStorage.setItem('currentUserProfilePicture', profilePicture);

      console.log('Navigating to /login...');

      // Redirect to login or contact list page
      this.router.navigate(['/login']);
    }
      // You can display error messages or handle validation feedback to the user

  }


