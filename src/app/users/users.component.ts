import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { SearchService } from '../services/search.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private searchService: SearchService,
  ) {
  }

  async ngOnInit() {
    try {
      this.users = await this.usersService.fetch();
    } catch (error) {
      console.log(error);
    }

    this.searchService.searchValue$.subscribe(async (value) => {
      this.users = this.usersService.handleSearch(value, this.users);
    });
  }
}
