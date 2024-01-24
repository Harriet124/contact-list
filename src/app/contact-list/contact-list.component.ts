// contact-list.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

interface ContactModel {
  name: string;
  email: string;
  telephoneNumber: string;
  stack: string;
  profilePicture?: string | undefined;
}

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  getImage(arg0: string) {
    throw new Error('Method not implemented.');
  }
  isFormOpen: boolean = false;
  contacts: ContactModel[] = [];
  newContact: ContactModel = { name: '', email: '', telephoneNumber: '', stack: '' };
  selectedContact: ContactModel | null = null;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  openForm(): void {
    this.isFormOpen = true;
  }

  onAddClick(): void {
    console.log('Add button clicked');
  }

  closeForm(): void {
    this.isFormOpen = false;
    // Clear form data when the form is closed
    this.newContact = { name: '', email: '', telephoneNumber: '', stack: '' };
  }

  onSubmit(): void {
    if (this.isContactValid(this.newContact)) {
      const profilePicture = localStorage.getItem('currentUserProfilePicture');
      if (profilePicture) {
        this.newContact.profilePicture = profilePicture;
      }
      // Push the new contact to the contacts array
      this.contacts.push(this.newContact);
      // Save contacts
      this.saveContacts();
      // Close the form
      this.closeForm();
    } else {
      console.log('Invalid contact. Please check the fields.');
    }
  }

  onClick(): void {
    if (this.isContactValid(this.newContact)) {
      this.contacts.push(this.newContact);
      this.saveContacts();
      this.closeForm();
    } else {
      console.log('Invalid contact. Please check the fields.');
    }
  }

  onPersonClick(contact: ContactModel): void {
    this.selectedContact = contact;
  }

  private isContactValid(contact: ContactModel): boolean {
    return (
      contact.name.trim() !== '' &&
      contact.email.trim() !== '' &&
      contact.telephoneNumber.trim() !== '' &&
      contact.stack.trim() !== ''
    );
  }

  loadContacts(): void {
    const storedContacts = localStorage.getItem('contacts');
    this.contacts = storedContacts ? JSON.parse(storedContacts) : [];
  }

  saveContacts(): void {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  getImageUrl(profilePicture: string | undefined): string {
    if(profilePicture) {
      return `path/to/profile/picture/${profilePicture}`;
    }
    return 'default/path';

  }
}
