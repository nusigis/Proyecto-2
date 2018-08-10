import { User } from '../classes/user';
import { Subject } from 'rxjs';

export class UserService{
    private searchText: string;

    private users: User[]  = [
        {id: 1, name: 'Juan', lastName: 'Perez', adress: 'New York', age: 18},
        {id: 2, name: 'Paco', lastName: 'Gonzalez', adress: 'Texas', age: 22},
        {id: 3, name: 'Pedro', lastName: 'Rodriguez', adress: 'Ohio', age: 48}
    ];
    users$ = new Subject<Array<User>>();

    getUsers():Array<User>{
        return this.users.map(a => ({... a}));
    }

    usersSubcribe(){
        return this.users$.asObservable();
    }

    handleUserDeletion(user: User) {
        this.users = this.users.filter(u => u.id !== user.id);
        this.users = [...this.users];
        if (this.searchText) {
          this.users = this.users.filter(u => u.name.includes(this.searchText));
        }
        this.users$.next(this.getUsers());
        console.log(this.users);
    }
    
    searchUser(searchText: string) {
        this.searchText = searchText;
        this.users = this.users.filter(u => u.name.includes(searchText));
        
        this.users$.next(this.getUsers());
        console.log(this.users);
    }
}