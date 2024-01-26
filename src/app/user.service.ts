import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: any;

  constructor() {
    // Initialize currentUser to an empty object or fetch it from storage if available
    const storedUser = localStorage.getItem('currentUser');
    this.currentUser = storedUser ? JSON.parse(storedUser) : {};
  }

  signup(user: any): void {
    // Store user data during signup
    this.currentUser = { ...user };
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  getUserProfile(): any {
    // Return the user profile data
    return this.currentUser;
  }

  addContact(contact: any): void {
    const contacts = this.currentUser.contacts || [];
    contacts.push(contact);
    this.currentUser.contacts = contacts;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  getContacts(): any[] {
    return this.currentUser.contacts || [];
  }

  login(username: string, password: string): boolean {
    // Implement your login logic here
    // For now, we are checking against stored signup details (not secure in a real-world scenario)
    const storedUsername = this.currentUser.signupUsername;
    const storedPassword = this.currentUser.signupPassword;

    if (username === storedUsername && password === storedPassword) {
      // Successful login
      return true;
    } else {
      // Failed login
      return false;
    }
  }
}
