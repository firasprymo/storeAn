import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/auth/service/authentication.service';
import { User } from 'app/auth/models';
import { UserService } from 'app/auth/service/user.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;

  constructor(private authenticationService: AuthenticationService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  this.authenticationService.currentUser.subscribe(user => {
    this.currentUser = user;
    if (user) {
      this.userService.getMe().subscribe(res => {
        this.currentUser = res;
      });
    }
  });
}

onModify(): void {
  this.router.navigate(['/modifier-password']);
}

}






 