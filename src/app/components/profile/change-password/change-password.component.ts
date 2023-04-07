import { Component, OnInit,  } from '@angular/core';
import { UserService } from 'app/auth/service/user.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  onModify() {
    if (this.newPassword !== this.confirmPassword) {
      alert('New password and confirm password do not match!');
      return;
    }
  
    this.userService.updatePassword(this.currentPassword, this.newPassword).subscribe(
      () => alert('Password updated successfully.'),
      error => alert('Error updating password: ' + error)
    );
  }
  
  }

