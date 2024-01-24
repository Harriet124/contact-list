
import {  Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'contact', component: ContactListComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
];


export class AppRoutingModule {}
