// contact-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  isFormOpen: boolean = false;
  contacts: any[] = [];
  newContact: any = {};

  constructor(private dialog: MatDialog) {}

  openForm(): void {
    this.isFormOpen = true;
  }

  closeForm(): void {
    this.isFormOpen = false;
    // Clear form data when the form is closed
    this.newContact = {};
  }

  onSubmit(): void {
    // Push the new contact to the contacts array
    this.contacts.push(this.newContact);

    // Close the form
    this.closeForm();
  }
}
