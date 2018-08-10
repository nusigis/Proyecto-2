import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';


@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {

  private users:User[];
  private user:User;
  //@Output() searchUser: EventEmitter<string> = new EventEmitter<string>();
  constructor(private userService: UserService) {
    this.users = userService.getUsers();
   }

  ngOnInit() {
  }

  search (event: MouseEvent, text: string) {
    event.preventDefault();
    this.userService.searchUser(text);
    //console.log('User-Serach', this.userService.searchUser(text));
    // this.searchUser.emit(text);
  }

}
