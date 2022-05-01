import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { SearchService } from '../services/search.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  subscription!: Subscription;

  constructor(
    private usersService: UsersService,
    private searchService: SearchService,
  ) {
    this.subscription = this.searchService.getSearchValue().subscribe(value => {
      this.users = this.usersService.handleSearch(value, this.users);
    });
  }

  async ngOnInit() {
    try {
      this.users = await this.usersService.fetch();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
