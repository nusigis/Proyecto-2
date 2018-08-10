import { Component, OnInit } from '@angular/core';
import { User } from './classes/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  private internalUsers: Array<User>;
  // private searchText: string;
  private users: Array<User>;

  constructor(private userService: UserService) {
    this.internalUsers = userService.getUsers();
  }

  ngOnInit() {
    this.users = [...this.internalUsers];
  }

  // handleUserDeletion(user: User) {
  //   this.internalUsers = this.internalUsers.filter(u => u.id !== user.id);
  //   this.users = [...this.internalUsers];
  //   if (this.searchText) {
  //     this.users = this.internalUsers.filter(u => u.name.includes(this.searchText));
  //   }
  // }

  // searchUser(searchText: string) {
  //   this.searchText = searchText;
  //   this.users = this.internalUsers.filter(u => u.name.includes(searchText));
  // }

}
