import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'contact', component: ContactListComponent },
];


export class AppRoutingModule {}
