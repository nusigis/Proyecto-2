import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UserFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
