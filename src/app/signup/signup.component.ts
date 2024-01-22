import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { CommonModule, NgIfContext } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone:true,
imports:[FormsModule,LoginComponent,CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpUsername: string = '';
  signUpTelephoneNumber: string = '';
  signUpPassword: string = '';
  signupConfirmPassword: string = '';
  signupCountry: string = '';
  signUpfile: any; // Adjust the type based on the file data you expect
showSignUpForm: any;
loginForm: TemplateRef<NgIfContext<any>> | null | undefined;

  onSignUp() {
    // Implement your sign-up logic here
    console.log('Sign-up clicked');
    console.log('Username:', this.signUpUsername);
    console.log('Telephone Number:', this.signUpTelephoneNumber);
    console.log('Password:', this.signUpPassword);
    console.log('Confirm Password:', this.signupConfirmPassword);
    console.log('Country:', this.signupCountry);
    console.log('Profile Picture:', this.signUpfile);
  }
}
