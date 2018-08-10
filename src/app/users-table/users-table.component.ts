import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  

  // @Input() users: Array<User>;
  users: Array<User>;
  @Output() deleteUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UserService) {
    this.users = userService.getUsers();
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userService.usersSubcribe().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }



  deleteClick(user: User) {
    // this.deleteUser.emit(user);
    this.userService.handleUserDeletion(user);
    console.log(this.users);
  }

}
