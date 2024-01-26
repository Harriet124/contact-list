import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  // User Information
  userName: string | undefined;
  userEmail: string | undefined;
  userDOB: string | undefined;
  userPhone: string | undefined;
  userCountry: string | undefined;
  profilePicture: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userContact = this.route.snapshot?.data['userContact'];

    if (userContact) {
      this.userName = userContact.name;
      this.userEmail = userContact.email;
      // ... other properties
    } else {
      // Handle case when no userContact is available
    }
  }
}
