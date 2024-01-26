import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ContactListComponent } from './contact-list/contact-list.component';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet,CommonModule, LoginComponent, ContactListComponent, ],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');

    //
  }

  constructor(private router: Router) {}

}
