// contact-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactModel } from '../contact.model';// Import your ContactModel if it's in a separate file
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports:[ FormsModule, CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  userName: any;
  userRole: any;
  phoneNumber: any;
  email: any;
  chat: any;
  contact!: ContactModel;
  isFormOpen: boolean = false;
  contacts: ContactModel[] = [];
  newContact: ContactModel = {
    name: '',
    email: '',
    telephoneNumber: '',
    stack: '',
    country: '',
  };
  selectedContact: ContactModel | null = null;
  userService: any;

  constructor(private dialog: MatDialog, private router: Router) {}

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
    this.newContact = {
      name: '',
      email: '',
      telephoneNumber: '',
      stack: '',
      country: '',
    };
  }

  onSubmit(): void {
    if (this.isContactValid(this.newContact)) {
      const profilePicture = localStorage.getItem('currentUserProfilePicture');
      this.newContact.profilePicture = profilePicture!;

      // Add the new contact using UserService
      this.userService.addContact(this.newContact);

      // Refresh contacts from UserService
      this.contacts = this.userService.getContacts();

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

  viewUserProfile(): void {
    console.log('viewUserProfile called');

    if(this.selectedContact){
      this.openForm();
    }else{
      const userContact: ContactModel = {
        name: 'User Name',
        email: 'user@email.com',
        telephoneNumber: '1234567890',
        stack: 'User Stack',
        country: 'User Country',

    };
    const navigationExtras: NavigationExtras ={
      state : {userContact}
    };

    this.router.navigate(['/user-profile'], { state: {userContact}});
    }





    // Assign the userContact to the selectedContact
      // Assuming you have a UserProfileComponent for displaying the
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
    if (profilePicture) {
      return `assets/profile-picture/${profilePicture}`;
    }
    return 'default/path';
  }
}
